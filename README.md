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

The easiest way to run Sodai is in Docker.\n\n```bash\ndocker pull hexdosodai/sodai-runtime-sandbox:latest\n\ndocker run -it --rm --pull=always \\
  --name sodai-app \\
  --env DOCKER_HOST_ADDR=host.docker.internal \\
  --env ACTUAL_HOST_WORKSPACE_PATH=${WORKSPACE_BASE:-$PWD/workspace} \\
  --publish 5005:5005 \\
  --add-host host.docker.internal:host-gateway \\
  --volume /var/run/docker.sock:/var/run/docker.sock \\
  --volume ~/.cache:/.cache \\
  --volume ${WORKSPACE_BASE:-$PWD/workspace}:/workspace \\
  --volume ${WORKSPACE_BASE:-$PWD/data}:/app/data \\
  --interactive \\
  --tty \\
  hexdosodai/sodai:latest make run
```

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

---

## Architectural Wireframe

This section provides a detailed breakdown of the Sodai agent's architecture, components, and data flow.

### High-Level Overview

Sodai is a hybrid system that can run as a standalone desktop application (via Electron) or as a collection of containerized services. It is composed of a **Vue.js frontend**, a **Node.js/Express backend**, a core **Agentic Engine**, and multiple **Execution Runtimes** for sandboxed tool execution.

### Architecture Diagram

```mermaid
graph TD
    subgraph User Interface
        A[UI: Vue.js SPA / Electron Wrapper]
    end

    subgraph Backend Services (Node.js)
        B[API Server (Express.js)]
        C[Agent Core]
        D[LLM Completion Service]
        E[Data Persistence (Models)]
        F[Action Execution Runtimes]
    end

    subgraph Execution Environments
        G[Local Runtime (Direct Execution)]
        H[Docker Runtime (Sandboxed)]
        I[Browser Control Server (Python)]
    end

    subgraph External Services
        J[Third-Party LLM APIs (Gemini, OpenAI, etc.)]
        K[Database (SQLite, PostgreSQL, etc.)]
    end

    A -- HTTP API Calls --> B
    B -- Invokes Agent --> C
    C -- Uses Tools --> F
    C -- Generates Text --> D
    C -- Accesses Memory --> E
    D -- Fetches Completions --> J
    E -- Reads/Writes --> K
    F -- Executes Code --> G
    F -- Executes Code in Sandbox --> H
    F -- Controls Browser --> I
```

### Component Breakdown

#### 1. Frontend (UI Layer)
- **Location:** `frontend/`
- **Technology:** Vue.js, Vite, Electron (`main.js`, `preload.js`)
- **Description:** The user interacts with Sodai through a web-based Single Page Application (SPA) built with Vue.js. This interface is wrapped in Electron to create a cross-platform desktop application. It communicates with the backend via a REST API. All UI components, views, and client-side logic reside here.

#### 2. Backend (API & Core Logic)
- **Location:** `src/`
- **Technology:** Node.js, Express.js
- **Description:** The central nervous system of the application.
    - `src/app.js`: Initializes the Express server and mounts all middleware and routes.
    - `src/routers/`: Defines all API endpoints (e.g., `/agent`, `/conversation`, `/file`). It acts as the entry point for all requests from the frontend.
    - `src/models/`: Defines the database schemas for all persistent data, such as conversations, messages, users, and settings. It uses an ORM/database client to interact with the database.

#### 3. Agent Core
- **Location:** `src/agent/`
- **Description:** This is the brain of the AI. It implements the agentic loop (Plan, Act, Reflect).
    - `AgenticAgent.js`: The main class orchestrating the agent's behavior.
    - `TaskManager.js`: Manages the queue of tasks for the agent to perform.
    - `planning/`, `reflection/`, `memory/`: These directories contain the logic for the agent to plan its actions, reflect on the results, and maintain short-term and long-term memory.
    - `tools/`: Defines the tools available to the agent (e.g., code execution, file system access, web search).

#### 4. LLM Completion Service
- **Location:** `src/completion/`
- **Description:** This component acts as an abstraction layer for communicating with various Large Language Models (LLMs). It allows Sodai to be model-agnostic.
    - `llm.base.js`: A base class defining the interface for all LLM providers.
    - `llm.gemini.js`, `llm.azure.openai.js`, etc.: Specific implementations for different LLM APIs.
    - `resolveServiceConfig.js`: Logic to select and configure the appropriate LLM based on user settings.

#### 5. Action Execution Runtimes
- **Location:** `src/runtime/`
- **Description:** This is a critical component for security and functionality. When the agent decides to execute a tool (like running a script), it does so within one of these runtimes.
    - `LocalRuntime.js`: Executes code directly on the host machine. It is faster but less secure.
    - `DockerRuntime.js`: Executes code inside a sandboxed Docker container. This is the default for safety, preventing the agent from accessing or modifying the host system.
    - `action_execution_server.js`: A server that listens for execution requests and delegates them to the appropriate runtime.

#### 6. Browser Control Server
- **Location:** `browser_server/`
- **Technology:** Python
- **Description:** A separate microservice dedicated to controlling a web browser for tasks like web scraping, form filling, and automated browsing. The Agent Core can delegate web-based tasks to this server.

#### 7. Containerization & Deployment
- **Location:** `docker-compose.yml`, `containers/`, `.github/workflows/`
- **Description:** Contains Dockerfiles and configuration to build and run the entire Sodai application stack in containers. This ensures consistent deployment and facilitates the sandboxed execution environment. The CI/CD pipeline in `.github/workflows` automates the building and pushing of these container images.

### Data and Control Flow (Example: User asks to "Plot a chart")

1.  **User Input:** The user types "Plot a sine wave chart and save it as chart.png" into the UI.
2.  **API Request:** The Vue.js frontend sends a POST request to the backend's `/api/agent/chat` endpoint.
3.  **Router:** The API server (`src/routers/agent/`) receives the request and invokes the `AgenticAgent`.
4.  **Planning:** The Agent Core, using an LLM via the `LLMCompletionService`, analyzes the prompt and creates a plan:
    - Step 1: Write Python code to generate a sine wave plot using matplotlib.
    - Step 2: Execute the Python code.
    - Step 3: Confirm the file `chart.png` was created.
5.  **Action (Tool Use):** The agent decides to use the `execute_code` tool. It sends the Python code to the `Action Execution Runtimes`.
6.  **Sandboxed Execution:** The `DockerRuntime` spins up a new container, injects the Python code, and executes it. The script generates `chart.png` inside the container's file system. The result (stdout, stderr, exit code) is captured.
7.  **Reflection:** The runtime reports back a successful execution. The agent may use the `list_files` tool to verify that `chart.png` now exists in its workspace.
8.  **Response Generation:** The agent formulates a final response for the user, such as "I have successfully generated the plot and saved it as `chart.png`." It sends this text to the `LLMCompletionService` for polishing if needed.
9.  **API Response:** The backend API server sends the final message back to the UI.
10. **UI Update:** The frontend displays the agent's response to the user.
11. **Persistence:** Throughout this process, the conversation, agent's thoughts, and actions are saved to the database via the `Data Persistence` models.