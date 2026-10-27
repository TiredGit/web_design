import './tokens.css';

export default {
  title: 'Foundations/Tokens',
  tags: ['autodocs'],
};

// --- ХЕЛПЕРЫ ДЛЯ UI ---

const Swatch = (name, varName, textColor = 'var(--color-primitive-ink)') => {
  const el = document.createElement('div');
  el.style.cssText = `
    display: flex; flex-direction: column; align-items: center; gap: 8px;
    font-family: var(--font-family-body); font-size: 12px; color: ${textColor};
  `;
  el.innerHTML = `
    <div style="
      width: 80px; height: 80px;
      background: var(${varName});
      border-radius: var(--radius-md);
      border: 1px solid rgba(0,0,0,0.1);
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    "></div>
    <div style="text-align:center; word-break: break-all;">${name}</div>
    <code style="font-size: 10px; opacity: 0.7;">${varName}</code>
  `;
  return el;
};

const SectionTitle = (title) => {
  const h2 = document.createElement('h2');
  h2.textContent = title;
  h2.style.cssText = `
    font-family: var(--font-family-display);
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    margin: 32px 0 16px 0;
    color: var(--color-primitive-ink);
    border-bottom: 2px solid var(--color-primitive-gold);
    padding-bottom: 8px;
  `;
  return h2;
};

// --- ИСТОРИИ (STORIES) ---

export const PrimitiveColors = {
  name: 'Primitive Colors',
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display: flex; gap: 16px; flex-wrap: wrap;';
    
    const primitives = [
      ['Espresso', '--color-primitive-espresso', '#000'],
      ['Brown', '--color-primitive-brown', '#000'],
      ['Gold', '--color-primitive-gold', '#000'],
      ['Gold Light', '--color-primitive-gold-light', '#000'],
      ['Cream', '--color-primitive-cream', '#000'],
      ['Cream Muted', '--color-primitive-cream-muted', '#000'],
      ['Black', '--color-primitive-black', '#000'],
      ['Paper', '--color-primitive-paper', '#000'],
      ['Sand', '--color-primitive-sand', '#000'],
      ['Ink', '--color-primitive-ink', '#000'],
      ['Brown Muted', '--color-primitive-brown-muted', '#000'],
      ['Gold Dark', '--color-primitive-gold-dark', '#000'],
      ['Error Dark', '--color-primitive-error-dark', '#000'],
      ['Error Light', '--color-primitive-error-light', '#000'],
    ];

    primitives.forEach(([name, varName, color]) => wrap.append(Swatch(name, varName, color)));
    return wrap;
  },
};

export const LightThemeColors = {
  name: 'Light Theme (Semantic)',
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display: flex; gap: 16px; flex-wrap: wrap; padding: 24px; background: var(--color-semantic-light-background); border-radius: var(--radius-lg);';
    
    const semantics = [
      ['Background', '--color-semantic-light-background', '#000'],
      ['Surface', '--color-semantic-light-surface', '#000'],
      ['Primary', '--color-semantic-light-primary', '#000'],
      ['Secondary', '--color-semantic-light-secondary', '#000'],
      ['Accent', '--color-semantic-light-accent', '#000'],
      ['Accent Hover', '--color-semantic-light-accent-hover', '#000'],
      ['Text', '--color-semantic-light-text', '#000'],
      ['Text Muted', '--color-semantic-light-text-muted', '#000'],
      ['Link', '--color-semantic-light-link', '#000'],
      ['Error', '--color-semantic-light-error', '#000'],
      ['Border', '--color-semantic-light-border', '#000'],
    ];

    semantics.forEach(([name, varName, color]) => wrap.append(Swatch(name, varName, color)));
    return wrap;
  },
};

export const DarkThemeColors = {
  name: 'Dark Theme (Semantic)',
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display: flex; gap: 16px; flex-wrap: wrap; padding: 24px; background: var(--color-semantic-dark-background); border-radius: var(--radius-lg);';
    
    const semantics = [
      ['Background', '--color-semantic-dark-background', '#fff'],
      ['Surface', '--color-semantic-dark-surface', '#fff'],
      ['Primary', '--color-semantic-dark-primary', '#fff'],
      ['Secondary', '--color-semantic-dark-secondary', '#fff'],
      ['Accent', '--color-semantic-dark-accent', '#fff'],
      ['Accent Hover', '--color-semantic-dark-accent-hover', '#fff'],
      ['Text', '--color-semantic-dark-text', '#fff'],
      ['Text Muted', '--color-semantic-dark-text-muted', '#fff'],
      ['Link', '--color-semantic-dark-link', '#fff'],
      ['Error', '--color-semantic-dark-error', '#fff'],
      ['Border', '--color-semantic-dark-border', '#fff'],
    ];

    semantics.forEach(([name, varName, color]) => wrap.append(Swatch(name, varName, color)));
    return wrap;
  },
};

