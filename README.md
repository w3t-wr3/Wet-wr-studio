# Wetware Studio

> A bolt.diy wrapper that auto-fixes imported web projects for instant in-browser previews & enables LM Studio/AnythingLLM Native Support.

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
- ✅ **AnythingLLM integration** (multi-backend local AI with RAG support)
- ✅ **LM Studio integration** (native local model support)
- ✅ **20+ automatic compatibility fixes**

### Quick Start

#### Step 1: Clone the Repository

```bash
git clone https://github.com/myrmtoliodebroudon/wetware-studio.git
cd wetware-studio
```

#### Step 2: Install Dependencies

**Important:** This project uses `pnpm`. If you don't have it installed:

```bash
# Install pnpm globally
npm install -g pnpm

# Then install project dependencies
pnpm install
```

#### Step 3: Configure Environment

**You have two options:**

**Option A: Use Local AI (No API Keys Needed)**

1. First, copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your local AI provider:
   ```bash
   # AnythingLLM (recommended)
   ANYTHINGLLM_API_BASE_URL=http://localhost:3001

   # OR LM Studio
   LMSTUDIO_API_BASE_URL=http://localhost:1234
   ```

3. Make sure your local AI is running (AnythingLLM or LM Studio)

**Option B: Use Cloud Providers (API Keys Required)**

Just add your API key directly to the `.env.local` file:

```bash
# Create .env.local file
echo "OPENAI_API_KEY=sk-your-key-here" > .env.local

# OR for Anthropic
echo "ANTHROPIC_API_KEY=sk-ant-your-key-here" > .env.local

# OR for any other provider - see .env.example for all options
```

> **Note:** For cloud providers, you don't need to copy `.env.example` - just create `.env.local` with your API key!

#### Step 4: Start the Development Server

```bash
pnpm dev
```

Wait for the server to start. You'll see:
```
  ➜  Local:   http://localhost:5173/
```

#### Step 5: Open in Browser

Open **http://localhost:5173** in your browser.

#### Step 6: Start Using Wetware Studio!

1. **Click "Import Folder"** button
2. **Select any project folder** (Next.js, React, etc.)
3. **Watch the magic happen:**
   - Auto-fixes are applied
   - Dependencies install automatically
   - Dev server starts automatically
   - Preview appears instantly! ✨

**That's it!** Your project is now running with all compatibility issues automatically fixed.

#### AI Provider Options

**Option 1: AnythingLLM (Recommended - Most Flexible)**
- 100% local with multi-model support
- Works with Ollama, LM Studio, or cloud providers
- Built-in document RAG and workspace management
- [📖 AnythingLLM Setup Guide](docs/ANYTHINGLLM.md)

**Option 2: LM Studio (Recommended for Privacy & No Cost)**
- 100% local, no API keys needed
- Recommended model: **Qwen3 Coder 30B**
- [📖 LM Studio Setup Guide](docs/LMSTUDIO.md)

**Option 3: Cloud Providers**
- Add API keys to `.env.local` for providers like OpenAI, Anthropic, etc.
- See `.env.example` for all supported providers

### Usage

1. **Import any project folder** via the UI
2. Auto-fixes are applied automatically
3. Dependencies install and dev server starts automatically
4. **Preview works instantly** ✨

### Key Enhancements

**Auto-Fixer System** (`app/utils/projectAutoFixer.ts`)
- Detects and fixes 20+ common compatibility issues
- Smart Next.js version management
- Tailwind v3/v4 detection and configuration
- CSS syntax validation and repair

**Local AI Integration**
- Native support for **AnythingLLM** and **LM Studio**
- Auto-discovers all loaded models from local instances
- Seamless switching between local and cloud AI providers
- Real-time model availability detection
- AnythingLLM: Multi-backend support (Ollama, LM Studio, cloud)
- LM Studio: Direct model loading and inference

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
- **AI Integration**: [Vercel AI SDK](https://sdk.vercel.ai/) (supports 20+ providers including LM Studio)
- **Styling**: [UnoCSS](https://unocss.dev/)
- **Base**: [bolt.diy](https://github.com/stackblitz-labs/bolt.diy)

## License

MIT License - see [LICENSE](LICENSE)

Based on bolt.diy - original work Copyright (c) 2024 Cole Medin and Contributors

## Credits

Built on the excellent work of [bolt.diy](https://github.com/stackblitz-labs/bolt.diy) by Cole Medin and the open-source community.

Enhancements focused on universal project compatibility and auto-fixing imported projects.
