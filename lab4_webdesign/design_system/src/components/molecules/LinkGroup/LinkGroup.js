import { createLink } from '../../atoms/Link/Link.js';

const DEFAULT_LINKS = [
  { text: 'Главная', href: '/index.html' },
  { text: 'Услуги', href: '/services.html' },
  { text: 'Мастера', href: '/barbers.html' },
  { text: 'Контакты', href: '/contacts.html' },
];

export function createThemeToggle({
  themeIconSrc = '/img/theme_light_dark_icon_137104%201.svg',
  label = 'Переключить тему',
} = {}) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'maf-theme-toggle';
  button.setAttribute('aria-label', label);
  button.setAttribute('aria-pressed', document.documentElement.dataset.theme === 'light' ? 'true' : 'false');

  const icon = document.createElement('img');
  icon.src = themeIconSrc;
  icon.alt = '';
  icon.width = 28;
  icon.height = 28;
  icon.className = 'maf-theme-toggle__icon';
  button.append(icon);

  button.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = nextTheme;
    button.setAttribute('aria-pressed', String(nextTheme === 'light'));
  });

  return button;
}

export function createLinkGroup({
  links = DEFAULT_LINKS,
  activePage = '/index.html',
  showThemeToggle = true,
  themeIconSrc = '/img/theme_light_dark_icon_137104%201.svg',
} = {}) {
  const group = document.createElement('div');
  group.className = 'maf-link-group';

  const nav = document.createElement('nav');
  nav.className = 'maf-link-group__nav';
  nav.setAttribute('aria-label', 'Основная навигация');

  links.forEach((item) => {
    const link = createLink(item.text ?? 'Ссылка', item.href ?? '#');
    if (item.href === activePage) {
      link.classList.add('maf-link--active');
      link.setAttribute('aria-current', 'page');
    }
    nav.append(link);
  });

  group.append(nav);
  if (showThemeToggle) {
    const actions = document.createElement('div');
    actions.className = 'maf-link-group__actions';
    actions.append(createThemeToggle({ themeIconSrc }));
    group.append(actions);
  }

  return group;
}
