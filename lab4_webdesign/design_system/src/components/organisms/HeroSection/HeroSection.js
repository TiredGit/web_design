import { createImage } from '../../atoms/Image/Image.js';
import { createBookingIntro } from '../../molecules/BookingIntro/BookingIntro.js';

export function createHeroSection({
  imageSrc = '/img/main%20hero.webp',
  imageAlt = 'Интерьер барбершопа MAFIOZI',
  title = 'Лучшая стрижка в центре города',
  buttonText = 'Записаться',
  buttonHref = '/contacts.html#booking',
  showImage = true,
} = {}) {
  const section = document.createElement('section');
  section.className = 'maf-hero';
  section.setAttribute('aria-label', 'Главный экран MAFIOZI');

  if (showImage) {
    const image = createImage(imageSrc, imageAlt);
    image.className = 'maf-hero__image';
    image.fetchPriority = 'high';
    section.append(image);
  }

  const content = document.createElement('div');
  content.className = 'maf-hero__content';
  content.append(createBookingIntro({
    buttonText,
    buttonHref,
    subtitleText: title,
  }));
  section.append(content);

  return section;
}
