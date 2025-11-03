import type { Message } from 'ai';
import { generateId } from './fileUtils';

interface FileContent {
  content: string;
  path: string;
}

interface ProjectIssue {
  file: string;
  issue: string;
  fix: string;
  fixedContent?: string;
}

interface AutoFixResult {
  issues: ProjectIssue[];
  fixes: FileContent[];
  setupCommand: string;
  startCommand?: string;
}

/**
 * Automatically detects and fixes common Next.js project issues
 */
export async function autoFixProject(files: FileContent[]): Promise<AutoFixResult> {
  const issues: ProjectIssue[] = [];
  const fixes: FileContent[] = [];
  let setupCommand = 'npm install';
  let startCommand: string | undefined;

  // Find package.json
  const packageJsonFile = files.find((f) => f.path.endsWith('package.json'));

  if (packageJsonFile) {
    try {
      const packageJson = JSON.parse(packageJsonFile.content);
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };

      // Detect project type
      const isNextJs = dependencies['next'] !== undefined;
      const nextVersion = dependencies['next'];
      const hasModernDependencies = isNextJs && (
        dependencies['@radix-ui/react-dialog'] ||
        dependencies['lucide-react'] ||
        dependencies['framer-motion'] ||
        dependencies['three']
      );

      // Consolidate all package.json fixes
      let needsPackageJsonFix = false;
      const fixedPackageJson = { ...packageJson };

      // Detect Tailwind version and ensure proper PostCSS setup
      const hasTailwindV4PostCSS = dependencies['@tailwindcss/postcss'];
      const hasTailwindV3 = dependencies['tailwindcss'] && !hasTailwindV4PostCSS;

      // If project has @tailwindcss/postcss, it's a Tailwind v4 project
      // Don't remove it - it's required!

      // Next.js 16 uses Turbopack which doesn't work in WebContainer - downgrade to 15.1.0
      if (nextVersion && (nextVersion.startsWith('16') || nextVersion === 'latest')) {
        if (fixedPackageJson.dependencies?.['next']) {
          fixedPackageJson.dependencies['next'] = '15.1.0';
        }
        if (fixedPackageJson.devDependencies?.['next']) {
          fixedPackageJson.devDependencies['next'] = '15.1.0';
        }

        needsPackageJsonFix = true;
        issues.push({
          file: 'package.json',
          issue: 'Next.js 16.x detected - Turbopack not compatible with WebContainer',
          fix: 'Downgraded to Next.js 15.1.0 (last version before mandatory Turbopack)'
        });
      }

      // React 19 has compatibility issues - downgrade to 18.3.1
      const reactVersion = dependencies['react'];
      if (reactVersion && reactVersion.startsWith('19')) {
        if (fixedPackageJson.dependencies?.['react']) {
          fixedPackageJson.dependencies['react'] = '18.3.1';
        }
        if (fixedPackageJson.dependencies?.['react-dom']) {
          fixedPackageJson.dependencies['react-dom'] = '18.3.1';
        }

        needsPackageJsonFix = true;
        issues.push({
          file: 'package.json',
          issue: 'React 19.x detected - has compatibility issues',
          fix: 'Downgraded to React 18.3.1 for better compatibility'
        });
      }

      // Apply package.json fix if needed
      if (needsPackageJsonFix) {
        fixes.push({
          path: packageJsonFile.path,
          content: JSON.stringify(fixedPackageJson, null, 2)
        });
      }

      // Set install command based on project type
      if (hasModernDependencies || (isNextJs && nextVersion && (nextVersion.startsWith('15') || nextVersion.startsWith('16') || nextVersion === 'latest'))) {
        setupCommand = 'npm install --legacy-peer-deps';

        issues.push({
          file: 'package.json',
          issue: 'Next.js 15+ project with modern dependencies detected',
          fix: 'Using --legacy-peer-deps flag for compatibility'
        });
      }
    } catch (error) {
      console.error('Error parsing package.json:', error);
    }
  }

  // Check postcss.config files - only fix if there's an actual conflict
  // Don't change Tailwind v4 configs to v3!
  const postcssConfigs = files.filter((f) =>
    f.path.includes('postcss.config') && (f.path.endsWith('.js') || f.path.endsWith('.mjs') || f.path.endsWith('.cjs'))
  );

  // Check if project has Tailwind v4 PostCSS plugin
  let hasTailwindV4PostCSS = false;

  if (packageJsonFile) {
    try {
      const packageJson = JSON.parse(packageJsonFile.content);
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      hasTailwindV4PostCSS = dependencies['@tailwindcss/postcss'] !== undefined;
    } catch (error) {
      console.error('Error checking Tailwind version:', error);
    }
  }

  for (const config of postcssConfigs) {
    // Only convert to v3 if project doesn't have @tailwindcss/postcss installed
    // but the config is trying to use it
    if (!hasTailwindV4PostCSS && config.content.includes('@tailwindcss/postcss')) {
      issues.push({
        file: config.path,
        issue: 'PostCSS config references @tailwindcss/postcss but package not installed',
        fix: 'Update to use standard tailwindcss and autoprefixer plugins'
      });

      // Fix postcss config to v3
      const fixedContent = `/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

export default config
`;

      fixes.push({
        path: config.path,
        content: fixedContent
      });
    }
  }

  // Check globals.css for Tailwind issues
  const globalsCss = files.find((f) =>
    f.path.includes('globals.css') || f.path.includes('global.css')
  );

  if (globalsCss) {
    let needsFix = false;
    let fixedContent = globalsCss.content;

    // Check for Tailwind v4 imports
    if (fixedContent.includes('@import "tailwindcss"') || fixedContent.includes("@import 'tailwindcss'")) {
      issues.push({
        file: globalsCss.path,
        issue: 'Using Tailwind v4 @import syntax',
        fix: 'Remove @import statements, use only @tailwind directives'
      });

      fixedContent = fixedContent
        .replace(/@import\s+["']tailwindcss["'];?\n?/g, '')
        .replace(/@import\s+["']tw-animate-css["'];?\n?/g, '');
      needsFix = true;
    }

    // Check for unclosed CSS blocks
    const openBraces = (fixedContent.match(/\{/g) || []).length;
    const closeBraces = (fixedContent.match(/\}/g) || []).length;

    if (openBraces > closeBraces) {
      issues.push({
        file: globalsCss.path,
        issue: `Unclosed CSS blocks detected (${openBraces - closeBraces} missing closing braces)`,
        fix: 'Add missing closing braces'
      });

      const missing = openBraces - closeBraces;
      fixedContent += '\n' + '  }'.repeat(Math.min(missing, 2)); // Add up to 2 closing braces
      needsFix = true;
    }

    // Check for incomplete CSS properties
    const incompleteProps = fixedContent.match(/--[\w-]+:\s*\d+\s*$/gm);
    if (incompleteProps) {
      issues.push({
        file: globalsCss.path,
        issue: 'Incomplete CSS custom properties found',
        fix: 'Complete CSS property values'
      });

      // Fix incomplete properties by adding default values
      fixedContent = fixedContent.replace(
        /(--[\w-]+:\s*)(\d+)\s*$/gm,
        '$1$2 0% 92.2%;'
      );
      needsFix = true;
    }

    if (needsFix) {
      fixes.push({
        path: globalsCss.path,
        content: fixedContent
      });
    }
  }

  return { issues, fixes, setupCommand, startCommand };
}

/**
 * Creates a message describing the auto-fixes applied
 */
export function createAutoFixMessage(result: AutoFixResult): Message | null {
  if (result.issues.length === 0) {
    return null;
  }

  const issuesList = result.issues
    .map((issue) => `- **${issue.file}**: ${issue.issue}\n  → ${issue.fix}`)
    .join('\n');

  const fixActions = result.fixes
    .map(
      (fix) => `<boltAction type="file" filePath="${fix.path}">
${fix.content}
</boltAction>`
    )
    .join('\n\n');

  return {
    role: 'assistant',
    content: `I've detected and automatically fixed ${result.issues.length} compatibility issue(s):

${issuesList}

<boltArtifact id="auto-fixes" title="Auto-Applied Fixes">
${fixActions}
</boltArtifact>`,
    id: generateId(),
    createdAt: new Date(),
  };
}
