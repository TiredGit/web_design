import { createIcon } from '../../atoms/Icon/Icon.js';

export function createBrand({
  brandName = 'MAFIOZI',
  href = '/index.html',
  logoSrc = '/img/hairstyle1.webp',
  logoAlt = 'Логотип MAFIOZI',
} = {}) {
  const brand = document.createElement('a');
  brand.className = 'maf-brand';
  brand.href = href;
  brand.setAttribute('aria-label', `${brandName} — на главную`);

  const icon = createIcon(logoSrc, logoAlt);
  icon.className = 'maf-brand__icon';

  const name = document.createElement('span');
  name.className = 'maf-brand__name';
  name.textContent = brandName;

  brand.append(icon, name);
  return brand;
}
