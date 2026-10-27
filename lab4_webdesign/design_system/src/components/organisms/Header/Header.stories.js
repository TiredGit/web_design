import { createHeader } from './Header.js';
import './Header.css';
import '../../atoms/Icon/Icon.css';
import '../../atoms/Link/Link.css';
import '../../molecules/Brand/Brand.css';
import '../../molecules/LinkGroup/LinkGroup.css';

export default {
  title: 'Organisms/Header',
  parameters: { layout: 'fullscreen' },
  argTypes: {
    brandName: { control: 'text' },
    logoSrc: { control: 'text' },
    activePage: { control: 'select', options: ['/index.html', '/services.html', '/barbers.html', '/contacts.html'] },
    links: { control: 'object' },
    themeIconSrc: { control: 'text' },
    showBrand: { control: 'boolean' },
    showThemeToggle: { control: 'boolean' },
    showBurger: { control: 'boolean' },
    themeMode: { control: 'select', options: ['dark', 'light'] },
  },
};

export const MainHeader = {
  args: {
    brandName: 'MAFIOZI',
    logoSrc: '/img/hairstyle1.webp',
    activePage: '/index.html',
    links: [
      { text: 'Главная', href: '/index.html' },
      { text: 'Услуги', href: '/services.html' },
      { text: 'Мастера', href: '/barbers.html' },
      { text: 'Контакты', href: '/contacts.html' },
    ],
    themeIconSrc: '/img/theme_light_dark_icon_137104%201.svg',
    showBrand: true,
    showThemeToggle: true,
    showBurger: true,
    themeMode: 'dark',
  },
  render: (args) => {
    document.documentElement.dataset.theme = args.themeMode || 'dark';
    const wrapper = document.createElement('div');
    wrapper.style.minHeight = '180px';
    wrapper.append(createHeader(args));
    return wrapper;
  },
};
