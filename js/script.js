document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const themeToggleBtn = document.getElementById('theme-toggle');
    const dirToggleBtn = document.getElementById('dir-toggle');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    // Theme Management
    const initTheme = () => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    };

    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    };

    const updateThemeIcon = (theme) => {
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = theme === 'dark' 
                ? '<svg xmlns="http://www.webkit.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>'
                : '<svg xmlns="http://www.webkit.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
        }
    };

    // Direction (RTL/LTR) Management
    const initDir = () => {
        const savedDir = localStorage.getItem('dir') || 'ltr';
        document.documentElement.setAttribute('dir', savedDir);
        updateDirIcon(savedDir);
    };

    const toggleDir = () => {
        const currentDir = document.documentElement.getAttribute('dir');
        const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
        document.documentElement.setAttribute('dir', newDir);
        localStorage.setItem('dir', newDir);
        updateDirIcon(newDir);
    };

    const updateDirIcon = (dir) => {
        if (dirToggleBtn) {
            dirToggleBtn.innerHTML = dir === 'rtl' 
                ? '<span style="font-weight:bold;font-size:0.9rem;">LTR</span>'
                : '<span style="font-weight:bold;font-size:0.9rem;">RTL</span>';
        }
    };

    // Event Listeners
    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    if (dirToggleBtn) dirToggleBtn.addEventListener('click', toggleDir);
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Initialize
    initTheme();
    initDir();

    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
