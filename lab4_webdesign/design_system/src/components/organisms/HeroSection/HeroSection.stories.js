import { createHeroSection } from './HeroSection.js';
import './HeroSection.css';
import '../../atoms/Image/Image.css';
import '../../atoms/Button/Button.css';
import '../../atoms/Subtitle/Subtitle.css';
import '../../molecules/BookingIntro/BookingIntro.css';

export default {
  title: 'Organisms/HeroSection',
  parameters: { layout: 'fullscreen' },
  argTypes: {
    imageSrc: { control: 'text' },
    imageAlt: { control: 'text' },
    title: { control: 'text' },
    buttonText: { control: 'text' },
    buttonHref: { control: 'text' },
    showImage: { control: 'boolean' },
  },
};

export const HomeHero = {
  args: {
    imageSrc: '/img/main%20hero.webp',
    imageAlt: 'Интерьер барбершопа MAFIOZI',
    title: 'Лучшая стрижка в центре города',
    buttonText: 'Записаться',
    buttonHref: '/contacts.html#booking',
    showImage: true,
  },
  render: (args) => createHeroSection(args),
};
