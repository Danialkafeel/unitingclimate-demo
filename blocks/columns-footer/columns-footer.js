
export default function decorate(block) {
  const container = document.createElement('div');
  container.className = 'columns-footer-container';
  
  const columns = Array.from(block.children);
  columns.forEach(column => {
    const columnContainer = document.createElement('div');
    columnContainer.className = 'column-item';
    const content = column.innerHTML;
    columnContainer.innerHTML = content;
    container.appendChild(columnContainer);
  });

  const linkContainer = document.createElement('div');
  linkContainer.className = 'bottom-links';
  const links = container.querySelectorAll('.column-item:nth-child(3) ul li:nth-child(1), .column-item:nth-child(3) ul li:nth-child(2)');
  links.forEach(link => linkContainer.appendChild(link));

  container.querySelector('.column-item:nth-child(3) ul').appendChild(linkContainer);

  block.innerHTML = '';
  block.appendChild(container);
}
