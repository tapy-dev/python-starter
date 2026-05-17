document.addEventListener('DOMContentLoaded', () => {
    // =============================================================
    // 1. Theme Toggle System
    // =============================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('span') : null;
    
    // Check initial stored theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeIcon) themeIcon.textContent = '☀️';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeIcon) themeIcon.textContent = '🌙';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            let newTheme = 'dark';
            let iconText = '🌙';
            
            if (currentTheme === 'dark') {
                newTheme = 'light';
                iconText = '☀️';
            }
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            if (themeIcon) themeIcon.textContent = iconText;
        });
    }

    // =============================================================
    // Custom AI-Generated Interactions Go Here!
    // =============================================================
    // e.g., Calculator operations or dynamic UI bindings
});
