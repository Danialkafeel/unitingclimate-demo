
export default function decorate(block) {
  const cards = block.querySelectorAll('.cards > div');
  cards.forEach((card) => {
    card.style.border = 'none';
    card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    card.style.padding = '16px';
    card.style.marginBottom = '16px';
    card.style.backgroundColor = 'var(--background-color)';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';

    const heading = card.querySelector('h4');
    heading.style.marginBottom = '8px';
    heading.style.fontWeight = 'bold';

    const paragraphs = card.querySelectorAll('p');
    paragraphs.forEach((paragraph) => {
      paragraph.style.marginBottom = '8px';
    });

    const link = card.querySelector('a');
    link.classList.add('button');
    if (link.href.includes('facebook')) {
      link.style.backgroundColor = '#1877f2';
    } else if (link.href.includes('instagram')) {
      link.style.backgroundColor = '#e1306c';
    } else if (link.href.includes('eepurl')) {
      link.style.backgroundColor = '#00a99d';
    }
  });

  block.style.display = 'grid';
  block.style.gridTemplateColumns = '1fr';
  block.style.gap = '16px';

  const mediaQuery = window.matchMedia('(min-width: 900px)');
  function handleTabletChange(e) {
    if (e.matches) {
      block.style.gridTemplateColumns = 'repeat(3, 1fr)';
    } else {
      block.style.gridTemplateColumns = '1fr';
    }
  }

  mediaQuery.addListener(handleTabletChange);
  handleTabletChange(mediaQuery);
}
