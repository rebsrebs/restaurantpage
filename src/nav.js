function nav() {
  const nav = document.createElement('div');
  nav.classList.add('nav');

  const navList = document.createElement('ul');
  navList.classList.add('nav__list');

  const aboutnav = document.createElement('li');
  aboutnav.classList.add('nav__item');
  aboutnav.textContent = 'about';

  const menunav = document.createElement('li');
  menunav.classList.add('nav__item');
  menunav.textContent = 'menu';

  const contactnav = document.createElement('li');
  contactnav.classList.add('nav__item');
  contactnav.textContent = 'contact';

  navList.appendChild(aboutnav);
  navList.appendChild(menunav);
  navList.appendChild(contactnav);
  nav.appendChild(navList);

  return nav;
}

export { nav };