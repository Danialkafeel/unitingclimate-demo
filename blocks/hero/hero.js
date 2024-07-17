
export default function decorate(block) {
  const img = block.querySelector('picture img');
  img.style.width = '100%';

  const h4Recap = block.querySelector('#recap');
  h4Recap.style.textAlign = 'center';
  h4Recap.style.fontSize = '24px';
  h4Recap.style.marginBottom = '10px';
  
  const h4Uniting = block.querySelector('#uniting-climate-conference');
  h4Uniting.style.textAlign = 'center';
  h4Uniting.style.fontSize = '20px';
  h4Uniting.style.color = '#00a99d';
  h4Uniting.style.margin = '0';

  const h4Faith = block.querySelector('#faith-in-a-better-future');
  h4Faith.style.textAlign = 'center';
  h4Faith.style.fontSize = '20px';
  h4Faith.style.color = '#00a99d';
  h4Faith.style.marginTop = '5px';

  const paragraphs = block.querySelectorAll('p');
  paragraphs.forEach((p, index) => {
    if (index === 0) {
      p.style.textAlign = 'center';
      p.style.fontSize = '16px';
      p.style.margin = '10px 0';
    } else if (index === 1) {
      p.style.textAlign = 'center';
      p.style.fontSize = '16px';
      p.style.margin = '10px 0';
    }
  });

  const link = block.querySelector('p a');
  link.style.display = 'inline-block';
  link.style.padding = '10px 20px';
  link.style.backgroundColor = '#00a99d';
  link.style.color = '#fff';
  link.style.borderRadius = '5px';
  link.style.textDecoration = 'none';
  link.style.fontWeight = 'bold';
  link.style.marginTop = '20px';
}
