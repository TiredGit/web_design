import { createLinkGroup } from './LinkGroup.js';
import './LinkGroup.css';
import '../../atoms/Link/Link.css';

export default {
  title: 'Molecules/LinkGroup',
  argTypes: {
    links: { control: 'object', description: 'Массив объектов { text, href }' },
    activePage: {
      control: 'select',
      options: ['/index.html', '/services.html', '/barbers.html', '/contacts.html'],
    },
    showThemeToggle: { control: 'boolean' },
    themeIconSrc: { control: 'text' },
  },
};

export const MainNavigation = {
  args: {
    links: [
      { text: 'Главная', href: '/index.html' },
      { text: 'Услуги', href: '/services.html' },
      { text: 'Мастера', href: '/barbers.html' },
      { text: 'Контакты', href: '/contacts.html' },
    ],
    activePage: '/index.html',
    showThemeToggle: true,
    themeIconSrc: '/img/theme_light_dark_icon_137104%201.svg',
  },
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;align-items:center;justify-content:center;gap:16px;min-height:72px;padding:16px;background:var(--color-semantic-dark-surface);';
    wrapper.append(createLinkGroup(args));
    return wrapper;
  },
};
