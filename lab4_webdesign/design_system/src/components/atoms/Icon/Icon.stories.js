import { createIcon } from './Icon.js';
import './Icon.css';

export default {
  title: 'Atoms/Icon',
  argTypes: {
    src: { control: 'text', description: 'Путь к изображению логотипа' },
    alt: { control: 'text', description: 'Альтернативный текст' },
  },
};

export const LogoIcon = {
  args: {
    src: '/img/hairstyle1.webp',
    alt: 'Логотип MAFIOZI',
  },
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:inline-flex;align-items:center;padding:16px;background:var(--color-semantic-dark-surface);';
    wrapper.append(createIcon(args.src, args.alt));
    return wrapper;
  },
};
