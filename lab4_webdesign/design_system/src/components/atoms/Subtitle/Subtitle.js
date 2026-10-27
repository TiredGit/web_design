export function createSubtitle(text = 'Лучшая стрижка в центре города') {
  const heading = document.createElement('h1');
  heading.className = 'maf-subtitle';
  heading.textContent = text;
  return heading;
}
