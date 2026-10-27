export function createIcon(
  src = '/img/hairstyle1.webp',
  alt = 'MAFIOZI'
) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.className = 'maf-icon';
  img.width = 40;
  img.height = 40;
  return img;
}
