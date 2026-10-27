import { createSubtitle } from './Subtitle.js';
import './Subtitle.css';

export default {
  title: 'Atoms/Subtitle',
  argTypes: { text: { control: 'text' } },
};

export const HeroSubtitle = {
  args: { text: 'Лучшая стрижка в центре города' },
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;justify-content:center;padding:40px;background:var(--color-semantic-dark-background);';
    wrapper.append(createSubtitle(args.text));
    return wrapper;
  },
};
