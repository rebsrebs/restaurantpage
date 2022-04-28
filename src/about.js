import Icon from './icon.png';

function about() {
  const aboutbox = document.createElement('div');
  aboutbox.classList.add('sectionbox');

  const paragraph = document.createElement('p');

  // Fill out componenet here.
  paragraph.innerHTML = ('The Pickle is a casual lunch spot, ideal for enjoying food, conversation, and work.');
  paragraph.classList.add('about');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.classList.add('imageblock');

  aboutbox.appendChild(paragraph);
  aboutbox.appendChild(myIcon);

  return aboutbox;
}

export { about };