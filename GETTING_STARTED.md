# Getting Started with Wetware Studio

A complete beginner's guide to installing and using Wetware Studio for the first time.

## Table of Contents

1. [What is Wetware Studio?](#what-is-wetware-studio)
2. [What You'll Need](#what-youll-need)
3. [Installation Guide](#installation-guide)
4. [Choosing Your AI Provider](#choosing-your-ai-provider)
5. [First Time Setup](#first-time-setup)
6. [Using Wetware Studio](#using-wetware-studio)
7. [Troubleshooting](#troubleshooting)
8. [FAQ](#faq)

---

## What is Wetware Studio?

Wetware Studio is a web-based development environment that lets you:
- **Import any web project** (React, Next.js, Vue, etc.) and get instant previews
- **Chat with AI** to build and modify code
- **See live previews** of your website as you build it
- **Automatically fix** 20+ common compatibility issues

Think of it as a combination of VS Code (code editor) + ChatGPT (AI assistant) + Browser Preview, all running locally on your computer.

**Key Features:**
- 🔧 Automatically fixes imported projects so they work
- 🤖 Chat with AI to write and modify code
- 👁️ Live preview updates as you type
- 🏠 Runs 100% on your computer (with local AI) or with cloud AI

---

## What You'll Need

### Required Software

1. **A Computer** running:
   - macOS (10.15 or newer)
   - Windows (10 or newer)
   - Linux (Ubuntu 18.04+ or equivalent)

2. **Node.js** (JavaScript runtime)
   - Version 18 or newer
   - [Download from nodejs.org](https://nodejs.org/)

3. **Git** (version control)
   - [Download from git-scm.com](https://git-scm.com/)

4. **A Web Browser**
   - Chrome, Firefox, Safari, or Edge (latest version)

5. **A Terminal/Command Line**
   - Mac: Use "Terminal" app (in Applications/Utilities)
   - Windows: Use "PowerShell" or "Command Prompt"
   - Linux: Use your default terminal

### Recommended (but not required)

- **8GB+ RAM** - More memory = better performance
- **10GB free disk space** - For Node.js dependencies
- **Good internet connection** - For downloading dependencies (first time only)

---

## Installation Guide

### Step 1: Install Node.js

**What is Node.js?**
Node.js lets you run JavaScript on your computer (not just in browsers). Wetware Studio needs it to work.

**How to install:**

1. Go to [nodejs.org](https://nodejs.org/)
2. Download the **LTS** version (Long Term Support - most stable)
3. Run the installer
4. Accept all default options
5. Click "Install"

**Verify it worked:**

Open your terminal and type:
```bash
node --version
```

You should see something like `v20.11.0` or `v18.19.0`. Any version 18+ works.

Also check npm (Node Package Manager):
```bash
npm --version
```

You should see a version number like `10.2.4`.

### Step 2: Install Git

**What is Git?**
Git helps you download and manage code. We need it to get Wetware Studio from GitHub.

**How to install:**

**On Mac:**
```bash
# Open Terminal and type:
git --version
```

If Git isn't installed, macOS will prompt you to install it automatically. Click "Install".

**On Windows:**
1. Go to [git-scm.com/download/win](https://git-scm.com/download/win)
2. Download the installer
3. Run it and accept all defaults
4. Click "Install"

**On Linux:**
```bash
# Ubuntu/Debian:
sudo apt-get update
sudo apt-get install git

# Fedora:
sudo dnf install git
```

**Verify it worked:**
```bash
git --version
```

You should see something like `git version 2.39.0`.

### Step 3: Install pnpm

**What is pnpm?**
pnpm is a fast package manager (like npm, but better). Wetware Studio uses it to manage dependencies.

**How to install:**

Open your terminal and run:
```bash
npm install -g pnpm
```

Wait 10-30 seconds for it to finish.

**Verify it worked:**
```bash
pnpm --version
```

You should see a version number like `8.15.0`.

**If you see "command not found":**

Try closing and reopening your terminal, then check again. If it still doesn't work:

**On Mac/Linux:**
```bash
# Add pnpm to your PATH
export PATH="$HOME/.local/share/pnpm:$PATH"
```

**On Windows PowerShell:**
Close and reopen PowerShell as Administrator, then:
```powershell
npm install -g pnpm
```

### Step 4: Download Wetware Studio

Now we'll download Wetware Studio from GitHub.

**Open your terminal** and navigate to where you want to install it:

```bash
# Go to your home directory
cd ~

# Or pick a specific folder:
cd ~/Documents
# or
cd ~/Desktop
```

**Clone the repository:**
```bash
git clone https://github.com/MyrmtolioDebroudon/wetware-studio.git
```

This creates a folder called `wetware-studio` with all the code.

**Enter the folder:**
```bash
cd wetware-studio
```

**What you'll see:**
```
Cloning into 'wetware-studio'...
remote: Enumerating objects: 1234, done.
remote: Counting objects: 100% (1234/1234), done.
remote: Compressing objects: 100% (567/567), done.
Receiving objects: 100% (1234/1234), 4.52 MiB | 3.21 MiB/s, done.
Resolving deltas: 100% (890/890), done.
```

### Step 5: Install Dependencies

**What are dependencies?**
Dependencies are code libraries that Wetware Studio needs to run (React, Vite, etc.). There are hundreds of them.

**Install them:**
```bash
pnpm install
```

**This will take 2-5 minutes.** You'll see:
```
Packages: +2847
Progress: resolved 2847, reused 2847, downloaded 0, added 2847, done
```

**Why does it take so long?**
It's downloading ~3000 packages (libraries) from the internet. This only happens once!

**What if it fails?**
- Check your internet connection
- Try again: `pnpm install`
- If you see permission errors on Mac/Linux, try: `sudo pnpm install`

---

## Choosing Your AI Provider

Wetware Studio needs AI to help you write code. You have two options:

### Option A: Local AI (Free, Private, No Internet Needed)

**Pros:**
- ✅ 100% free forever
- ✅ Private - your code never leaves your computer
- ✅ Works offline
- ✅ No API keys needed

**Cons:**
- ❌ Requires 8GB+ RAM
- ❌ Slower responses on older computers
- ❌ Need to download large model files (5-30GB)

**Best for:** Privacy-conscious users, developers, people who want zero costs

**Recommended Local AI Options:**

#### 1. AnythingLLM (Easiest, Most Flexible)

**What is it?**
AnythingLLM is a desktop app that manages AI models for you. It can run models locally or connect to cloud services.

**Installation:**
1. Go to [useanything.com](https://useanything.com/)
2. Click "Download Desktop App"
3. Choose your operating system (Mac/Windows/Linux)
4. Install and run the app
5. Follow the setup wizard

**Recommended setup:**
- Choose "Ollama" as your backend (it's free and runs locally)
- Download a coding model like:
  - **Qwen2.5 Coder 7B** (7GB, fast, good for most tasks)
  - **DeepSeek Coder V2 16B** (16GB, more powerful)
  - **Codestral 22B** (22GB, best quality, needs more RAM)

**Full setup guide:** See [docs/ANYTHINGLLM.md](docs/ANYTHINGLLM.md)

#### 2. LM Studio (Great for Beginners)

**What is it?**
LM Studio is a user-friendly app for running AI models on your computer.

**Installation:**
1. Go to [lmstudio.ai](https://lmstudio.ai/)
2. Click "Download LM Studio"
3. Install the app
4. Open LM Studio
5. Click the search icon (magnifying glass)
6. Search for "Qwen2.5 Coder 7B"
7. Download it (takes 10-30 minutes)
8. Click "Start Server" (keep it running)

**Full setup guide:** See [docs/LMSTUDIO.md](docs/LMSTUDIO.md)

### Option B: Cloud AI (Easy, Fast, Costs Money)

**Pros:**
- ✅ Super fast responses
- ✅ Most powerful models
- ✅ Works on any computer (even low-end)
- ✅ No large downloads

**Cons:**
- ❌ Costs money (pay-per-use)
- ❌ Requires internet
- ❌ Your code is sent to the cloud

**Best for:** Users who want the best quality, don't mind paying, need fastest responses

**Popular Options:**

#### 1. OpenAI (ChatGPT)
- **Models:** GPT-4, GPT-4 Turbo, GPT-3.5
- **Cost:** ~$0.01-0.03 per 1000 tokens (~750 words)
- **Sign up:** [platform.openai.com](https://platform.openai.com/)
- **Free trial:** $5 credit for new users

#### 2. Anthropic (Claude)
- **Models:** Claude 3.5 Sonnet, Claude 3 Opus
- **Cost:** ~$0.015-0.075 per 1000 tokens
- **Sign up:** [console.anthropic.com](https://console.anthropic.com/)
- **Free trial:** Limited free credits

#### 3. Google (Gemini)
- **Models:** Gemini Pro, Gemini Ultra
- **Cost:** Free tier available, then pay-per-use
- **Sign up:** [ai.google.dev](https://ai.google.dev/)

---

## First Time Setup

### Configure Your AI Provider

Now we need to tell Wetware Studio which AI provider to use.

#### For Local AI (AnythingLLM or LM Studio):

**Step 1:** Create environment file

In your terminal (make sure you're in the `wetware-studio` folder):

```bash
# Copy the example file
cp .env.example .env.local
```

**Step 2:** Edit the file

**On Mac:**
```bash
open .env.local
```

**On Windows:**
```bash
notepad .env.local
```

**On Linux:**
```bash
nano .env.local
# or
gedit .env.local
```

**Step 3:** Add your local AI URL

Find these lines and uncomment (remove the `#`):

**For AnythingLLM:**
```bash
ANYTHINGLLM_API_BASE_URL=http://localhost:3001
```

**For LM Studio:**
```bash
LMSTUDIO_API_BASE_URL=http://localhost:1234
```

**Step 4:** Save and close the file

- Mac/Linux: Press Ctrl+O, Enter, then Ctrl+X (if using nano)
- Windows: Click File > Save, then close Notepad
- Any editor: Just save (Cmd+S or Ctrl+S) and close

#### For Cloud AI (OpenAI, Anthropic, etc.):

**Step 1:** Get your API key

1. Sign up at your chosen provider's website
2. Go to API settings or API keys section
3. Click "Create new API key"
4. Copy the key (it looks like `sk-...` or `sk-ant-...`)
5. **Save it somewhere safe** - you won't see it again!

**Step 2:** Create .env.local file

In your terminal:

```bash
# For OpenAI:
echo "OPENAI_API_KEY=sk-your-key-here" > .env.local

# For Anthropic:
echo "ANTHROPIC_API_KEY=sk-ant-your-key-here" > .env.local

# For Google:
echo "GOOGLE_GENERATIVE_AI_API_KEY=your-key-here" > .env.local
```

**Replace `your-key-here` with your actual API key!**

#### Multiple Providers?

You can add multiple providers to `.env.local`:

```bash
# Use both local and cloud AI
ANYTHINGLLM_API_BASE_URL=http://localhost:3001
OPENAI_API_KEY=sk-your-key-here
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

Wetware Studio will let you switch between them in the UI.

---

## Using Wetware Studio

### Start Wetware Studio

**Step 1:** Make sure you're in the right folder

```bash
cd ~/wetware-studio
# or wherever you installed it
```

**Step 2:** Start the development server

```bash
pnpm dev
```

**Step 3:** Wait for it to start (10-30 seconds)

You'll see:
```
VITE v5.4.21  ready in 2847 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

**Step 4:** Open your browser

Go to: **http://localhost:5173**

🎉 **You should see Wetware Studio!**

### Your First Project

#### Option 1: Import an Existing Project

**Step 1:** Click the "Import Folder" button (top right)

**Step 2:** Select a project folder on your computer
- Any React, Next.js, Vue, or web project
- Must have a `package.json` file

**Step 3:** Watch the magic happen!

Wetware Studio will:
1. ✅ Scan your project for issues
2. ✅ Automatically fix compatibility problems
3. ✅ Install dependencies
4. ✅ Start the dev server
5. ✅ Show live preview

This takes 1-3 minutes depending on project size.

#### Option 2: Start from Scratch

**Step 1:** Type in the chat:
```
Create a simple counter app with React
```

**Step 2:** Wait for AI to generate the code (10-30 seconds)

**Step 3:** See the live preview update automatically

**Step 4:** Make changes:
```
Add a reset button
Make the counter increment by 5 instead of 1
Change the color to blue
```

### Using the Interface

**Main Areas:**

```
┌─────────────────────────────────────────────────────┐
│  [Wetware Studio Logo]  [Import] [Settings]        │  ← Header
├─────────────────┬───────────────────────────────────┤
│                 │                                   │
│                 │                                   │
│  File Tree      │       Code Editor                 │  ← Workbench
│  (Left)         │       (Middle)                    │
│                 │                                   │
│                 │───────────────────────────────────│
│                 │       Preview                     │
│                 │       (Shows your website)        │
├─────────────────┴───────────────────────────────────┤
│  Chat with AI                                       │  ← Chat
│  "Add a button to submit the form"                  │
└─────────────────────────────────────────────────────┘
```

**File Tree (Left):**
- Shows all files in your project
- Click to open and edit
- Right-click for options

**Code Editor (Middle-Top):**
- Edit code directly
- Syntax highlighting
- Auto-completion

**Preview (Middle-Bottom):**
- Live preview of your website
- Updates automatically as you type
- Click "Open in New Tab" to open in full browser

**Chat (Bottom):**
- Talk to AI to modify code
- Ask questions about your project
- Request new features

### Chat Commands

**Ask AI to build features:**
```
Create a login form with email and password
Add a dark mode toggle
Make the homepage responsive
Create a navbar with logo and links
```

**Ask AI to fix issues:**
```
The button isn't centered, please fix
There's an error in the console, help me debug
The form isn't submitting, what's wrong?
```

**Ask AI to explain code:**
```
What does this function do?
Explain how React hooks work
Why am I getting this error?
```

**Ask AI to modify styling:**
```
Change the background to dark gray
Make the text larger
Add hover effects to buttons
Center the content vertically
```

### Keyboard Shortcuts

- **Cmd/Ctrl + S:** Save current file
- **Cmd/Ctrl + P:** Quick file search
- **Cmd/Ctrl + F:** Find in file
- **Cmd/Ctrl + /:** Toggle comment
- **Cmd/Ctrl + Enter:** Send chat message
- **Esc:** Close chat

### Settings

Click the settings icon (top right) to configure:

**AI Provider:**
- Switch between local and cloud AI
- Choose specific models
- Adjust temperature (creativity)

**Editor:**
- Theme (light/dark)
- Font size
- Tab size
- Auto-save

**Preview:**
- Port number
- Auto-refresh
- Open in new window

---

## Troubleshooting

### Installation Issues

#### "command not found: pnpm"

**Solution:**
```bash
npm install -g pnpm
```

If that doesn't work, close and reopen your terminal, then try again.

#### "permission denied" errors on Mac/Linux

**Solution:**
```bash
sudo pnpm install
```

Enter your password when prompted.

#### Windows: "cannot be loaded because running scripts is disabled"

**Solution:**

Open PowerShell as Administrator:
```powershell
Set-ExecutionPolicy RemoteSigned
```

Type "Y" and press Enter.

#### Git clone fails with "Authentication failed"

**Solution:**

Make sure the URL is correct:
```bash
git clone https://github.com/MyrmtolioDebroudon/wetware-studio.git
```

Not:
```bash
git clone git@github.com:MyrmtolioDebroudon/wetware-studio.git
```

### Runtime Issues

#### "Port 5173 is already in use"

**Solution:**

Kill the process using that port:

**Mac/Linux:**
```bash
lsof -ti:5173 | xargs kill
```

**Windows:**
```bash
netstat -ano | findstr :5173
taskkill /PID <number> /F
```

Or just use a different port:
```bash
pnpm dev -- --port 3000
```

#### Preview shows "Cannot connect to WebContainer"

**Solution:**

1. Make sure your browser is up to date
2. Try a different browser (Chrome works best)
3. Check browser console for errors (F12)
4. Restart Wetware Studio

#### AI isn't responding

**For Local AI:**

1. Make sure AnythingLLM or LM Studio is running
2. Check the server is on the right port:
   - AnythingLLM: http://localhost:3001
   - LM Studio: http://localhost:1234
3. Verify `.env.local` has the correct URL
4. Restart Wetware Studio

**For Cloud AI:**

1. Check your API key is correct in `.env.local`
2. Verify you have credits/billing enabled
3. Check your internet connection
4. Try a different model

#### "Module not found" errors

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
pnpm install
```

#### Preview is blank or shows errors

**Solution:**

1. Check browser console (F12) for errors
2. Make sure the project has a valid entry point
3. Try reimporting the project
4. Check if dependencies installed correctly

### Local AI Issues

#### AnythingLLM: "Connection refused"

**Solution:**

1. Make sure AnythingLLM app is running
2. Check Settings > Developer > API Enabled
3. Verify port is 3001 (default)
4. Try restarting AnythingLLM

#### LM Studio: "No models available"

**Solution:**

1. Download a model in LM Studio first
2. Click "Load Model" in LM Studio
3. Click "Start Server" tab
4. Make sure server is running on port 1234

#### Model responses are slow

**Solutions:**

1. **Use a smaller model:**
   - 7B models are fast
   - 13B models are medium
   - 30B+ models need powerful hardware

2. **Close other apps** to free up RAM

3. **Adjust context window:**
   - Smaller context = faster responses
   - Reduce in model settings

4. **Check CPU/GPU usage:**
   - 100% usage = too much load
   - Try a smaller model

---

## FAQ

### General Questions

**Q: Is Wetware Studio free?**
A: Yes! Wetware Studio itself is 100% free and open source. AI costs depend on your choice:
- Local AI (AnythingLLM/LM Studio): Free forever
- Cloud AI: Pay-per-use (typically $0.01-0.10 per request)

**Q: Can I use this offline?**
A: Yes, if you use local AI (AnythingLLM or LM Studio). You need internet only for:
- Initial installation (downloading dependencies)
- Cloud AI providers

**Q: Is my code private?**
A:
- With local AI: Yes, everything stays on your computer
- With cloud AI: Your prompts/code are sent to the AI provider

**Q: Can I use my own OpenAI/Anthropic key?**
A: Yes! Just add it to `.env.local`:
```bash
OPENAI_API_KEY=sk-your-key
```

**Q: How do I update Wetware Studio?**
A:
```bash
cd ~/wetware-studio
git pull
pnpm install
```

### Technical Questions

**Q: What projects can I import?**
A: Any web project with:
- React, Next.js, Vue, Svelte, Angular
- Vanilla HTML/CSS/JS
- TypeScript or JavaScript
- Must have `package.json` file

**Q: What gets auto-fixed?**
A: Wetware Studio automatically fixes:
- Next.js 16 → 15.1.0 (Turbopack compatibility)
- Tailwind CSS v3/v4 configuration
- PostCSS setup
- Peer dependency conflicts
- CSS syntax errors
- WebGL/Three.js permissions
- And 15+ more issues!

**Q: Can I deploy my project?**
A: Yes! Export your project and deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any hosting service

**Q: Does it work on Windows?**
A: Yes! Tested on Windows 10 and 11.

**Q: Does it work on M1/M2 Mac?**
A: Yes! Works great on Apple Silicon.

**Q: What's the minimum RAM needed?**
A:
- Wetware Studio only: 4GB
- With local AI: 8GB+ (16GB recommended)
- Cloud AI only: 4GB is fine

**Q: Can I use this for commercial projects?**
A: Yes! Wetware Studio is MIT licensed (free for commercial use).

### Comparison Questions

**Q: How is this different from bolt.diy?**
A: Wetware Studio is built on bolt.diy but adds:
- Universal project auto-fixing (20+ fixes)
- AnythingLLM integration
- Better Next.js support
- Enhanced WebGL/Three.js support
- Improved local AI support

**Q: How is this different from v0.dev?**
A:
- v0.dev: Cloud-only, closed-source, Vercel-hosted
- Wetware Studio: Runs locally, open-source, use any AI

**Q: How is this different from Cursor?**
A:
- Cursor: Desktop code editor with AI
- Wetware Studio: Web-based with live preview + auto-fixes

**Q: How is this different from GitHub Copilot?**
A:
- Copilot: Code completion only
- Wetware Studio: Full development environment + chat + preview

---

## Need More Help?

### Documentation

- **AnythingLLM Setup:** [docs/ANYTHINGLLM.md](docs/ANYTHINGLLM.md)
- **LM Studio Setup:** [docs/LMSTUDIO.md](docs/LMSTUDIO.md)
- **AI Prompt Preset:** [PROMPT_PRESET.md](PROMPT_PRESET.md)
- **Main README:** [README.md](README.md)

### Community

- **GitHub Issues:** [github.com/MyrmtolioDebroudon/wetware-studio/issues](https://github.com/MyrmtolioDebroudon/wetware-studio/issues)
- **Discussions:** [github.com/MyrmtolioDebroudon/wetware-studio/discussions](https://github.com/MyrmtolioDebroudon/wetware-studio/discussions)

### Video Tutorials

Coming soon! Check the GitHub repo for updates.

---

## Quick Reference Card

**Installation:**
```bash
# 1. Install Node.js from nodejs.org
# 2. Install Git from git-scm.com
# 3. Install pnpm:
npm install -g pnpm

# 4. Clone Wetware Studio:
git clone https://github.com/MyrmtolioDebroudon/wetware-studio.git
cd wetware-studio

# 5. Install dependencies:
pnpm install

# 6. Configure AI (.env.local):
cp .env.example .env.local
# Edit .env.local with your AI settings

# 7. Start:
pnpm dev

# 8. Open browser:
# http://localhost:5173
```

**Local AI:**
```bash
# AnythingLLM:
ANYTHINGLLM_API_BASE_URL=http://localhost:3001

# LM Studio:
LMSTUDIO_API_BASE_URL=http://localhost:1234
```

**Cloud AI:**
```bash
# OpenAI:
OPENAI_API_KEY=sk-...

# Anthropic:
ANTHROPIC_API_KEY=sk-ant-...

# Google:
GOOGLE_GENERATIVE_AI_API_KEY=...
```

**Common Commands:**
```bash
pnpm dev          # Start Wetware Studio
pnpm build        # Build for production
pnpm preview      # Preview production build
git pull          # Update Wetware Studio
pnpm install      # Update dependencies
```

---

**Happy Building! 🚀**

If you found this guide helpful, please star the repo on GitHub!
