if (!document.getElementById('dark-theme-style')) {
    const style = document.createElement('style');
    style.id = 'dark-theme-style';
    style.textContent = `
        html, body {
            background-color: #121212 !important;
            color: #ffffff !important;
        }
        a {
            color: #bb86fc !important;
        }
    `;
    document.head.appendChild(style);
} else {
    document.getElementById('dark-theme-style').remove();
}