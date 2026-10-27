import { createBookingIntro } from './BookingIntro.js';
import './BookingIntro.css';
import '../../atoms/Button/Button.css';
import '../../atoms/Subtitle/Subtitle.css';

export default {
  title: 'Molecules/BookingIntro',
  argTypes: {
    buttonText: { control: 'text' },
    buttonHref: { control: 'text' },
    subtitleText: { control: 'text' },
  },
};

export const BookingCallToAction = {
  args: {
    buttonText: 'Записаться',
    buttonHref: '/contacts.html#booking',
    subtitleText: 'Лучшая стрижка в центре города',
  },
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;justify-content:center;padding:40px;background:var(--color-semantic-dark-background);';
    wrapper.append(createBookingIntro(args));
    return wrapper;
  },
};
