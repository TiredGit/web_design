import { createImage } from './Image.js';
import './Image.css';

export default {
  title: 'Atoms/Image',
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
  },
};

export const HeroImage = {
  args: { src: '/img/main%20hero.webp', alt: 'Интерьер барбершопа MAFIOZI' },
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'padding:16px;background:var(--color-semantic-dark-background);';
    wrapper.append(createImage(args.src, args.alt));
    return wrapper;
  },
};