export const Spacing = {
  name: 'Spacing',
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display: flex; flex-direction: column; gap: 12px;';
    
    const spaces = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'];
    
    spaces.forEach(n => {
      const row = document.createElement('div');
      row.style.cssText = 'display: flex; align-items: center; gap: 16px; font-family: monospace;';
      row.innerHTML = `
        <code style="width: 80px;">--space-${n}</code>
        <div style="
          height: 24px;
          width: var(--space-${n});
          background: var(--color-primitive-gold);
          border-radius: var(--radius-sm);
        "></div>
        <small style="color: var(--color-primitive-brown-muted);">var(--space-${n})</small>
      `;
      wrap.append(row);
    });
    return wrap;
  },
};

export const Typography = {
  name: 'Typography',
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display: flex; flex-direction: column; gap: 24px; font-family: var(--font-family-body);';
    
    // Font Families
    const families = document.createElement('div');
    families.innerHTML = `
      <h3 style="margin:0 0 8px 0; color: var(--color-primitive-brown);">Font Families</h3>
      <p style="font-family: var(--font-family-display); font-size: var(--font-size-lg);">Display: ${getComputedStyle(document.documentElement).getPropertyValue('--font-family-display')}</p>
      <p style="font-family: var(--font-family-body); font-size: var(--font-size-base);">Body: ${getComputedStyle(document.documentElement).getPropertyValue('--font-family-body')}</p>
    `;
    wrap.append(families);

    // Font Sizes
    const sizes = document.createElement('div');
    sizes.innerHTML = `<h3 style="margin:0 0 8px 0; color: var(--color-primitive-brown);">Font Sizes</h3>`;
    ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'].forEach(n => {
      const row = document.createElement('div');
      row.style.cssText = `display: flex; align-items: baseline; gap: 16px; margin-bottom: 8px;`;
      row.innerHTML = `
        <code style="width: 100px; font-size: 12px; color: var(--color-primitive-brown-muted);">--font-size-${n}</code>
        <span style="font-size: var(--font-size-${n});">The quick brown fox jumps over the lazy dog</span>
      `;
      sizes.append(row);
    });
    wrap.append(sizes);

    // Font Weights
    const weights = document.createElement('div');
    weights.innerHTML = `<h3 style="margin:0 0 8px 0; color: var(--color-primitive-brown);">Font Weights</h3>`;
    ['regular', 'semibold', 'bold'].forEach(n => {
      const row = document.createElement('div');
      row.style.cssText = `display: flex; align-items: baseline; gap: 16px; margin-bottom: 8px;`;
      row.innerHTML = `
        <code style="width: 120px; font-size: 12px; color: var(--color-primitive-brown-muted);">--font-weight-${n}</code>
        <span style="font-weight: var(--font-weight-${n}); font-size: var(--font-size-lg);">MAFIOZI Barbershop</span>
      `;
      weights.append(row);
    });
    wrap.append(weights);

    return wrap;
  },
};

export const RadiiAndShadows = {
  name: 'Radii & Shadows',
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display: flex; flex-direction: column; gap: 32px;';

    // Radii
    const radiiSection = document.createElement('div');
    radiiSection.append(SectionTitle('Border Radius'));
    const radiiGrid = document.createElement('div');
    radiiGrid.style.cssText = 'display: flex; gap: 24px; flex-wrap: wrap;';
    
    ['sm', 'md', 'lg', 'pill', 'circle'].forEach(n => {
      const el = document.createElement('div');
      el.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 8px;';
      el.innerHTML = `
        <div style="
          width: 80px; height: 80px;
          background: var(--color-primitive-gold);
          border-radius: var(--radius-${n});
          border: 1px solid var(--color-primitive-brown);
        "></div>
        <code style="font-size: 12px;">--radius-${n}</code>
      `;
      radiiGrid.append(el);
    });
    radiiSection.append(radiiGrid);
    wrap.append(radiiSection);

    // Shadows
    const shadowsSection = document.createElement('div');
    shadowsSection.append(SectionTitle('Shadows'));
    const shadowsGrid = document.createElement('div');
    shadowsGrid.style.cssText = 'display: flex; gap: 24px; flex-wrap: wrap;';

    const shadows = [
      ['Hover Dark', '--shadow-hover-dark', 'var(--color-primitive-paper)'],
      ['Hover Light', '--shadow-hover-light', 'var(--color-primitive-paper)'],
      ['Focus', '--shadow-focus', 'var(--color-primitive-gold)'],
    ];

    shadows.forEach(([name, varName, bg]) => {
      const el = document.createElement('div');
      el.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 8px;';
      el.innerHTML = `
        <div style="
          width: 100px; height: 60px;
          background: ${bg};
          border-radius: var(--radius-md);
          box-shadow: var(${varName});
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: bold;
        ">Shadow</div>
        <code style="font-size: 12px;">${varName}</code>
      `;
      shadowsGrid.append(el);
    });
    shadowsSection.append(shadowsGrid);
    wrap.append(shadowsSection);

    return wrap;
  },
};