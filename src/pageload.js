
import { header } from './header.js';
import { nav } from './nav.js';
import { about } from './about.js';

const pageLoad = function() {
  const content = document.getElementById('content');
  content.appendChild(header());
  content.appendChild(nav());
  content.appendChild(about());
}

export { pageLoad };