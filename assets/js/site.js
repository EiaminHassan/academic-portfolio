(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
  }
  const toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const dark = document.documentElement.dataset.theme === 'dark';
      document.documentElement.dataset.theme = dark ? 'light' : 'dark';
      localStorage.theme = dark ? 'light' : 'dark';
    });
  }
})();
