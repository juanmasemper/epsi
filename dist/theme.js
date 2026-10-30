(() => {
  const root = document.documentElement;
  let theme = 'dark';
  try {
    if (localStorage.getItem('epsi-theme') === 'light') theme = 'light';
  } catch {}

  function applyTheme() {
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === 'light' ? '#f7f2e9' : '#15110e';
    const button = document.getElementById('theme-toggle');
    if (button) {
      const nextTheme = theme === 'light' ? 'oscuro' : 'claro';
      document.getElementById('theme-label').textContent = `Modo ${nextTheme}`;
      button.setAttribute('aria-label', `Activar modo ${nextTheme}`);
    }
  }

  // Restore the saved palette before the stylesheet paints the page.
  applyTheme();
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    document.getElementById('theme-toggle').addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      applyTheme();
      try { localStorage.setItem('epsi-theme', theme); } catch {}
    });
  });
})();
