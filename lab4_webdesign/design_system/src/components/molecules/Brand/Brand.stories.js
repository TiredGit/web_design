import { createBrand } from './Brand.js';
import './Brand.css';
import '../../atoms/Icon/Icon.css';

export default {
  title: 'Molecules/Brand',
  argTypes: {
    brandName: { control: 'text', description: 'Название сайта' },
    href: { control: 'text' },
    logoSrc: { control: 'text' },
    logoAlt: { control: 'text' },
  },
};

export const SiteBrand = {
  args: {
    brandName: 'MAFIOZI',
    href: '/index.html',
    logoSrc: '/img/hairstyle1.webp',
    logoAlt: 'Логотип MAFIOZI',
  },
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;align-items:center;min-height:72px;padding:16px;background:var(--color-semantic-dark-surface);';
    wrapper.append(createBrand(args));
    return wrapper;
  },
};
