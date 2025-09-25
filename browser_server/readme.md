The project uses Python environment

# Install

```bash
cd /path/to/browserUse
```
You can use uv, pip, or others to install

## UV Install:

Recommend using uv to manage Python environment

Create virtual environment

```
uv venv 
```

Activate virtual environment

+ Linux/macOS：

```
source .venv/bin/activate
```

+ Windows

```
.venv\Scripts\activate
```

Install requirements

+ pyproject.toml：

```
uv pip install .
```

+ requirements.txt：

```
uv pip install -r requirements.txt
```

## Pip install:

Activate virtual environment

```
pip install -r requirements.txt
```

## Browser plugins install:

```bash
# Before this step, you need to activate virtual environment
patchright install chromium --with-deps --no-shell
```

# Launch

```bash
cd /path/to/browser_server
```

```bash
# Activate virtual environment
```

```bash
python src/server.py
```

# Tips:

The model must support tool calling and function calling. Vision mode only supports gpt-4o