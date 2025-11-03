# Wetware Studio

> A bolt.diy wrapper that auto-fixes imported web projects for instant in-browser previews

Built on [bolt.diy](https://github.com/stackblitz-labs/bolt.diy) by Cole Medin and contributors.

## What It Does

Wetware Studio automatically handles **any project import** with full compatibility and working preview display. No more manual configuration fixes.

### Universal Project Compatibility

Import any Next.js, React, or modern web project and get instant working previews with:

- ✅ **Next.js 16 → 15.1.0 auto-downgrade** (Turbopack → Webpack for WebContainer compatibility)
- ✅ **Tailwind CSS v3/v4 detection** (preserves v4, fixes v3 misconfigurations)
- ✅ **PostCSS auto-configuration** (adjusts based on Tailwind version)
- ✅ **CSS syntax fixes** (incomplete properties, missing braces)
- ✅ **React dependency resolution** (peer dependency conflicts)
- ✅ **WebGL/WebGPU/Three.js support** (enhanced iframe permissions)
- ✅ **Package.json consolidation** (prevents duplicate fixes)
- ✅ **20+ automatic compatibility fixes**

### Quick Start

```bash
# Clone and install
git clone https://github.com/yourusername/wetware-studio.git
cd wetware-studio
pnpm install

# Configure environment
cp .env.example .env.local
# Add your AI provider API keys to .env.local

# Start development server
pnpm dev
```

### Usage

1. **Import any project folder** via the UI
2. Auto-fixes are applied automatically
3. Run `npm install --legacy-peer-deps` (suggested automatically)
4. Run `npm run dev` (suggested automatically)
5. **Preview works instantly** ✨

### Key Enhancements

**Auto-Fixer System** (`app/utils/projectAutoFixer.ts`)
- Detects and fixes 20+ common compatibility issues
- Smart Next.js version management
- Tailwind v3/v4 detection and configuration
- CSS syntax validation and repair

**Enhanced Preview Support**
- WebGL/WebGPU/Three.js iframe permissions
- Canvas element inspector improvements
- Comprehensive sandbox permissions

**Intelligent Command Detection**
- Auto-detects project type and dependencies
- Suggests optimal install/run commands
- Handles modern dependency conflicts

## Tech Stack

- **Framework**: [Remix](https://remix.run/)
- **Build**: [Vite](https://vitejs.dev/)
- **Runtime**: [WebContainer API](https://webcontainers.io/)
- **AI SDK**: [Vercel AI SDK](https://sdk.vercel.ai/)
- **Styling**: [UnoCSS](https://unocss.dev/)
- **Base**: [bolt.diy](https://github.com/stackblitz-labs/bolt.diy)

## License

MIT License - see [LICENSE](LICENSE)

Based on bolt.diy - original work Copyright (c) 2024 Cole Medin and Contributors

## Credits

Built on the excellent work of [bolt.diy](https://github.com/stackblitz-labs/bolt.diy) by Cole Medin and the open-source community.

Enhancements focused on universal project compatibility and auto-fixing imported projects.
