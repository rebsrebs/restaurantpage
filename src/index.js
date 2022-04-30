import './style.css';
import { pageLoad } from './pageload.js'
import { about } from './about.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

pageLoad();

navlist.addEventListener("click", function(event) {
  // which nav item was clicked, menu, about, or contact
  let target = event.target;
  // remove 'nav' from id of item clicked - so menunav would become menu
  let tab = target.id.slice(0, -3);
  console.log(tab);

  const content = document.getElementById('content');
  const footerbox = document.getElementById('footerbox');
  const oldChild = document.querySelector('.sectionbox');
  // content.removeChild(oldChild);

  if (tab === 'about') {
    content.removeChild(oldChild);
    content.insertBefore(about(), footerbox);
  } else if (tab === 'menu') {
    content.removeChild(oldChild);
    content.insertBefore(menu(), footerbox);
  // } else if (tab === 'contact') {
  //   content.insertBefore(contact(), footerbox);
  }
});


