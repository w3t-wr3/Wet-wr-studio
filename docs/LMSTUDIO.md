# LM Studio Setup Guide

Wetware Studio works great with LM Studio for local AI inference. This guide will help you set up LM Studio with the recommended model.

## Why LM Studio?

- ✅ **100% Local** - No API keys needed, runs entirely on your machine
- ✅ **Privacy** - Your code never leaves your computer
- ✅ **No Cost** - No API usage fees
- ✅ **Powerful** - Run models like Qwen3 Coder 30B locally

## Recommended Models (Choose Based on Your RAM)

**Important:** Choose a model that fits your system's RAM to avoid "failed to allocate buffer for kv cache" errors.

### For 4-8GB RAM Systems:
- **Qwen2.5-Coder-1.5B-Instruct** (Q4_K_M) - ~1.5GB
- **Qwen2.5-Coder-3B-Instruct** (Q4_K_M) - ~3GB
- **DeepSeek-Coder-1.3B-Instruct** (Q4_K_M) - ~1.3GB

### For 8-16GB RAM Systems (Most Common):
- **Qwen2.5-Coder-7B-Instruct** (Q4_K_M) - ~4.4GB ⭐ **RECOMMENDED**
- **DeepSeek-Coder-6.7B-Instruct** (Q4_K_M) - ~4GB

### For 16-32GB RAM Systems:
- **Qwen2.5-Coder-14B-Instruct** (Q4_K_M) - ~8.5GB
- **DeepSeek-Coder-V2-16B-Instruct** (Q4_K_M) - ~9.5GB

### For 32GB+ RAM Systems:
- **Qwen3 Coder 30B** (Q4_K_M) - ~19GB
- **Codestral-22B-v0.1** (Q4_K_M) - ~13GB

**Not sure which to choose?** Start with **Qwen2.5-Coder-7B-Instruct (Q4_K_M)** - it works well on most systems.

## Installation Steps

### 1. Download LM Studio

Download and install LM Studio from [lmstudio.ai](https://lmstudio.ai/)

### 2. Search for Your Model

1. **Open LM Studio**
2. **Click the Search icon** (magnifying glass) in the left sidebar
3. **Type the model name** from the list above (e.g., `Qwen2.5-Coder-7B-Instruct`)

![LM Studio Model Search](lmstudio-search.png)

### 3. Download the Model

1. **Click** on the model from the search results
2. **Select the Q4_K_M quantization** specifically:
   - Look for files ending in `Q4_K_M.gguf`
   - **Q4_K_M** is the recommended quantization (best balance of quality vs size)
   - Avoid Q8, Q6, Q5 if you have limited RAM
3. **Click Download**
4. Wait for download to complete (size varies by model - 1.5GB to 20GB)

### 4. Load the Model

1. **Go to** "LM Runtime" tab in the left sidebar
2. **Click** "Select a model to load"
3. **Choose** your downloaded model from the list
4. **Click** "Load Model"
5. Wait for the model to load into memory (10-30 seconds)

**If you see "Failed to allocate buffer for kv cache":**
- Your model is too large for your RAM
- Go back to step 2 and download a smaller model
- Or reduce context length in model settings (try 2048 or 4096)

### 5. Start the Local Server

1. LM Studio automatically starts a local API server at `http://127.0.0.1:1234`
2. The server is **OpenAI-compatible**, so Wetware Studio can use it directly

### 6. Configure Wetware Studio

1. **Open** your `.env.local` file in Wetware Studio
2. **Add** the following:

```bash
# LM Studio Configuration
LMSTUDIO_API_BASE_URL=http://127.0.0.1:1234
```

3. **Save** the file
4. **Restart** Wetware Studio (`pnpm dev`)

### 7. Select the Model in Wetware Studio

1. **Open** Wetware Studio in your browser
2. **Click** the model selector dropdown
3. **Select** "LMStudio" as the provider
4. **Choose** `qwen/qwen3-coder-30b` from the model list

## Troubleshooting

### "Failed to allocate buffer for kv cache"
**This is the most common error!**

**Cause:** Model + context window is too large for your RAM.

**Solutions (try in order):**
1. **Download a smaller model** - See recommended models section above
2. **Reduce context length:**
   - Go to model settings (gear icon)
   - Change "Context Length" to 2048 or 4096
   - Click "Reload Model"
3. **Use Q4_K_M quantization** instead of Q8/Q6
4. **Close other applications** to free RAM
5. **Restart your computer** to clear memory

### Model Not Loading (Other Reasons)
- **Check available RAM**: Open Task Manager (Windows) or Activity Monitor (Mac)
- **Model file corrupt**: Try re-downloading
- **LM Studio outdated**: Update to latest version

### Connection Failed
- **Verify LM Studio is running**: Check the "LM Runtime" tab shows the model as loaded
- **Check port**: Make sure nothing else is using port 1234
- **Restart LM Studio**: Sometimes a restart helps

### Slow Performance
- **Enable Metal/CUDA**: Check LM Studio settings for GPU acceleration
- **Reduce context length**: Lower the context window in LM Studio settings
- **Close other apps**: Free up RAM and GPU resources

## Alternative Models

If Qwen3 Coder 30B doesn't work for you, try these alternatives:

- **DeepSeek Coder 33B** - Great for code generation
- **CodeLlama 34B** - Meta's coding model
- **Qwen2.5 Coder 7B** - Smaller, faster option for lower-end hardware

## Benefits of Local AI

- **No Rate Limits** - Generate as much code as you want
- **Offline Support** - Works without internet connection
- **Data Privacy** - Your code stays on your machine
- **Cost Savings** - No API usage fees

## Performance Tips

1. **Use GPU Acceleration**: Enable Metal (Mac) or CUDA (Nvidia) in LM Studio
2. **Allocate Enough RAM**: Close other applications to free memory
3. **Adjust Context Length**: Balance between capability and performance
4. **Monitor Resource Usage**: Keep an eye on CPU/GPU/RAM in Activity Monitor

## Questions?

If you encounter issues, check:
- [LM Studio Discord](https://discord.gg/lmstudio)
- [Wetware Studio Issues](https://github.com/MyrmtolioDebroudon/wetware-studio/issues)
