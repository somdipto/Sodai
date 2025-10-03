# Sodai - Full-stack, Open-source, Agentic AI Framework

<div align="center">

![Sodai Logo](./public/img/sodai_logo.png)

**The first full-stack, open-source, agentic AI framework**  
*Fully local alternative to Manus & Genspark AI*

</div>

## 🚀 Overview

Sodai is the world's first **full-stack, open-source, agentic AI framework** that provides a **fully local alternative** to platforms like Manus & Genspark AI. It features an integrated **Code Interpreter VM sandbox** for safe execution of AI-generated code.

### Key Capabilities

- ✅ **Deep Research & Web Browsing**: Advanced information gathering and analysis
- ✅ **Viable Coding & Data Analysis**: Generate and execute code safely
- ✅ **Local Privacy**: Runs entirely on your hardware with zero cloud dependency
- ✅ **Sandboxed Execution**: Secure Code Interpreter VM for safe code execution
- ✅ **Multiple LLM Support**: Compatible with DeepSeek, Qwen, Llama, Gemma via Ollama

## 🎯 Core Features

<div align="center">

### Multi: Infinite Possibilities
> Universal AI Agent capabilities supporting unlimited task scenarios

- 🔍 **Deep Search & Research Reports**
- 💻 **Code Generation & Data Analysis**  
- 📝 **Content Creation & Document Processing**
- 🧠 **Planning, Action, Reflection & Memory**

### Fast: Rapid Deployment
> One-click deployment for immediate usage with minimal technical requirements

- 🚀 **Simplified installation process**
- ⚡ **Ready-to-use system within minutes**
- 📦 **Multiple deployment options**

### Good: Powerful & Flexible
> Feature-rich framework with extensive capabilities

- 🔐 **Virtual Machine Integration**
- 🛠️ **Code Generation & Execution**  
- 🌐 **Browser Operations & Web Search**
- 🔌 **Multi-tool Integration**

### Economic: 10x Cheaper
> Dramatically reduced operational costs without compromising quality

- 💰 **Task execution costs 1/10 - 1/100 of other agent products**
- 📊 **Based on open source DeepSeekV3 model**
- 💵 **Open source subscription model**

</div>

## 🛠️ How It Works

Sodai operates within a **local Virtual Machine (VM) sandbox** that protects your machine's files and operating system by safely handling all code writing, execution, and editing tasks. 

Additionally, Sodai provides the flexibility to configure enhanced results using APIs from leading cloud models like Claude, GPT, Gemini, and Grok.

### Supported LLMs
- **Local Models**: DeepSeek, Qwen, Llama, Gemma (via Ollama)
- **Cloud Models**: Claude, GPT, Gemini, Grok (via APIs)

## 📋 System Requirements

| OS | Requirements |
|---|---|
| **macOS** | [Docker Desktop](https://docs.docker.com/desktop/setup/install/mac-install/#system-requirements) with "Allow the default Docker socket to be used" enabled |
| **Linux** | [Docker Desktop](https://docs.docker.com/desktop/setup/install/linux/) (Tested with Ubuntu 22.04) |
| **Windows** | [WSL 2](https://learn.microsoft.com/en-us/windows/wsl/install) + [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/#system-requirements) |

> **Recommendation**: System with a modern processor and minimum **4GB RAM** for optimal performance

### Prerequisites

#### macOS
1. Install [Docker Desktop on Mac](https://docs.docker.com/desktop/setup/install/mac-install)
2. Enable `Allow the default Docker socket to be used` in Docker settings

#### Linux
1. Install [Docker Desktop on Linux](https://docs.docker.com/desktop/setup/install/linux/)

#### Windows
1. Install [WSL 2](https://learn.microsoft.com/en-us/windows/wsl/install) 
2. Verify with `wsl --version` (should show `Default Version: 2`)
3. Install [Docker Desktop on Windows](https://docs.docker.com/desktop/setup/install/windows-install)
4. Enable `Use the WSL 2 based engine` and WSL integration

> **Note**: Docker commands must be run inside the WSL terminal on Windows

## 🚀 Quick Start

### Docker Deployment (Recommended)

```bash
# Pull the latest Sodai runtime sandbox
docker pull hexdosodai/sodai-runtime-sandbox:latest

# Run the application
docker run -it --rm --pull=always \
  --name sodai-app \
  --env DOCKER_HOST_ADDR=host.docker.internal \
  --env ACTUAL_HOST_WORKSPACE_PATH=${WORKSPACE_BASE:-$PWD/workspace} \
  --publish 5005:5005 \
  --add-host host.docker.internal:host-gateway \
  --volume /var/run/docker.sock:/var/run/docker.sock \
  --volume ~/.cache:/.cache \
  --volume ${WORKSPACE_BASE:-$PWD/workspace}:/workspace \
  --volume ${WORKSPACE_BASE:-$PWD/data}:/app/data \
  --interactive \
  --tty \
  hexdosodai/sodai:latest make run
```

**Access Sodai**: Open your browser and navigate to [http://localhost:5005](http://localhost:5005)

### Alternative Deployment Options

- **Container**: Available on Docker Hub
- **Client Application**: Electron-based desktop app
- **Online Subscription**: Cloud-hosted version
- **All-in-One**: Complete self-hosted solution

## 🤝 Contributing

We welcome contributions from the community! Here are some ways you can help:

### Ways to Contribute
- 🐛 **Bug Reports**: Submit issues for bugs you encounter
- 💡 **Feature Requests**: Share ideas for new features
- 👨‍💻 **Code Contributions**: Implement new features or fix bugs
- 📝 **Documentation**: Improve READMEs, API docs, and tutorials
- 🌐 **Translations**: Help translate Sodai for international users

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Read our [Contribution Guide](https://github.com/hexdocom/sodai/blob/main/CONTRIBUTING.md) for detailed instructions.

### Contributors
<div align="center">

![Contributors](https://contrib.rocks/image?repo=hexdocom/sodai)

</div>

## 🌐 Community & Support

### Channels
- 💬 **[GitHub Discussions](https://github.com/hexdocom/sodai/discussions)**: Best for sharing feedback and asking questions
- 🐛 **[GitHub Issues](https://github.com/hexdocom/sodai/issues)**: Best for reporting bugs and feature proposals
- 📧 **[Business Inquiries](mailto:service@hexdo.com)**: Commercial licensing and consulting

### Support Options
- 🆓 **Community Support**: Through GitHub Discussions and Issues
- 💼 **Commercial License**: For enterprise use - contact [service@hexdo.com](mailto:service@hexdo.com)
- 📚 **Documentation**: Comprehensive guides at [document.sodai.cc](https://document.sodai.cc/)



## 🔐 Security Disclosure

To protect your privacy, please avoid posting security issues on GitHub. Instead, send security-related questions to [service@hexdo.com](mailto:service@hexdo.com) and we will provide you with a more detailed response.

## 📄 License

This repository is available under the [Sodai Open Source License](https://github.com/hexdocom/sodai/blob/main/LICENSE), which is essentially Apache 2.0 with a few additional restrictions.

<div align="center">

---

Made with ❤️ by the Sodai Community

[![](https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png)](https://github.com/hexdocom/sodai/fork)

</div>
