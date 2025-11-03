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
             B O L T . D I Y
  Prompt, run, edit & deploy web apps
★═══════════════════════════════════════★
`);
console.log('📍 Version:', `v${commitJson.version}`);
console.log('📍 Commit:', commitJson.hash);
console.log('  Please wait until the URL appears here');
console.log('★═══════════════════════════════════════★');
