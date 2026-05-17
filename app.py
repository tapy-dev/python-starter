import os
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev_key_antigravity_19283')

@app.route('/')
def index():
    """Renders the main entry point (blank canvas page)."""
    return render_template('index.html')

# Add your custom AI-generated routes below!
# e.g., @app.route('/calculate', methods=['POST'])

if __name__ == '__main__':
    # Local `python app.py` — Fly Sprites preview uses `bun run dev` → Flask on port 3000 (see package.json).
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', '3000')), debug=True)
