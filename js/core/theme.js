export function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    // Set initial icon based on current theme
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const iconSpan = themeToggleBtn.querySelector('.theme-icon');
    if (iconSpan) {
      iconSpan.textContent = currentTheme === 'dark' ? '🌙' : '☀️';
    }

    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      if (iconSpan) {
        iconSpan.textContent = newTheme === 'dark' ? '🌙' : '☀️';
      }
    });
  }
}
