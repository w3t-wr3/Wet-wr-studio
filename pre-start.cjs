const { execSync } = require('child_process');

// Get git hash with fallback
const getGitHash = () => {
  try {
    return execSync('git rev-parse --short HEAD').toString().trim();
  } catch {
    return 'no-git-info';
  }
};

let commitJson = {
  hash: JSON.stringify(getGitHash()),
  version: JSON.stringify(process.env.npm_package_version),
};

console.log(`
★═══════════════════════════════════════★
        W E T W A R E   S T U D I O
  Prompt, run, edit & deploy web apps
★═══════════════════════════════════════★
`);
console.log('📍 Version:', `v${commitJson.version}`.replace(/"/g, ''));
console.log('📍 Commit:', commitJson.hash.replace(/"/g, ''));
console.log('  Please wait until the URL appears here');
console.log('★═══════════════════════════════════════★');
console.log('\n🚀 Running Wetware Studio v1.0.1\n');
