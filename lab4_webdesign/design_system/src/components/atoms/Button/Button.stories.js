import { createButton } from './Button.js';
import './Button.css';

const defaultArgs = {
  text: 'Записаться',
  href: '/contacts.html#booking',
  variant: 'primary',
  state: 'default',
  size: 'large',
  fullWidth: false,
};

const renderButton = (args) => {
  const wrapper = document.createElement('div');
  wrapper.style.cssText = `
    box-sizing: border-box;
    display: flex;
    align-items: center;
    min-height: 150px;
    padding: var(--space-2xl);
    background: var(--color-semantic-dark-background);
  `;

  wrapper.append(createButton(args.text, args.href, {
    variant: args.variant,
    state: args.state,
    size: args.size,
    fullWidth: args.fullWidth,
  }));

  return wrapper;
};

export default {
  title: 'Atoms/Button',
  args: defaultArgs,
  argTypes: {
    text: {
      name: 'Текст кнопки',
      control: 'text',
    },
    href: {
      name: 'Ссылка',
      control: 'text',
    },
    variant: {
      name: 'Вариант',
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'Визуальный вариант кнопки',
    },
    state: {
      name: 'Состояние',
      control: 'select',
      options: ['default', 'hover', 'focus', 'active', 'disabled'],
      description: 'Состояние для проверки внешнего вида в Storybook',
    },
    size: {
      name: 'Размер',
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    fullWidth: {
      name: 'На всю ширину',
      control: 'boolean',
    },
  },
};

export const Primary = { render: renderButton };

export const Secondary = {
  args: { variant: 'secondary' },
  render: renderButton,
};

export const Outline = {
  args: { variant: 'outline' },
  render: renderButton,
};

export const Ghost = {
  args: { variant: 'ghost' },
  render: renderButton,
};

export const HoverState = {
  name: 'Состояние: подсвечена',
  args: { state: 'hover' },
  render: renderButton,
};

export const FocusState = {
  name: 'Состояние: фокус',
  args: { state: 'focus' },
  render: renderButton,
};

export const ActiveState = {
  name: 'Состояние: нажата',
  args: { state: 'active' },
  render: renderButton,
};

export const DisabledState = {
  name: 'Состояние: недоступна',
  args: { state: 'disabled' },
  render: renderButton,
};
