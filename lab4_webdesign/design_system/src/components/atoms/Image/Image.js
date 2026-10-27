export function createImage(
  src = '/img/main%20hero.webp',
  alt = 'Интерьер барбершопа MAFIOZI'
) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.className = 'maf-image';
  return img;
}
