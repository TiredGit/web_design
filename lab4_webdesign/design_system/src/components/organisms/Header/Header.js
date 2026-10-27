import { createBrand } from '../../molecules/Brand/Brand.js';
import { createLinkGroup, createThemeToggle } from '../../molecules/LinkGroup/LinkGroup.js';

const DEFAULT_LINKS = [
  { text: 'Главная', href: '/index.html' },
  { text: 'Услуги', href: '/services.html' },
  { text: 'Мастера', href: '/barbers.html' },
  { text: 'Контакты', href: '/contacts.html' },
];

function createMenuIcon(kind) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');
  svg.setAttribute('stroke-linecap', 'round');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', kind === 'close' ? 'M5 5l14 14M19 5L5 19' : 'M3 6h18M3 12h18M3 18h18');
  svg.append(path);
  return svg;
}

export function createHeader({
  brandName = 'MAFIOZI',
  logoSrc = '/img/hairstyle1.webp',
  activePage = '/index.html',
  links = DEFAULT_LINKS,
  themeIconSrc = '/img/theme_light_dark_icon_137104%201.svg',
  showBrand = true,
  showThemeToggle = true,
  showBurger = true,
} = {}) {
  const header = document.createElement('header');
  header.className = 'maf-header';

  const inner = document.createElement('div');
  inner.className = 'maf-header__inner';

  if (showBrand) {
    inner.append(createBrand({ brandName, logoSrc, href: '/index.html' }));
  }

  const navGroup = createLinkGroup({ links, activePage, showThemeToggle: false });
  navGroup.classList.add('maf-header__nav-group');
  const nav = navGroup.querySelector('.maf-link-group__nav');
  nav.id = 'maf-site-nav';

  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'maf-header__close';
  closeButton.setAttribute('aria-label', 'Закрыть меню');
  closeButton.append(createMenuIcon('close'));
  nav.prepend(closeButton);

  const actions = document.createElement('div');
  actions.className = 'maf-header__actions';
  if (showThemeToggle) actions.append(createThemeToggle({ themeIconSrc }));

  if (showBurger) {
    const burger = document.createElement('button');
    burger.type = 'button';
    burger.className = 'maf-header__burger';
    burger.setAttribute('aria-label', 'Открыть меню');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-controls', 'maf-site-nav');
    burger.append(createMenuIcon('menu'));

    burger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(isOpen));
      burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
    });
    closeButton.addEventListener('click', () => {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Открыть меню');
    });
    actions.append(burger);
  } else {
    closeButton.hidden = true;
  }

  inner.append(navGroup, actions);
  header.append(inner);
  return header;
}
