const buttonVariants = ['primary', 'secondary', 'outline', 'ghost'];
const buttonStates = ['default', 'hover', 'focus', 'active', 'disabled'];
const buttonSizes = ['small', 'medium', 'large'];

/**
 * Creates the MAFIOZI booking CTA.
 * Backwards compatible with createButton(text, href); options are optional.
 */
export function createButton(
  text = 'Записаться',
  href = '/contacts.html#booking',
  options = {}
) {
  const {
    variant = 'primary',
    state = 'default',
    size = 'large',
    fullWidth = false,
  } = options;

  const safeVariant = buttonVariants.includes(variant) ? variant : 'primary';
  const safeState = buttonStates.includes(state) ? state : 'default';
  const safeSize = buttonSizes.includes(size) ? size : 'large';

  const link = document.createElement('a');
  link.className = [
    'maf-button',
    `maf-button--${safeVariant}`,
    `maf-button--size-${safeSize}`,
    safeState !== 'default' ? `maf-button--state-${safeState}` : '',
    fullWidth ? 'maf-button--full-width' : '',
  ].filter(Boolean).join(' ');
  link.href = href;

  if (safeState === 'disabled' || safeState === 'loading') {
    link.setAttribute('aria-disabled', 'true');
    link.tabIndex = -1;
    link.addEventListener('click', (event) => event.preventDefault());
  }

  if (safeState === 'loading') {
    link.setAttribute('aria-busy', 'true');

    const spinner = document.createElement('span');
    spinner.className = 'maf-button__spinner';
    spinner.setAttribute('aria-hidden', 'true');

    const label = document.createElement('span');
    label.className = 'maf-button__label';
    label.textContent = text;

    link.append(spinner, label);
  } else {
    link.textContent = text;
  }

  return link;
}
