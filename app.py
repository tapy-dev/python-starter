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
    # Binds to port 5000 for standard sandbox serving
    app.run(host='0.0.0.0', port=5000, debug=True)
