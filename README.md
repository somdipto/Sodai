
# Sodai - Full-stack, Open-source, Agentic AI Framework

<div align=center>
  <img src="./public/img/sodai_logo.png" width="400">
</div>

Sodai is the first **full-stack, open-source, agentic AI framework**, offering a **fully local alternative** to platforms like **Manus & Genspark AI**. It features an integrated Code Interpreter VM sandbox for safe execution.


**Sodai​** is the first **​full-stack, open-source, agentic AI framework**, offering a **​fully local alternative​** to platforms like **Manus & Genspark AI. It features an integrated Code Interpreter VM sandbox for safe execution**.​​

**​Sodai empowers deep research, web browsing, viable coding, and data analysis – running entirely on your local hardware.​​** It supports ​**planning, action, reflection, and memory​** functionalities using **​local LLMs**​ (like DeepSeek, Qwen, Llama, Gemma) via **Ollama**, ensuring **​complete privacy and zero cloud dependency.**

For enhanced security, Sodai operates within a ​**local Virtual Machine (VM) sandbox.** This sandbox **​protects your machine's files and operating system​** by safely handling all code writing, execution, and editing tasks.

Additionally, Sodai provides the **​flexibility to configure enhanced results**​ using APIs from leading cloud models like **​Claude, GPT, Gemini, and Grok.**

### function and characteristic
The world's first full-stack open-source AI Agentic framework with comprehensive capabilities
#### Multi: Infinite possibilities
Universal AI Agent capabilities supporting unlimited task scenarios, including:
- Deep search & research reports
- Code generation & data analysis
- Content creation & document processing
Supports experience repository for self-learning and extending enterprise-specific customizations.

**Deployment options:** Open source code, Container, Client application, Online subscription - compatible with cloud/local/all-in-one systems

#### Fast: Rapid Deploy
One-click deployment for immediate usage with minimal technical requirements:
- Simplified installation process for all deployment options
- Quick setup without complex configurations
- Ready-to-use system within minutes

Supporting various deployment environments from personal computers to enterprise servers, with comprehensive documentation for smooth implementation.

#### Good: Powerful & Flexibility
Feature-rich framework with extensive capabilities:
- Virtual machine integration
- Code generation & execution
- Browser operations & web search
- Multi-tool integration

Highly adaptable architecture allows for custom modifications and extensions to fit specific business requirements and integration with existing systems.

#### Economic: Same quality，10x cheaper
Dramatically reduced operational costs:
- Task execution costs 1/10 - 1/100 of other agent products
- Open source subscription model
- Based on open source DeepSeekV3 model

Significant cost savings without compromising on quality or performance, making advanced AI capabilities accessible to organizations of all sizes.

### Using Sodai

* Quickly get Sodai running in your environment with this starter guide. Use our [documentation](https://document.sodai.cc/) for further references and more in-depth instructions.

### System Requirements[​](https://docs.all-hands.dev/modules/usage/installation#system-requirements) <a href="#system-requirements" id="system-requirements"></a>

* MacOS with [Docker Desktop support](https://docs.docker.com/desktop/setup/install/mac-install/#system-requirements)
* Linux
* Windows with [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) and [Docker Desktop support](https://docs.docker.com/desktop/setup/install/windows-install/#system-requirements)

A system with a modern processor and a minimum of **4GB RAM** is recommended to run Sodai.

### Prerequisites <a href="#prerequisites" id="prerequisites"></a>

#### MacOS

**Docker Desktop**

1. [Install Docker Desktop on Mac](https://docs.docker.com/desktop/setup/install/mac-install).
2. Open Docker Desktop, go to `Settings > Advanced` and ensure `Allow the default Docker socket to be used` is enabled.

#### Linux

Tested with Ubuntu 22.04.

**Docker Desktop**

1. [Install Docker Desktop on Linux](https://docs.docker.com/desktop/setup/install/linux/).

#### Windows

**WSL**

1. [Install WSL](https://learn.microsoft.com/en-us/windows/wsl/install).
2. Run `wsl --version` in powershell and confirm `Default Version: 2`.

**Docker Desktop**

1. [Install Docker Desktop on Windows](https://docs.docker.com/desktop/setup/install/windows-install).
2. Open Docker Desktop, go to `Settings` and confirm the following:

* General: `Use the WSL 2 based engine` is enabled.
* Resources > WSL Integration: `Enable integration with my default WSL distro` is enabled.

**note**

The docker command below to start the app must be run inside the WSL terminal.

### Start the App <a href="#start-the-app" id="start-the-app"></a>

The easiest way to run Sodai is in Docker.\n\n```bash\ndocker pull hexdosodai/sodai-runtime-sandbox:latest\n\ndocker run -it --rm --pull=always \\\n  --name sodai-app \\\n  --env DOCKER_HOST_ADDR=host.docker.internal \\\n  --env ACTUAL_HOST_WORKSPACE_PATH=${WORKSPACE_BASE:-$PWD/workspace} \\\n  --publish 5005:5005 \\\n  --add-host host.docker.internal:host-gateway \\\n  --volume /var/run/docker.sock:/var/run/docker.sock \\\n  --volume ~/.cache:/.cache \\\n  --volume ${WORKSPACE_BASE:-$PWD/workspace}:/workspace \\\n  --volume ${WORKSPACE_BASE:-$PWD/data}:/app/data \\\n  --interactive \\\n  --tty \\\n  hexdosodai/sodai:latest make run\n```

### Contributing

For those who'd like to contribute code, see our [Contribution Guide](https://github.com/hexdocom/sodai/blob/main/CONTRIBUTING.md).

#### contributors

<a href="https://github.com/hexdocom/sodai/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hexdocom/sodai" />
</a>

### Community & contact

We welcome your contribution to Sodai to help improve Sodai. Include: submit code, questions, new ideas, or share interesting and useful AI applications you have created based on Sodai.

* [GitHub Discussion](https://github.com/hexdocom/sodai/discussions). Best for: sharing feedback and asking questions.
* [GitHub Issues](https://github.com/hexdocom/sodai/issues).Best for: bugs you encounter using Sodai, and feature proposals. See our [Contribution Guide](https://github.com/hexdocom/sodai/blob/main/CONTRIBUTING.md).
* commercial license（[service@hexdo.com](mailto:service@hexdo.com)）. Business consulting on commercial use licensing Sodai.



### Security disclosure

To protect your privacy, please avoid posting security issues on GitHub. Instead, send your questions to [service@hexdo.com](mailto:service@hexdo.com) and we will provide you with a more detailed answer.

### License

This repository is available under the [Sodai Open Source License](https://github.com/hexdocom/sodai/blob/main/LICENSE), which is essentially Apache 2.0 with a few additional restrictions.
