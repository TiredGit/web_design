export function createLink(text = 'Главная', href = '/index.html') {
  const link = document.createElement('a');
  link.href = href;
  link.textContent = text;
  link.className = 'maf-link';
  return link;
}
