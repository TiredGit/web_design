import { createButton } from '../../atoms/Button/Button.js';
import { createSubtitle } from '../../atoms/Subtitle/Subtitle.js';

export function createBookingIntro({
  buttonText = 'Записаться',
  buttonHref = '/contacts.html#booking',
  subtitleText = 'Лучшая стрижка в центре города',
} = {}) {
  const intro = document.createElement('div');
  intro.className = 'maf-booking-intro';

  const button = createButton(buttonText, buttonHref);
  button.classList.add('maf-booking-intro__button');

  const subtitle = createSubtitle(subtitleText);
  subtitle.classList.add('maf-booking-intro__subtitle');

  // Кнопка визуально располагается сверху, подзаголовок — под ней.
  intro.append(button, subtitle);
  return intro;
}
