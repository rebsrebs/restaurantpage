import './style.css';
import { pageLoad } from './pageload.js'
import { about } from './about.js';
import { menu } from './menu.js';
import { contact } from './contact.js';
import { footer } from './footer.js';

pageLoad();









const nav = document.getElementById('nav');
const navList = document.getElementById('navlist');
const aboutnav = document.getElementById('aboutnav');
const aboutbox = document.getElementById('aboutbox');
const menunav = document.getElementById('menunav');
const menubox = document.getElementById('menubox');
const contactnav = document.getElementById('contactnav');
const contactbox = document.getElementById('contactbox');
const footerbox = document.getElementById('footerbox');
const content = document.getElementById('content');

aboutnav.addEventListener('click',function(){
  const menubox = document.getElementById('menubox');
  // remove whatever is there
  if (content.querySelector('#menubox') !== null) {
    menubox.remove(); };

  if (content.querySelector('#contactbox') !== null) {
      contactbox.remove(); };

  if (content.querySelector('#footerbox') !== null) {
        footerbox.remove(); };
  // then add about
  content.appendChild(about());  
});

menunav.addEventListener('click',function(){
  // remove whatever is there
  footerbox.remove();
  aboutbox.remove();
  // contactbox.remove();
  // then add menu
  content.appendChild(menu());
  content.appendChild(footer());
});

contactnav.addEventListener('click',function(){
  // remove whatever is there
  aboutbox.remove();
  // then add contact
  content.appendChild(contact());
});

// while (content.firstChild) {
  //   content.removeChild(content.firstChild);
  // }


  // content.removeChild(aboutbox);


  // nav.onclick = function(tab) {
  //   let tab.id = event.target.id;

 navList.addEventListener("click", function(event) {
   let target = event.target;
   if (target.className === 'nav__item') {
     let tab = target.id;
   }
    
 } 


const switchTab = function(tab){
  

  const aboutnav = document.getElementById('aboutnav');
  const aboutbox = document.getElementById('aboutbox');
  const menunav = document.getElementById('menunav');
  const menubox = document.getElementById('menubox');
  const contactnav = document.getElementById('contactnav');
  const contactbox = document.getElementById('contactbox');
  const footerbox = document.getElementById('footerbox');
  const content = document.getElementById('content');

  // if nav is clicked

  footerbox.remove();

  var tabArray = [aboutnav, menunav, contactnav];
  const index = tabArray.indexOf(tab);
  if (index > -1) {
    tabArray.splice(index, 1);
  }

  for (var i = 0; i < tabArray.length; i++) { 
    tabArray(i).remove(); 

  content.appendChild(`${tab}box`());
  content.appendChild(footer());
  } 
  }


