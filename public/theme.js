// Runs before styles and React so a saved theme is applied on the first paint.
(() => {
  const key = 'portfolio-theme';
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const valid = value => ['system', 'light', 'dark'].includes(value) ? value : 'system';
  let preference = 'system';
  try { preference = valid(localStorage.getItem(key)); } catch { /* Storage may be disabled. */ }

  function apply() {
    const resolved = preference === 'system' ? (system.matches ? 'dark' : 'light') : preference;
    document.documentElement.dataset.theme = resolved;
    document.documentElement.dataset.themePreference = preference;
    document.documentElement.style.colorScheme = resolved;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', resolved === 'dark' ? '#191c19' : '#f6f5f0');
    window.dispatchEvent(new Event('portfolio-theme-change'));
  }

  let transition;
  let cleanup;
  function update() {
    const resolved = preference === 'system' ? (system.matches ? 'dark' : 'light') : preference;
    if (resolved === document.documentElement.dataset.theme || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      apply();
      return;
    }
    transition?.skipTransition();
    if (document.startViewTransition) {
      transition = document.startViewTransition(apply);
    } else {
      document.documentElement.classList.add('theme-transition');
      // Establish the previous computed colors before updating the theme.
      void document.documentElement.offsetWidth;
      apply();
      clearTimeout(cleanup);
      cleanup = setTimeout(() => document.documentElement.classList.remove('theme-transition'), 450);
    }
  }
  window.portfolioTheme = {
    set(value) {
      preference = valid(value);
      try { localStorage.setItem(key, preference); } catch { /* Keep the choice for this page. */ }
      update();
    }
  };
  system.addEventListener('change', () => { if (preference === 'system') update(); });
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) {
      preference = valid(event.newValue);
      update();
    }
  });
  apply();
})();
