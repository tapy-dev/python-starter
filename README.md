# 🎨 PyNexus - Premium Blank Starter Canvas

A sleek, ultra-minimal, dark-mode first **Python & Flask Blank Starter Boilerplate**. 

It is specifically built as a **clean canvas** for developers and sandbox-based AI site builders. The workspace is barebones, providing only the web server structure, a persistent dark/light theme switch, and an elegant premium CSS utility kit (supporting cards, inputs, glowing buttons, and grid structures like `.grid-4` for calculators).

---

## 🚀 How to Run the Canvas

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Launch Server
```bash
python app.py
```
Uses port **3000** by default (override with `PORT=5000 python app.py` if needed).

Open your browser at:
```text
http://127.0.0.1:3000
```

---

## Tapy / Fly Sprites

Preview expects **`bun run dev`** and port **3000**. This repo includes **`package.json`** with a `dev` script that runs `pip install -r requirements.txt` and **`flask run --debug --host 0.0.0.0 --port 3000`** (`FLASK_APP=app`) so template and Python changes reload without restarting the VM. If you created the project before `--debug` was added, bump `package.json` or reprovision the sandbox. For FastAPI or other stacks, replace `scripts.dev` with your own command that listens on `0.0.0.0:3000` and reloads on file changes.

---

## 🤖 For AI Site Builders in Sandboxes

If you are using an AI developer to generate a feature on this site (e.g. *"Bana bir hesap makinesi yap"*):
- Point the AI to the [AI_INSTRUCTIONS.md](file:///Users/sefa/Documents/GitHub/templates/python/AI_INSTRUCTIONS.md) file.
- The AI will inspect the guide, locate `templates/index.html`, remove the placeholder card, write the HTML/JS, and style it automatically using our ready-made classes.
