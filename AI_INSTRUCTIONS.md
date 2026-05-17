# 🤖 AI Developer Agent Instructions: Canvas Mode

Welcome! You are operating in a **Blank Canvas Sandbox Environment**. 
Your goal is to build whatever custom application or widget the user asks for (e.g., "Bana bir hesap makinesi yap" / "Make me a calculator").

You do NOT need to write heavy styles or install complicated UI libraries. The project is already pre-configured with a premium, responsive, glassmorphic design system in `static/css/style.css`.

---

## 🚀 How to Build the Requested Feature

### Step 1: Open & Clear the Canvas (`templates/index.html`)
Open `templates/index.html`. You will find a placeholder card. **Delete the placeholder** inside the `{% block content %}` and replace it with the structure of your custom app.

### Step 2: Leverage the Premium CSS Styles (`static/css/style.css`)
To keep the application looking stunning and modern (glowing active states, soft dark HSL shadows, glassmorphism), use these classes for your HTML markup:
*   **Wrapper Cards**: Wrap your widget inside a card panel:
    *   `<div class="card">` (Standard elevated dark-mode card)
    *   `<div class="card card-glass">` (Sleek glassmorphic backdrop-blur panel)
*   **Buttons & Controls**:
    *   `<button class="btn btn-primary">` (Premium gradient glowing action button)
    *   `<button class="btn btn-secondary">` (Neutral surface button)
*   **Inputs & Displays**:
    *   `<input class="form-control">` (Fully-styled text/number field, perfect for input fields or a calculator screen)
*   **Grid Layouts**:
    *   `<div class="grid-4">`: **Crucial for Calculators.** Automatically aligns children in a 4-column layout!
    *   `<div class="grid-2">` or `<div class="grid-3">`: Responsive fluid wrappers.

### Step 3: Write Backend Logic in `app.py` (If Needed)
If the feature requires server-side processing (e.g. calling a weather API, heavy calculations, form storage):
1. Open `app.py`.
2. Append a new route handler (e.g., `@app.route('/calculate', methods=['POST'])`).
3. Return template updates or dynamic JSON results with `jsonify()`.

### Step 4: Write Dynamic Interactions in `static/js/main.js`
If the widget needs direct client-side action (e.g. keyboard event listeners, updating a calculator screen, doing client math):
1. Open `static/js/main.js`.
2. Append your event bindings, selectors, and state logic inside or below the `DOMContentLoaded` callback.

---

## ⚡ Quick Design Examples for Your Reference

### A. Perfect Glassmorphic Calculator Layout Example
```html
<div class="card card-glass" style="max-width: 320px; margin: 40px auto;">
    <!-- Display screen -->
    <div class="form-group">
        <input type="text" id="calc-screen" class="form-control text-center" style="font-size: 1.8rem; font-weight: 700; height: 60px;" readonly value="0">
    </div>
    
    <!-- 4x4 Keypad Grid -->
    <div class="grid-4">
        <button class="btn btn-secondary">C</button>
        <button class="btn btn-secondary">+/-</button>
        <button class="btn btn-secondary">%</button>
        <button class="btn btn-primary">/</button>
        
        <button class="btn btn-secondary">7</button>
        <button class="btn btn-secondary">8</button>
        <button class="btn btn-secondary">9</button>
        <button class="btn btn-primary">*</button>
        
        <button class="btn btn-secondary">4</button>
        <button class="btn btn-secondary">5</button>
        <button class="btn btn-secondary">6</button>
        <button class="btn btn-primary">-</button>
        
        <button class="btn btn-secondary">1</button>
        <button class="btn btn-secondary">2</button>
        <button class="btn btn-secondary">3</button>
        <button class="btn btn-primary">+</button>
    </div>
</div>
```

Analyze the request, start coding, and make the final interface look spectacular! 🎨
