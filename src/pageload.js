
import { header } from './header.js';
import { nav } from './nav.js';
import { about } from './about.js';
import { footer } from './footer.js';

const pageLoad = function() {
  const content = document.getElementById('content');
  content.appendChild(header());
  content.appendChild(nav());
  content.appendChild(about());
  content.appendChild(footer());
}

export { pageLoad };