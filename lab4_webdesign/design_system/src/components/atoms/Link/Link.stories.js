import { createLink } from './Link.js';
import './Link.css';

export default {
  title: 'Atoms/Link',
  argTypes: {
    text: { control: 'text' },
    href: { control: 'text' },
  },
};

export const NavigationLink = {
  args: { text: 'Главная', href: '/index.html' },
  render: (args) => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:inline-flex;padding:20px;background:var(--color-semantic-dark-background);';
    wrapper.append(createLink(args.text, args.href));
    return wrapper;
  },
};
