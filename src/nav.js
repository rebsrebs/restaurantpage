function nav() {
  const nav = document.createElement('div');
  nav.classList.add('nav');
  nav.id = 'nav';

  const navList = document.createElement('ul');
  navList.classList.add('nav__list');
  navList.id = 'navlist';

  const aboutnav = document.createElement('li');
  aboutnav.classList.add('nav__item');
  aboutnav.innerHTML = 'about';
  aboutnav.id = 'aboutnav';

  const menunav = document.createElement('li');
  menunav.classList.add('nav__item');
  menunav.textContent = 'menu';
  menunav.id = 'menunav';

  const contactnav = document.createElement('li');
  contactnav.classList.add('nav__item');
  contactnav.textContent = 'contact';
  contactnav.id = 'contactnav';

  navList.appendChild(aboutnav);
  navList.appendChild(menunav);
  navList.appendChild(contactnav);
  nav.appendChild(navList);

  return nav;
}

export { nav };