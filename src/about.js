import Icon from './icon.png';

function about() {
  const aboutbox = document.createElement('div');
  aboutbox.classList.add('sectionbox');
  aboutbox.id = 'aboutbox';

  const paragraph1 = document.createElement('p');
  const paragraph2 = document.createElement('p');

  // Fill out componenet here.
  paragraph1.textContent = ('The Pickle is a casual breakfast and lunch cafe, ideal for enjoying food, conversation, and work. The space is divided into three areas, one that accomodates larger groups, another for four diners and less, and then small cafe tables with outlets.');
  paragraph1.classList.add('aboutp');
  paragraph2.textContent = ('All of our fruits and vegetables are sourced from local farmers. We compost our scraps. The Pickle is a vegan establishment. We do not use any ingredients from animals.');
  paragraph2.classList.add('aboutp');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.classList.add('imageblock');

  aboutbox.appendChild(paragraph1);
  aboutbox.appendChild(myIcon);
  aboutbox.appendChild(paragraph2);
 

  return aboutbox;
}

export { about };