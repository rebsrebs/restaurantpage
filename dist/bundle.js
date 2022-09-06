/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "about": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _pickles_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pickles.jpg */ "./src/pickles.jpg");
// import Icon from './icon.png';


function about() {
  const aboutbox = document.createElement('div');
  aboutbox.classList.add('sectionbox');
  aboutbox.id = 'aboutbox';
  const paragraph1 = document.createElement('p');
  const paragraph2 = document.createElement('p'); // Fill out componenet here.

  paragraph1.textContent = 'The Pickle is a casual breakfast and lunch cafe, ideal for enjoying food, conversation, and work. The space is divided into three areas, one that accomodates larger groups, another for four diners and less, and then small cafe tables with outlets.';
  paragraph1.classList.add('aboutp');
  paragraph2.textContent = 'All of our fruits and vegetables are sourced from local farmers. We compost our scraps. The Pickle is a vegan establishment. We do not use any ingredients from animals.';
  paragraph2.classList.add('aboutp'); // Add the image to our existing div.
  // const myIcon = new Image();
  // myIcon.src = Icon;
  // myIcon.classList.add('imageblock');

  const myPickles = new Image();
  myPickles.src = _pickles_jpg__WEBPACK_IMPORTED_MODULE_0__;
  myPickles.classList.add('imageblock');
  aboutbox.appendChild(paragraph1);
  aboutbox.appendChild(myPickles);
  aboutbox.appendChild(paragraph2);
  return aboutbox;
}



/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footer": () => (/* binding */ footer)
/* harmony export */ });
function footer() {
  const footerbox = document.createElement('div');
  footerbox.classList.add('footerbox');
  footerbox.id = 'footerbox';
  const footerhours = document.createElement('div');
  footerhours.classList.add('footerhours');
  footerhours.classList.add('footercolumn');
  const footeraddress = document.createElement('div');
  footeraddress.classList.add('footeraddress');
  footeraddress.classList.add('footercolumn');
  const footercontact = document.createElement('div');
  footercontact.classList.add('footercontact');
  footercontact.classList.add('footercolumn'); // const footergrid = document.createElement('div');
  // footergrid.classList.add('footergrid');

  const footerhourstitle = document.createElement('div');
  footerhourstitle.classList.add('footerhourstitle', 'footertitle');
  footerhourstitle.innerHTML = 'Hours';
  const footerhoursdescription = document.createElement('div');
  footerhoursdescription.classList.add('footerhoursdescription', 'footerdescription');
  footerhoursdescription.innerHTML = 'M-F: 7:30am - 8pm';
  const footeraddresstitle = document.createElement('div');
  footeraddresstitle.classList.add('footeraddresstitle', 'footertitle');
  footeraddresstitle.innerHTML = 'Address';
  const footeraddressdescription1 = document.createElement('div');
  footeraddressdescription1.classList.add('footeraddressdescription', 'footerdescription');
  footeraddressdescription1.innerHTML = '123 Colorado Blvd';
  const footeraddressdescription2 = document.createElement('div');
  footeraddressdescription2.classList.add('footeraddressdescription', 'footerdescription');
  footeraddressdescription2.innerHTML = 'Sierra Madre, CA 11223';
  const footercontacttitle = document.createElement('div');
  footercontacttitle.classList.add('footercontacttitle', 'footertitle');
  footercontacttitle.innerHTML = 'Contact';
  const footercontactdescription = document.createElement('div');
  footercontactdescription.classList.add('footercontactdescription', 'footerdescription');
  footercontactdescription.innerHTML = 'thepickle @ thepickle dot com'; // footergrid.appendChild(footerhourstitle);
  // footergrid.appendChild(footerhoursdescription);
  // footergrid.appendChild(footeraddresstitle);
  // footergrid.appendChild(footeraddressdescription);
  // footergrid.appendChild(footercontacttitle);
  // footergrid.appendChild(footercontactdescription);
  // footerbox.appendChild(footergrid);

  footerhours.appendChild(footerhourstitle);
  footerhours.appendChild(footerhoursdescription);
  footeraddress.appendChild(footeraddresstitle);
  footeraddress.appendChild(footeraddressdescription1);
  footeraddress.appendChild(footeraddressdescription2);
  footercontact.appendChild(footercontacttitle);
  footercontact.appendChild(footercontactdescription);
  footerbox.appendChild(footerhours);
  footerbox.appendChild(footeraddress);
  footerbox.appendChild(footercontact);
  return footerbox;
}



/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
function header() {
  const header = document.createElement('div');
  header.textContent = 'The Pickle';
  header.classList.add('header');
  return header;
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
function menu() {
  const menubox = document.createElement('div');
  menubox.classList.add('sectionbox');
  menubox.id = 'menubox'; // SYMBOLS
  // vegan

  const veganv = document.createElement('p');
  veganv.textContent = 'V ';
  veganv.classList.add('menuitemsymbols'); // gluten free

  const gf = document.createElement('p');
  gf.textContent = 'GF ';
  gf.classList.add('menuitemsymbols'); // LUNCH

  const lunchheading = document.createElement('h2');
  lunchheading.textContent = 'Lunch';
  lunchheading.classList.add('menusection'); // SALADS

  const salads = document.createElement('h3');
  salads.textContent = 'Salads';
  salads.classList.add('menucategory'); // RADISH DIV

  const radishsalad = document.createElement('div');
  radishsalad.classList.add('menuitem'); // RADISH TITLE

  const radishtitle = document.createElement('p');
  radishtitle.textContent = 'Radish Salad';
  radishtitle.classList.add('menuitemname', 'griditem'); // RADISH DESCRIPTION

  const radishdescription = document.createElement('p');
  radishdescription.textContent = 'Black Spanish radish, French radish, watermelon radish, pickled fennel, endive, sweet corn, miso-lime vinaigrette.';
  radishdescription.classList.add('menuitemdescription', 'griditem'); // RADISH PRICE

  const radishprice = document.createElement('p');
  radishprice.textContent = '$9';
  radishprice.classList.add('menuitemprice', 'griditem'); // RADISH SYMBOLS

  const radishmenusymbolsrow = document.createElement('div');
  radishmenusymbolsrow.classList.add('menusymbolsrow');
  radishsalad.appendChild(radishtitle);
  radishsalad.appendChild(radishdescription);
  radishsalad.appendChild(radishprice);
  radishsalad.appendChild(radishmenusymbolsrow);
  radishmenusymbolsrow.appendChild(veganv);
  radishmenusymbolsrow.appendChild(gf); // PURPLE DIV

  const purplesalad = document.createElement('div');
  purplesalad.classList.add('menuitem'); // PURPLE TITLE

  const purpletitle = document.createElement('p');
  purpletitle.innerHTML = 'Purple Salad';
  purpletitle.classList.add('menuitemname', 'griditem'); // PURPLE DESCRIPTION

  const purpledescription = document.createElement('p');
  purpledescription.innerHTML = 'Purple potato, read leaf lettuce, red slaw, miso eggplant, carrot ginger dressing.';
  purpledescription.classList.add('menuitemdescription', 'griditem'); // PURPLE PRICE

  const purpleprice = document.createElement('p');
  purpleprice.innerHTML = '$11';
  purpleprice.classList.add('menuitemprice', 'griditem'); // PURPLE SYMBOLS

  const purplemenusymbolsrow = document.createElement('div');
  purplemenusymbolsrow.classList.add('menusymbolsrow'); // PURPLEDOM

  purplesalad.appendChild(purpletitle);
  purplesalad.appendChild(purpledescription);
  purplesalad.appendChild(purpleprice);
  purplesalad.appendChild(purplemenusymbolsrow);
  let veganv2 = veganv.cloneNode(true);
  let gf2 = gf.cloneNode(true);
  purplemenusymbolsrow.appendChild(veganv2);
  purplemenusymbolsrow.appendChild(gf2); // SANDWICHES

  const sandwiches = document.createElement('h3');
  sandwiches.innerHTML = 'Sandwiches';
  sandwiches.classList.add('menucategory'); // VEG DIV

  const vegsandwich = document.createElement('div');
  vegsandwich.classList.add('menuitem'); // VEG TITLE

  const vegsandwichtitle = document.createElement('p');
  vegsandwichtitle.innerHTML = 'Vegetable Sandwich';
  vegsandwichtitle.classList.add('menuitemname', 'griditem'); // VEG DESCRIPTION

  const vegsandwichdescription = document.createElement('p');
  vegsandwichdescription.innerHTML = 'Almond manouri cheese, figs, arugula, avocado, lemon, sourdough.';
  vegsandwichdescription.classList.add('menuitemdescription', 'griditem'); // VEG PRICE

  const vegsandwichprice = document.createElement('p');
  vegsandwichprice.innerHTML = '$9';
  vegsandwichprice.classList.add('menuitemprice', 'griditem'); // VEG SYMBOLS

  const vegmenusymbolsrow = document.createElement('div');
  vegmenusymbolsrow.classList.add('menusymbolsrow');
  vegsandwich.appendChild(vegsandwichtitle);
  vegsandwich.appendChild(vegsandwichdescription);
  vegsandwich.appendChild(vegsandwichprice);
  vegsandwich.appendChild(vegmenusymbolsrow);
  let veganv3 = veganv.cloneNode(true);
  vegmenusymbolsrow.appendChild(veganv3); // CHIP DIV

  const chipsandwich = document.createElement('div');
  chipsandwich.classList.add('menuitem'); // CHIP TITLE

  const chipsandwichtitle = document.createElement('p');
  chipsandwichtitle.innerHTML = 'Chip Sandwich';
  chipsandwichtitle.classList.add('menuitemname', 'griditem'); // CHIP DESCRIPTION

  const chipsandwichdescription = document.createElement('p');
  chipsandwichdescription.innerHTML = 'Avocado, shiitake bacon, potato chips, pesto, sourdough.';
  chipsandwichdescription.classList.add('menuitemdescription', 'griditem'); // CHIP PRICE

  const chipsandwichprice = document.createElement('p');
  chipsandwichprice.innerHTML = '$10';
  chipsandwichprice.classList.add('menuitemprice', 'griditem'); // CHIP SYMBOLS

  const chipmenusymbolsrow = document.createElement('div');
  chipmenusymbolsrow.classList.add('menusymbolsrow');
  chipsandwich.appendChild(chipsandwichtitle);
  chipsandwich.appendChild(chipsandwichdescription);
  chipsandwich.appendChild(chipsandwichprice);
  chipsandwich.appendChild(chipmenusymbolsrow);
  let veganv4 = veganv.cloneNode(true);
  chipmenusymbolsrow.appendChild(veganv4); // MENU KEY

  const menukey = document.createElement('div');
  menukey.classList.add('menukey');
  const keyrow1 = document.createElement('p');
  keyrow1.classList.add('keyrow');
  keyrow1.innerText = 'V = vegan';
  const keyrow2 = document.createElement('p');
  keyrow2.innerText = 'GF = gluten-free';
  keyrow2.classList.add('keyrow');
  menukey.appendChild(keyrow1);
  menukey.appendChild(keyrow2);
  menubox.appendChild(lunchheading);
  menubox.appendChild(salads);
  menubox.appendChild(radishsalad);
  menubox.appendChild(purplesalad);
  menubox.appendChild(sandwiches);
  menubox.appendChild(vegsandwich);
  menubox.appendChild(chipsandwich);
  menubox.appendChild(menukey);
  return menubox;
}



/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nav": () => (/* binding */ nav)
/* harmony export */ });
function nav() {
  const nav = document.createElement('div');
  nav.classList.add('nav');
  nav.id = 'nav';
  const navList = document.createElement('ul');
  navList.classList.add('nav__list');
  navList.id = 'navlist';
  const aboutnav = document.createElement('li');
  aboutnav.classList.add('nav__item');
  aboutnav.classList.add('selected');
  aboutnav.innerHTML = 'about';
  aboutnav.id = 'aboutnav';
  const menunav = document.createElement('li');
  menunav.classList.add('nav__item');
  menunav.textContent = 'menu';
  menunav.id = 'menunav';
  const contactnav = document.createElement('li');
  contactnav.classList.add('nav__item'); // contactnav.textContent = 'contact';

  contactnav.id = 'contactnav';
  const aTag = document.createElement('a');
  aTag.setAttribute('href', "#footerbox");
  aTag.innerText = "contact";
  contactnav.appendChild(aTag);
  navList.appendChild(aboutnav);
  navList.appendChild(menunav);
  navList.appendChild(contactnav);
  nav.appendChild(navList);
  return nav;
}



/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");





const pageLoad = function () {
  const content = document.getElementById('content');
  content.appendChild((0,_header_js__WEBPACK_IMPORTED_MODULE_0__.header)());
  content.appendChild((0,_nav_js__WEBPACK_IMPORTED_MODULE_1__.nav)());
  content.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_2__.about)());
  content.appendChild((0,_footer_js__WEBPACK_IMPORTED_MODULE_3__.footer)());
};



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/my-font.woff2 */ "./src/fonts/my-font.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/my-font.woff */ "./src/fonts/my-font.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/monoton-v13-latin-regular.woff2 */ "./src/fonts/monoton-v13-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/monoton-v13-latin-regular.woff */ "./src/fonts/monoton-v13-latin-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/montserrat/montserrat-v23-latin-regular.woff2 */ "./src/fonts/montserrat/montserrat-v23-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/montserrat/montserrat-v23-latin-regular.woff */ "./src/fonts/montserrat/montserrat-v23-latin-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/montserrat/montserrat-v23-latin-regular.ttf */ "./src/fonts/montserrat/montserrat-v23-latin-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/montserrat/montserrat-v23-latin-italic.woff2 */ "./src/fonts/montserrat/montserrat-v23-latin-italic.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/montserrat/montserrat-v23-latin-italic.woff */ "./src/fonts/montserrat/montserrat-v23-latin-italic.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/montserrat/montserrat-v23-latin-italic.ttf */ "./src/fonts/montserrat/montserrat-v23-latin-italic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --logo-color: rgb(174, 221, 31);\n  --section-box-border-color: rgb(114, 232, 114);\n  --menu-section-heading-color: rgb(230, 58, 181);\n  --highlight-color:rgb(246, 118, 27);\n}\n\n@font-face {\n  font-family: 'MyFont';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Monoton';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('woff'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format('truetype');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'MontserratItalic';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format('woff2'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format('woff'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format('truetype');\n  font-weight: 400;\n  font-style: normal;\n}\n\n\n\nbody {\n  font-family: 'Montserrat';  \n}\n\n#content {\n  display:flex;\n  flex-direction:column;\n  justify-content: center;\n  align-items: center;\n}\n\n.header {\n  font-family: 'Monoton';\n  font-size:42px;\n  letter-spacing: 0.15em;\n  margin-bottom:10px;\n  color:rgb(174, 221, 31)\n}\n\n.nav__list {\n  display:flex;\n  flex-direction:row;\n  list-style: none;\n  justify-content: center;\n  align-items: center;\n  padding:0px;\n  margin-bottom:30px;\n}\n\n.nav__item {\n  font-size:20px;\n  margin: 0px 10px 0px 10px;\n  text-transform: uppercase;\n}\n\n.aboutp {\n  font-size:18px;\n  width:460px;\n  line-height:3ch;\n}\n\n\n.hello {\n  color: red;\n  font-family: 'MyFont';\n}\n\n.imageblock {\n  display:block;\n  width:460px;\n}\n\n.sectionbox {\n  display:flex;\n  flex-direction:column;\n  border-color:rgb(114, 232, 114);\n  border-width:1px;\n  border-style:solid;\n  padding:30px;\n  width:760px;\n  align-items:center;\n  justify-content:center;\n  margin-top:10px;\n  margin-bottom:10px;\n  box-sizing:border-box;\n}\n\n.menuitem {\n  display:grid;\n  width:430px;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: 3ch max-content 2ch;\n  margin-bottom:40px;\n}\n\n.menuitemname {\n  font-size: 20px;\n  grid-column: 1 / 2 ;\n  grid-row: 1 / 2;\n  align-self:center;\n}\n\n.menuitemprice {\n  font-size: 20px;\n  grid-column: 2 / 2 ;\n    grid-row: 1 / 2;\n  justify-self: end;\n  align-self:center;\n}\n\n.menuitemdescription {\n  font-family: 'MontserratItalic';\n  font-size: 16px;\n  grid-column: 1 / 3 ;\n  grid-row: 2 / 3;\n}\n\n.menuitemsymbols {\n  align-self:center;\n  display:inline;\n  margin-right:3px;\n}\n\n.menusymbolsrow {\n  grid-column: 1 / 3 ;\n  grid-row: 3 / 4;\n}\n\n.griditem {\n  padding:0px;\n}\n\nh2 {\n  font-size:33px;\n}\n\nh3 {\n  font-size:26px;\n}\n\nli {\n  cursor: pointer;\n}\n\n.menusection {\n  font-family:Monoton;\n  color:rgb(230, 58, 181);\n}\n\n.menucategory {\n  color:black;\n}\n\n.menukey {\n  font-size:16px;\n  align-self:flex-end;\n  border-color:rgb(193, 218, 244);\n  border-width: 1px;\n  border-style:dashed;\n  padding:5px;\n  /* background-color: rgb(236, 245, 249); */\n}\n\n.keyrow {\n  padding:4px;\n  margin:0px;\n}\n\n.footerbox {\n  display:flex;\n  align-items:center;\n  justify-content:space-around;\n  border-color:rgb(114, 232, 114);\n  border-width:1px;\n  border-style:solid;\n  width:760px;\n  margin-top:10px;\n  margin-bottom:10px;\n  box-sizing:border-box;\n  padding: 20px 30px 20px 30px;\n}\n\n.footertitle {\n  text-decoration: underline;\n  align-self:flex-start;\n  margin-bottom:8px;\n}\n\n.footerdescription {\n  align-self:flex-start;\n\n  margin-bottom:4px;\n}\n\n.footertitle, .footerdescription {\n  color:red;\n  font-size: 16px;\n}\n\na {\n  text-decoration:none;\n  color:inherit;\n}\n\n.selected {\n  text-decoration: var(--highlight-color) wavy underline;\n  text-decoration-thickness: 2px;\n  text-underline-offset: 4px;\n}\n\n\n.footercolumn {\n  display: flex;\n  flex-direction: column;\n  align-self:flex-start;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,+BAA+B;EAC/B,8CAA8C;EAC9C,+CAA+C;EAC/C,mCAAmC;AACrC;;AAEA;EACE,qBAAqB;EACrB;0DAC4C;EAC5C,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB;0DAC8D;EAC9D,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB;;8DAE+E;EAC/E,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,+BAA+B;EAC/B;;8DAE8E;EAC9E,gBAAgB;EAChB,kBAAkB;AACpB;;;;AAIA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,qBAAqB;EACrB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,cAAc;EACd,sBAAsB;EACtB,kBAAkB;EAClB;AACF;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,WAAW;EACX,eAAe;AACjB;;;AAGA;EACE,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,qBAAqB;EACrB,+BAA+B;EAC/B,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,sBAAsB;EACtB,eAAe;EACf,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,8BAA8B;EAC9B,uCAAuC;EACvC,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,mBAAmB;IACjB,eAAe;EACjB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,+BAA+B;EAC/B,eAAe;EACf,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,+BAA+B;EAC/B,iBAAiB;EACjB,mBAAmB;EACnB,WAAW;EACX,0CAA0C;AAC5C;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,4BAA4B;EAC5B,+BAA+B;EAC/B,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,qBAAqB;EACrB,4BAA4B;AAC9B;;AAEA;EACE,0BAA0B;EAC1B,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;;EAErB,iBAAiB;AACnB;;AAEA;EACE,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,aAAa;AACf;;AAEA;EACE,sDAAsD;EACtD,8BAA8B;EAC9B,0BAA0B;AAC5B;;;AAGA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;AACvB","sourcesContent":[":root {\n  --logo-color: rgb(174, 221, 31);\n  --section-box-border-color: rgb(114, 232, 114);\n  --menu-section-heading-color: rgb(230, 58, 181);\n  --highlight-color:rgb(246, 118, 27);\n}\n\n@font-face {\n  font-family: 'MyFont';\n  src: url('./fonts/my-font.woff2') format('woff2'),\n    url('./fonts/my-font.woff') format('woff');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Monoton';\n  src: url('./fonts/monoton-v13-latin-regular.woff2') format('woff2'),\n    url('./fonts/monoton-v13-latin-regular.woff') format('woff');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url('./fonts/montserrat/montserrat-v23-latin-regular.woff2') format('woff2'),\n    url('./fonts/montserrat/montserrat-v23-latin-regular.woff') format('woff'),\n    url('./fonts/montserrat/montserrat-v23-latin-regular.ttf') format('truetype');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'MontserratItalic';\n  src: url('./fonts/montserrat/montserrat-v23-latin-italic.woff2') format('woff2'),\n    url('./fonts/montserrat/montserrat-v23-latin-italic.woff') format('woff'),\n    url('./fonts/montserrat/montserrat-v23-latin-italic.ttf') format('truetype');\n  font-weight: 400;\n  font-style: normal;\n}\n\n\n\nbody {\n  font-family: 'Montserrat';  \n}\n\n#content {\n  display:flex;\n  flex-direction:column;\n  justify-content: center;\n  align-items: center;\n}\n\n.header {\n  font-family: 'Monoton';\n  font-size:42px;\n  letter-spacing: 0.15em;\n  margin-bottom:10px;\n  color:rgb(174, 221, 31)\n}\n\n.nav__list {\n  display:flex;\n  flex-direction:row;\n  list-style: none;\n  justify-content: center;\n  align-items: center;\n  padding:0px;\n  margin-bottom:30px;\n}\n\n.nav__item {\n  font-size:20px;\n  margin: 0px 10px 0px 10px;\n  text-transform: uppercase;\n}\n\n.aboutp {\n  font-size:18px;\n  width:460px;\n  line-height:3ch;\n}\n\n\n.hello {\n  color: red;\n  font-family: 'MyFont';\n}\n\n.imageblock {\n  display:block;\n  width:460px;\n}\n\n.sectionbox {\n  display:flex;\n  flex-direction:column;\n  border-color:rgb(114, 232, 114);\n  border-width:1px;\n  border-style:solid;\n  padding:30px;\n  width:760px;\n  align-items:center;\n  justify-content:center;\n  margin-top:10px;\n  margin-bottom:10px;\n  box-sizing:border-box;\n}\n\n.menuitem {\n  display:grid;\n  width:430px;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: 3ch max-content 2ch;\n  margin-bottom:40px;\n}\n\n.menuitemname {\n  font-size: 20px;\n  grid-column: 1 / 2 ;\n  grid-row: 1 / 2;\n  align-self:center;\n}\n\n.menuitemprice {\n  font-size: 20px;\n  grid-column: 2 / 2 ;\n    grid-row: 1 / 2;\n  justify-self: end;\n  align-self:center;\n}\n\n.menuitemdescription {\n  font-family: 'MontserratItalic';\n  font-size: 16px;\n  grid-column: 1 / 3 ;\n  grid-row: 2 / 3;\n}\n\n.menuitemsymbols {\n  align-self:center;\n  display:inline;\n  margin-right:3px;\n}\n\n.menusymbolsrow {\n  grid-column: 1 / 3 ;\n  grid-row: 3 / 4;\n}\n\n.griditem {\n  padding:0px;\n}\n\nh2 {\n  font-size:33px;\n}\n\nh3 {\n  font-size:26px;\n}\n\nli {\n  cursor: pointer;\n}\n\n.menusection {\n  font-family:Monoton;\n  color:rgb(230, 58, 181);\n}\n\n.menucategory {\n  color:black;\n}\n\n.menukey {\n  font-size:16px;\n  align-self:flex-end;\n  border-color:rgb(193, 218, 244);\n  border-width: 1px;\n  border-style:dashed;\n  padding:5px;\n  /* background-color: rgb(236, 245, 249); */\n}\n\n.keyrow {\n  padding:4px;\n  margin:0px;\n}\n\n.footerbox {\n  display:flex;\n  align-items:center;\n  justify-content:space-around;\n  border-color:rgb(114, 232, 114);\n  border-width:1px;\n  border-style:solid;\n  width:760px;\n  margin-top:10px;\n  margin-bottom:10px;\n  box-sizing:border-box;\n  padding: 20px 30px 20px 30px;\n}\n\n.footertitle {\n  text-decoration: underline;\n  align-self:flex-start;\n  margin-bottom:8px;\n}\n\n.footerdescription {\n  align-self:flex-start;\n\n  margin-bottom:4px;\n}\n\n.footertitle, .footerdescription {\n  color:red;\n  font-size: 16px;\n}\n\na {\n  text-decoration:none;\n  color:inherit;\n}\n\n.selected {\n  text-decoration: var(--highlight-color) wavy underline;\n  text-decoration-thickness: 2px;\n  text-underline-offset: 4px;\n}\n\n\n.footercolumn {\n  display: flex;\n  flex-direction: column;\n  align-self:flex-start;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/monoton-v13-latin-regular.woff":
/*!**************************************************!*\
  !*** ./src/fonts/monoton-v13-latin-regular.woff ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b537da7437717e578682.woff";

/***/ }),

/***/ "./src/fonts/monoton-v13-latin-regular.woff2":
/*!***************************************************!*\
  !*** ./src/fonts/monoton-v13-latin-regular.woff2 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97a31dd13064ac9b7d3e.woff2";

/***/ }),

/***/ "./src/fonts/montserrat/montserrat-v23-latin-italic.ttf":
/*!**************************************************************!*\
  !*** ./src/fonts/montserrat/montserrat-v23-latin-italic.ttf ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ce56893de0980404481.ttf";

/***/ }),

/***/ "./src/fonts/montserrat/montserrat-v23-latin-italic.woff":
/*!***************************************************************!*\
  !*** ./src/fonts/montserrat/montserrat-v23-latin-italic.woff ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e606a79afc195228728.woff";

/***/ }),

/***/ "./src/fonts/montserrat/montserrat-v23-latin-italic.woff2":
/*!****************************************************************!*\
  !*** ./src/fonts/montserrat/montserrat-v23-latin-italic.woff2 ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c257e0f5e21ee646b33b.woff2";

/***/ }),

/***/ "./src/fonts/montserrat/montserrat-v23-latin-regular.ttf":
/*!***************************************************************!*\
  !*** ./src/fonts/montserrat/montserrat-v23-latin-regular.ttf ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "317ea800b4f72dee076d.ttf";

/***/ }),

/***/ "./src/fonts/montserrat/montserrat-v23-latin-regular.woff":
/*!****************************************************************!*\
  !*** ./src/fonts/montserrat/montserrat-v23-latin-regular.woff ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "351534132a6368fb21b4.woff";

/***/ }),

/***/ "./src/fonts/montserrat/montserrat-v23-latin-regular.woff2":
/*!*****************************************************************!*\
  !*** ./src/fonts/montserrat/montserrat-v23-latin-regular.woff2 ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d169d5efcd03fdcc0d7.woff2";

/***/ }),

/***/ "./src/fonts/my-font.woff":
/*!********************************!*\
  !*** ./src/fonts/my-font.woff ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e14718170a1fd7262e33.woff";

/***/ }),

/***/ "./src/fonts/my-font.woff2":
/*!*********************************!*\
  !*** ./src/fonts/my-font.woff2 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9b73b554854fa871e32.woff2";

/***/ }),

/***/ "./src/pickles.jpg":
/*!*************************!*\
  !*** ./src/pickles.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24b6447b16500c21dd40.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/restaurantpage/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageload.js */ "./src/pageload.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");



 // import { contact } from './contact.js';

(0,_pageload_js__WEBPACK_IMPORTED_MODULE_1__.pageLoad)();
navlist.addEventListener("click", function (event) {
  // which nav item was clicked, menu, about, or contact
  let target = event.target; // remove 'nav' from id of item clicked - so menunav would become menu

  let tab = target.id.slice(0, -3);
  console.log(tab);
  const content = document.getElementById('content');
  const footerbox = document.getElementById('footerbox');
  const aboutnav = document.getElementById('aboutnav');
  const menunav = document.getElementById('menunav');
  const oldChild = document.querySelector('.sectionbox'); // content.removeChild(oldChild);

  if (tab === 'about') {
    content.removeChild(oldChild);
    content.insertBefore((0,_about_js__WEBPACK_IMPORTED_MODULE_2__.about)(), footerbox);
    aboutnav.classList.add('selected');
    menunav.classList.remove('selected');
  } else if (tab === 'menu') {
    content.removeChild(oldChild);
    content.insertBefore((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.menu)(), footerbox);
    aboutnav.classList.remove('selected');
    menunav.classList.add('selected'); // } else if (tab === 'contact') {
    //   content.insertBefore(contact(), footerbox);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEI7RUFDQSxNQUFNUCxRQUFRLEdBQUdoRSxRQUFRLENBQUN1RSxjQUFULENBQXdCLFVBQXhCLENBQWpCO0VBQ0EsTUFBTU4sT0FBTyxHQUFHakUsUUFBUSxDQUFDdUUsY0FBVCxDQUF3QixTQUF4QixDQUFoQjtFQUNBLE1BQU1TLFFBQVEsR0FBR2hGLFFBQVEsQ0FBQ2lGLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBakIsQ0FYZ0QsQ0FZaEQ7O0VBRUEsSUFBSUwsR0FBRyxLQUFLLE9BQVosRUFBcUI7SUFDbkJOLE9BQU8sQ0FBQ1ksV0FBUixDQUFvQkYsUUFBcEI7SUFDQVYsT0FBTyxDQUFDYSxZQUFSLENBQXFCckYsZ0RBQUssRUFBMUIsRUFBOEJlLFNBQTlCO0lBQ0FtRCxRQUFRLENBQUM5RCxTQUFULENBQW1CQyxHQUFuQixDQUF1QixVQUF2QjtJQUNBOEQsT0FBTyxDQUFDL0QsU0FBUixDQUFrQmtGLE1BQWxCLENBQXlCLFVBQXpCO0VBQ0QsQ0FMRCxNQUtPLElBQUlSLEdBQUcsS0FBSyxNQUFaLEVBQW9CO0lBQ3pCTixPQUFPLENBQUNZLFdBQVIsQ0FBb0JGLFFBQXBCO0lBQ0FWLE9BQU8sQ0FBQ2EsWUFBUixDQUFxQnpELDhDQUFJLEVBQXpCLEVBQTZCYixTQUE3QjtJQUNBbUQsUUFBUSxDQUFDOUQsU0FBVCxDQUFtQmtGLE1BQW5CLENBQTBCLFVBQTFCO0lBQ0FuQixPQUFPLENBQUMvRCxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixVQUF0QixFQUp5QixDQUszQjtJQUNBO0VBQ0M7QUFDRixDQTNCRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9wYWdlbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEljb24gZnJvbSAnLi9pY29uLnBuZyc7XG5pbXBvcnQgUGlja2xlcyBmcm9tICcuL3BpY2tsZXMuanBnJztcblxuZnVuY3Rpb24gYWJvdXQoKSB7XG4gIGNvbnN0IGFib3V0Ym94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFib3V0Ym94LmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb25ib3gnKTtcbiAgYWJvdXRib3guaWQgPSAnYWJvdXRib3gnO1xuXG4gIGNvbnN0IHBhcmFncmFwaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHBhcmFncmFwaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgLy8gRmlsbCBvdXQgY29tcG9uZW5ldCBoZXJlLlxuICBwYXJhZ3JhcGgxLnRleHRDb250ZW50ID0gKCdUaGUgUGlja2xlIGlzIGEgY2FzdWFsIGJyZWFrZmFzdCBhbmQgbHVuY2ggY2FmZSwgaWRlYWwgZm9yIGVuam95aW5nIGZvb2QsIGNvbnZlcnNhdGlvbiwgYW5kIHdvcmsuIFRoZSBzcGFjZSBpcyBkaXZpZGVkIGludG8gdGhyZWUgYXJlYXMsIG9uZSB0aGF0IGFjY29tb2RhdGVzIGxhcmdlciBncm91cHMsIGFub3RoZXIgZm9yIGZvdXIgZGluZXJzIGFuZCBsZXNzLCBhbmQgdGhlbiBzbWFsbCBjYWZlIHRhYmxlcyB3aXRoIG91dGxldHMuJyk7XG4gIHBhcmFncmFwaDEuY2xhc3NMaXN0LmFkZCgnYWJvdXRwJyk7XG4gIHBhcmFncmFwaDIudGV4dENvbnRlbnQgPSAoJ0FsbCBvZiBvdXIgZnJ1aXRzIGFuZCB2ZWdldGFibGVzIGFyZSBzb3VyY2VkIGZyb20gbG9jYWwgZmFybWVycy4gV2UgY29tcG9zdCBvdXIgc2NyYXBzLiBUaGUgUGlja2xlIGlzIGEgdmVnYW4gZXN0YWJsaXNobWVudC4gV2UgZG8gbm90IHVzZSBhbnkgaW5ncmVkaWVudHMgZnJvbSBhbmltYWxzLicpO1xuICBwYXJhZ3JhcGgyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0cCcpO1xuXG4gIC8vIEFkZCB0aGUgaW1hZ2UgdG8gb3VyIGV4aXN0aW5nIGRpdi5cbiAgLy8gY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4gIC8vIG15SWNvbi5zcmMgPSBJY29uO1xuICAvLyBteUljb24uY2xhc3NMaXN0LmFkZCgnaW1hZ2VibG9jaycpO1xuXG4gIGNvbnN0IG15UGlja2xlcyA9IG5ldyBJbWFnZSgpO1xuICBteVBpY2tsZXMuc3JjID0gUGlja2xlcztcbiAgbXlQaWNrbGVzLmNsYXNzTGlzdC5hZGQoJ2ltYWdlYmxvY2snKTtcblxuICBhYm91dGJveC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgxKTtcbiAgYWJvdXRib3guYXBwZW5kQ2hpbGQobXlQaWNrbGVzKTtcbiAgYWJvdXRib3guYXBwZW5kQ2hpbGQocGFyYWdyYXBoMik7XG4gXG5cbiAgcmV0dXJuIGFib3V0Ym94O1xufVxuXG5leHBvcnQgeyBhYm91dCB9OyIsImZ1bmN0aW9uIGZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3RlcmJveC5jbGFzc0xpc3QuYWRkKCdmb290ZXJib3gnKTtcbiAgZm9vdGVyYm94LmlkID0gJ2Zvb3RlcmJveCc7XG5cbiAgY29uc3QgZm9vdGVyaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyaG91cnMuY2xhc3NMaXN0LmFkZCgnZm9vdGVyaG91cnMnKTtcbiAgZm9vdGVyaG91cnMuY2xhc3NMaXN0LmFkZCgnZm9vdGVyY29sdW1uJyk7XG5cbiAgY29uc3QgZm9vdGVyYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXJhZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcmFkZHJlc3MnKTtcbiAgZm9vdGVyYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdmb290ZXJjb2x1bW4nKTtcblxuICBjb25zdCBmb290ZXJjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3RlcmNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnZm9vdGVyY29udGFjdCcpO1xuICBmb290ZXJjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcmNvbHVtbicpO1xuXG4gIC8vIGNvbnN0IGZvb3RlcmdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gZm9vdGVyZ3JpZC5jbGFzc0xpc3QuYWRkKCdmb290ZXJncmlkJyk7XG5cbiAgY29uc3QgZm9vdGVyaG91cnN0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXJob3Vyc3RpdGxlLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcmhvdXJzdGl0bGUnLCAnZm9vdGVydGl0bGUnKTtcbiAgZm9vdGVyaG91cnN0aXRsZS5pbm5lckhUTUwgPSAoJ0hvdXJzJyk7XG5cbiAgY29uc3QgZm9vdGVyaG91cnNkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXJob3Vyc2Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcmhvdXJzZGVzY3JpcHRpb24nLCAnZm9vdGVyZGVzY3JpcHRpb24nKTtcbiAgZm9vdGVyaG91cnNkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSAoJ00tRjogNzozMGFtIC0gOHBtJyk7XG5cbiAgY29uc3QgZm9vdGVyYWRkcmVzc3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3RlcmFkZHJlc3N0aXRsZS5jbGFzc0xpc3QuYWRkKCdmb290ZXJhZGRyZXNzdGl0bGUnLCAnZm9vdGVydGl0bGUnKTtcbiAgZm9vdGVyYWRkcmVzc3RpdGxlLmlubmVySFRNTCA9ICgnQWRkcmVzcycpO1xuXG4gIGNvbnN0IGZvb3RlcmFkZHJlc3NkZXNjcmlwdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyYWRkcmVzc2Rlc2NyaXB0aW9uMS5jbGFzc0xpc3QuYWRkKCdmb290ZXJhZGRyZXNzZGVzY3JpcHRpb24nLCAnZm9vdGVyZGVzY3JpcHRpb24nKTtcbiAgZm9vdGVyYWRkcmVzc2Rlc2NyaXB0aW9uMS5pbm5lckhUTUwgPSAoJzEyMyBDb2xvcmFkbyBCbHZkJyk7XG5cbiAgY29uc3QgZm9vdGVyYWRkcmVzc2Rlc2NyaXB0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXJhZGRyZXNzZGVzY3JpcHRpb24yLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcmFkZHJlc3NkZXNjcmlwdGlvbicsICdmb290ZXJkZXNjcmlwdGlvbicpO1xuICBmb290ZXJhZGRyZXNzZGVzY3JpcHRpb24yLmlubmVySFRNTCA9ICgnU2llcnJhIE1hZHJlLCBDQSAxMTIyMycpO1xuXG4gIGNvbnN0IGZvb3RlcmNvbnRhY3R0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXJjb250YWN0dGl0bGUuY2xhc3NMaXN0LmFkZCgnZm9vdGVyY29udGFjdHRpdGxlJywgJ2Zvb3RlcnRpdGxlJyk7XG4gIGZvb3RlcmNvbnRhY3R0aXRsZS5pbm5lckhUTUwgPSAoJ0NvbnRhY3QnKTtcblxuICBjb25zdCBmb290ZXJjb250YWN0ZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyY29udGFjdGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcmNvbnRhY3RkZXNjcmlwdGlvbicsICdmb290ZXJkZXNjcmlwdGlvbicpO1xuICBmb290ZXJjb250YWN0ZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gKCd0aGVwaWNrbGUgQCB0aGVwaWNrbGUgZG90IGNvbScpO1xuXG4gIC8vIGZvb3RlcmdyaWQuYXBwZW5kQ2hpbGQoZm9vdGVyaG91cnN0aXRsZSk7XG4gIC8vIGZvb3RlcmdyaWQuYXBwZW5kQ2hpbGQoZm9vdGVyaG91cnNkZXNjcmlwdGlvbik7XG4gIC8vIGZvb3RlcmdyaWQuYXBwZW5kQ2hpbGQoZm9vdGVyYWRkcmVzc3RpdGxlKTtcbiAgLy8gZm9vdGVyZ3JpZC5hcHBlbmRDaGlsZChmb290ZXJhZGRyZXNzZGVzY3JpcHRpb24pO1xuICAvLyBmb290ZXJncmlkLmFwcGVuZENoaWxkKGZvb3RlcmNvbnRhY3R0aXRsZSk7XG4gIC8vIGZvb3RlcmdyaWQuYXBwZW5kQ2hpbGQoZm9vdGVyY29udGFjdGRlc2NyaXB0aW9uKTtcblxuICAvLyBmb290ZXJib3guYXBwZW5kQ2hpbGQoZm9vdGVyZ3JpZCk7XG5cbiAgZm9vdGVyaG91cnMuYXBwZW5kQ2hpbGQoZm9vdGVyaG91cnN0aXRsZSk7XG4gIGZvb3RlcmhvdXJzLmFwcGVuZENoaWxkKGZvb3RlcmhvdXJzZGVzY3JpcHRpb24pO1xuICBmb290ZXJhZGRyZXNzLmFwcGVuZENoaWxkKGZvb3RlcmFkZHJlc3N0aXRsZSlcbiAgZm9vdGVyYWRkcmVzcy5hcHBlbmRDaGlsZChmb290ZXJhZGRyZXNzZGVzY3JpcHRpb24xKVxuICBmb290ZXJhZGRyZXNzLmFwcGVuZENoaWxkKGZvb3RlcmFkZHJlc3NkZXNjcmlwdGlvbjIpXG4gIGZvb3RlcmNvbnRhY3QuYXBwZW5kQ2hpbGQoZm9vdGVyY29udGFjdHRpdGxlKVxuICBmb290ZXJjb250YWN0LmFwcGVuZENoaWxkKGZvb3RlcmNvbnRhY3RkZXNjcmlwdGlvbilcblxuICBmb290ZXJib3guYXBwZW5kQ2hpbGQoZm9vdGVyaG91cnMpO1xuICBmb290ZXJib3guYXBwZW5kQ2hpbGQoZm9vdGVyYWRkcmVzcyk7XG4gIGZvb3RlcmJveC5hcHBlbmRDaGlsZChmb290ZXJjb250YWN0KTtcbiAgXG5cblxuICByZXR1cm4gZm9vdGVyYm94O1xufVxuXG5leHBvcnQgeyBmb290ZXIgfTtcbiIsImZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9ICdUaGUgUGlja2xlJztcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICByZXR1cm4gaGVhZGVyO1xufVxuXG5leHBvcnQgeyBoZWFkZXIgfTtcbiIsImZ1bmN0aW9uIG1lbnUoKSB7XG4gIGNvbnN0IG1lbnVib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudWJveC5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uYm94Jyk7XG4gIG1lbnVib3guaWQgPSAnbWVudWJveCc7XG5cbiAgLy8gU1lNQk9MU1xuICAvLyB2ZWdhblxuICBjb25zdCB2ZWdhbnYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHZlZ2Fudi50ZXh0Q29udGVudCA9ICgnViAnKTtcbiAgdmVnYW52LmNsYXNzTGlzdC5hZGQoJ21lbnVpdGVtc3ltYm9scycpO1xuICAvLyBnbHV0ZW4gZnJlZVxuICBjb25zdCBnZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZ2YudGV4dENvbnRlbnQgPSAoJ0dGICcpO1xuICBnZi5jbGFzc0xpc3QuYWRkKCdtZW51aXRlbXN5bWJvbHMnKTtcblxuICAvLyBMVU5DSFxuICBjb25zdCBsdW5jaGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBsdW5jaGhlYWRpbmcudGV4dENvbnRlbnQgPSAoJ0x1bmNoJyk7XG4gIGx1bmNoaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdtZW51c2VjdGlvbicpO1xuXG4gIC8vIFNBTEFEU1xuICBjb25zdCBzYWxhZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBzYWxhZHMudGV4dENvbnRlbnQgPSAoJ1NhbGFkcycpO1xuICBzYWxhZHMuY2xhc3NMaXN0LmFkZCgnbWVudWNhdGVnb3J5Jyk7XG5cbiAgLy8gUkFESVNIIERJVlxuICBjb25zdCByYWRpc2hzYWxhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByYWRpc2hzYWxhZC5jbGFzc0xpc3QuYWRkKCdtZW51aXRlbScpO1xuICAvLyBSQURJU0ggVElUTEVcbiAgY29uc3QgcmFkaXNodGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHJhZGlzaHRpdGxlLnRleHRDb250ZW50ID0gKCdSYWRpc2ggU2FsYWQnKTtcbiAgcmFkaXNodGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudWl0ZW1uYW1lJywnZ3JpZGl0ZW0nKTtcbiAgLy8gUkFESVNIIERFU0NSSVBUSU9OXG4gIGNvbnN0IHJhZGlzaGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICByYWRpc2hkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICgnQmxhY2sgU3BhbmlzaCByYWRpc2gsIEZyZW5jaCByYWRpc2gsIHdhdGVybWVsb24gcmFkaXNoLCBwaWNrbGVkIGZlbm5lbCwgZW5kaXZlLCBzd2VldCBjb3JuLCBtaXNvLWxpbWUgdmluYWlncmV0dGUuJyk7XG4gIHJhZGlzaGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnVpdGVtZGVzY3JpcHRpb24nLCdncmlkaXRlbScpO1xuICAvLyBSQURJU0ggUFJJQ0VcbiAgY29uc3QgcmFkaXNocHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHJhZGlzaHByaWNlLnRleHRDb250ZW50ID0gKCckOScpO1xuICByYWRpc2hwcmljZS5jbGFzc0xpc3QuYWRkKCdtZW51aXRlbXByaWNlJywnZ3JpZGl0ZW0nKVxuICAvLyBSQURJU0ggU1lNQk9MU1xuICBjb25zdCByYWRpc2htZW51c3ltYm9sc3JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByYWRpc2htZW51c3ltYm9sc3Jvdy5jbGFzc0xpc3QuYWRkKCdtZW51c3ltYm9sc3JvdycpO1xuXG4gIHJhZGlzaHNhbGFkLmFwcGVuZENoaWxkKHJhZGlzaHRpdGxlKTtcbiAgcmFkaXNoc2FsYWQuYXBwZW5kQ2hpbGQocmFkaXNoZGVzY3JpcHRpb24pO1xuICByYWRpc2hzYWxhZC5hcHBlbmRDaGlsZChyYWRpc2hwcmljZSk7XG4gIHJhZGlzaHNhbGFkLmFwcGVuZENoaWxkKHJhZGlzaG1lbnVzeW1ib2xzcm93KTtcbiAgcmFkaXNobWVudXN5bWJvbHNyb3cuYXBwZW5kQ2hpbGQodmVnYW52KTtcbiAgcmFkaXNobWVudXN5bWJvbHNyb3cuYXBwZW5kQ2hpbGQoZ2YpO1xuXG4gIC8vIFBVUlBMRSBESVZcbiAgY29uc3QgcHVycGxlc2FsYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHVycGxlc2FsYWQuY2xhc3NMaXN0LmFkZCgnbWVudWl0ZW0nKTtcbiAgLy8gUFVSUExFIFRJVExFXG4gIGNvbnN0IHB1cnBsZXRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwdXJwbGV0aXRsZS5pbm5lckhUTUwgPSAoJ1B1cnBsZSBTYWxhZCcpO1xuICBwdXJwbGV0aXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51aXRlbW5hbWUnLCdncmlkaXRlbScpO1xuICAvLyBQVVJQTEUgREVTQ1JJUFRJT05cbiAgY29uc3QgcHVycGxlZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHB1cnBsZWRlc2NyaXB0aW9uLmlubmVySFRNTCA9ICgnUHVycGxlIHBvdGF0bywgcmVhZCBsZWFmIGxldHR1Y2UsIHJlZCBzbGF3LCBtaXNvIGVnZ3BsYW50LCBjYXJyb3QgZ2luZ2VyIGRyZXNzaW5nLicpO1xuICBwdXJwbGVkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51aXRlbWRlc2NyaXB0aW9uJywnZ3JpZGl0ZW0nKTtcbiAgLy8gUFVSUExFIFBSSUNFXG4gIGNvbnN0IHB1cnBsZXByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwdXJwbGVwcmljZS5pbm5lckhUTUwgPSAoJyQxMScpO1xuICBwdXJwbGVwcmljZS5jbGFzc0xpc3QuYWRkKCdtZW51aXRlbXByaWNlJywnZ3JpZGl0ZW0nKVxuICAvLyBQVVJQTEUgU1lNQk9MU1xuICBjb25zdCBwdXJwbGVtZW51c3ltYm9sc3JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwdXJwbGVtZW51c3ltYm9sc3Jvdy5jbGFzc0xpc3QuYWRkKCdtZW51c3ltYm9sc3JvdycpO1xuICAvLyBQVVJQTEVET01cbiAgcHVycGxlc2FsYWQuYXBwZW5kQ2hpbGQocHVycGxldGl0bGUpO1xuICBwdXJwbGVzYWxhZC5hcHBlbmRDaGlsZChwdXJwbGVkZXNjcmlwdGlvbik7XG4gIHB1cnBsZXNhbGFkLmFwcGVuZENoaWxkKHB1cnBsZXByaWNlKTtcbiAgcHVycGxlc2FsYWQuYXBwZW5kQ2hpbGQocHVycGxlbWVudXN5bWJvbHNyb3cpO1xuICBsZXQgdmVnYW52MiA9IHZlZ2Fudi5jbG9uZU5vZGUodHJ1ZSk7XG4gIGxldCBnZjIgPSBnZi5jbG9uZU5vZGUodHJ1ZSk7XG4gIHB1cnBsZW1lbnVzeW1ib2xzcm93LmFwcGVuZENoaWxkKHZlZ2FudjIpO1xuICBwdXJwbGVtZW51c3ltYm9sc3Jvdy5hcHBlbmRDaGlsZChnZjIpO1xuXG4gIC8vIFNBTkRXSUNIRVNcbiAgY29uc3Qgc2FuZHdpY2hlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHNhbmR3aWNoZXMuaW5uZXJIVE1MID0gKCdTYW5kd2ljaGVzJyk7XG4gIHNhbmR3aWNoZXMuY2xhc3NMaXN0LmFkZCgnbWVudWNhdGVnb3J5Jyk7XG5cblxuICAvLyBWRUcgRElWXG4gIGNvbnN0IHZlZ3NhbmR3aWNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZlZ3NhbmR3aWNoLmNsYXNzTGlzdC5hZGQoJ21lbnVpdGVtJyk7XG4gIC8vIFZFRyBUSVRMRVxuICBjb25zdCB2ZWdzYW5kd2ljaHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB2ZWdzYW5kd2ljaHRpdGxlLmlubmVySFRNTCA9ICgnVmVnZXRhYmxlIFNhbmR3aWNoJyk7XG4gIHZlZ3NhbmR3aWNodGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudWl0ZW1uYW1lJywnZ3JpZGl0ZW0nKTtcbiAgLy8gVkVHIERFU0NSSVBUSU9OXG4gIGNvbnN0IHZlZ3NhbmR3aWNoZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHZlZ3NhbmR3aWNoZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gKCdBbG1vbmQgbWFub3VyaSBjaGVlc2UsIGZpZ3MsIGFydWd1bGEsIGF2b2NhZG8sIGxlbW9uLCBzb3VyZG91Z2guJyk7XG4gIHZlZ3NhbmR3aWNoZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudWl0ZW1kZXNjcmlwdGlvbicsJ2dyaWRpdGVtJyk7XG4gIC8vIFZFRyBQUklDRVxuICBjb25zdCB2ZWdzYW5kd2ljaHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB2ZWdzYW5kd2ljaHByaWNlLmlubmVySFRNTCA9ICgnJDknKTtcbiAgdmVnc2FuZHdpY2hwcmljZS5jbGFzc0xpc3QuYWRkKCdtZW51aXRlbXByaWNlJywnZ3JpZGl0ZW0nKVxuICAvLyBWRUcgU1lNQk9MU1xuICBjb25zdCB2ZWdtZW51c3ltYm9sc3JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2ZWdtZW51c3ltYm9sc3Jvdy5jbGFzc0xpc3QuYWRkKCdtZW51c3ltYm9sc3JvdycpO1xuXG4gIHZlZ3NhbmR3aWNoLmFwcGVuZENoaWxkKHZlZ3NhbmR3aWNodGl0bGUpO1xuICB2ZWdzYW5kd2ljaC5hcHBlbmRDaGlsZCh2ZWdzYW5kd2ljaGRlc2NyaXB0aW9uKTtcbiAgdmVnc2FuZHdpY2guYXBwZW5kQ2hpbGQodmVnc2FuZHdpY2hwcmljZSk7XG4gIHZlZ3NhbmR3aWNoLmFwcGVuZENoaWxkKHZlZ21lbnVzeW1ib2xzcm93KTtcbiAgbGV0IHZlZ2FudjMgPSB2ZWdhbnYuY2xvbmVOb2RlKHRydWUpO1xuICB2ZWdtZW51c3ltYm9sc3Jvdy5hcHBlbmRDaGlsZCh2ZWdhbnYzKTtcbiAgXG4gIFxuICAvLyBDSElQIERJVlxuICBjb25zdCBjaGlwc2FuZHdpY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2hpcHNhbmR3aWNoLmNsYXNzTGlzdC5hZGQoJ21lbnVpdGVtJyk7XG4gIC8vIENISVAgVElUTEVcbiAgY29uc3QgY2hpcHNhbmR3aWNodGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNoaXBzYW5kd2ljaHRpdGxlLmlubmVySFRNTCA9ICgnQ2hpcCBTYW5kd2ljaCcpO1xuICBjaGlwc2FuZHdpY2h0aXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51aXRlbW5hbWUnLCdncmlkaXRlbScpO1xuICAvLyBDSElQIERFU0NSSVBUSU9OXG4gIGNvbnN0IGNoaXBzYW5kd2ljaGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjaGlwc2FuZHdpY2hkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSAoJ0F2b2NhZG8sIHNoaWl0YWtlIGJhY29uLCBwb3RhdG8gY2hpcHMsIHBlc3RvLCBzb3VyZG91Z2guJyk7XG4gIGNoaXBzYW5kd2ljaGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnVpdGVtZGVzY3JpcHRpb24nLCdncmlkaXRlbScpO1xuICAvLyBDSElQIFBSSUNFXG4gIGNvbnN0IGNoaXBzYW5kd2ljaHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjaGlwc2FuZHdpY2hwcmljZS5pbm5lckhUTUwgPSAoJyQxMCcpO1xuICBjaGlwc2FuZHdpY2hwcmljZS5jbGFzc0xpc3QuYWRkKCdtZW51aXRlbXByaWNlJywnZ3JpZGl0ZW0nKVxuICAvLyBDSElQIFNZTUJPTFNcbiAgY29uc3QgY2hpcG1lbnVzeW1ib2xzcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNoaXBtZW51c3ltYm9sc3Jvdy5jbGFzc0xpc3QuYWRkKCdtZW51c3ltYm9sc3JvdycpO1xuXG4gIGNoaXBzYW5kd2ljaC5hcHBlbmRDaGlsZChjaGlwc2FuZHdpY2h0aXRsZSk7XG4gIGNoaXBzYW5kd2ljaC5hcHBlbmRDaGlsZChjaGlwc2FuZHdpY2hkZXNjcmlwdGlvbik7XG4gIGNoaXBzYW5kd2ljaC5hcHBlbmRDaGlsZChjaGlwc2FuZHdpY2hwcmljZSk7XG4gIGNoaXBzYW5kd2ljaC5hcHBlbmRDaGlsZChjaGlwbWVudXN5bWJvbHNyb3cpO1xuICBsZXQgdmVnYW52NCA9IHZlZ2Fudi5jbG9uZU5vZGUodHJ1ZSk7XG4gIGNoaXBtZW51c3ltYm9sc3Jvdy5hcHBlbmRDaGlsZCh2ZWdhbnY0KTtcblxuICAvLyBNRU5VIEtFWVxuICBjb25zdCBtZW51a2V5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVrZXkuY2xhc3NMaXN0LmFkZCgnbWVudWtleScpO1xuICBjb25zdCBrZXlyb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBrZXlyb3cxLmNsYXNzTGlzdC5hZGQoJ2tleXJvdycpO1xuICBrZXlyb3cxLmlubmVyVGV4dCA9ICdWID0gdmVnYW4nO1xuICBjb25zdCBrZXlyb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBrZXlyb3cyLmlubmVyVGV4dCA9ICdHRiA9IGdsdXRlbi1mcmVlJztcbiAga2V5cm93Mi5jbGFzc0xpc3QuYWRkKCdrZXlyb3cnKTtcbiAgbWVudWtleS5hcHBlbmRDaGlsZChrZXlyb3cxKTtcbiAgbWVudWtleS5hcHBlbmRDaGlsZChrZXlyb3cyKTtcblxuICBcbiAgbWVudWJveC5hcHBlbmRDaGlsZChsdW5jaGhlYWRpbmcpO1xuICBtZW51Ym94LmFwcGVuZENoaWxkKHNhbGFkcyk7XG4gIG1lbnVib3guYXBwZW5kQ2hpbGQocmFkaXNoc2FsYWQpO1xuICBtZW51Ym94LmFwcGVuZENoaWxkKHB1cnBsZXNhbGFkKTtcbiAgbWVudWJveC5hcHBlbmRDaGlsZChzYW5kd2ljaGVzKTtcbiAgbWVudWJveC5hcHBlbmRDaGlsZCh2ZWdzYW5kd2ljaCk7XG4gIG1lbnVib3guYXBwZW5kQ2hpbGQoY2hpcHNhbmR3aWNoKTtcbiAgbWVudWJveC5hcHBlbmRDaGlsZChtZW51a2V5KTtcblxuICByZXR1cm4gbWVudWJveDtcbn1cblxuZXhwb3J0IHsgbWVudSB9OyIsImZ1bmN0aW9uIG5hdigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcbiAgbmF2LmlkID0gJ25hdic7XG5cbiAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIG5hdkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2X19saXN0Jyk7XG4gIG5hdkxpc3QuaWQgPSAnbmF2bGlzdCc7XG5cbiAgY29uc3QgYWJvdXRuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBhYm91dG5hdi5jbGFzc0xpc3QuYWRkKCduYXZfX2l0ZW0nKTtcbiAgYWJvdXRuYXYuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgYWJvdXRuYXYuaW5uZXJIVE1MID0gJ2Fib3V0JztcbiAgYWJvdXRuYXYuaWQgPSAnYWJvdXRuYXYnO1xuXG4gIGNvbnN0IG1lbnVuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBtZW51bmF2LmNsYXNzTGlzdC5hZGQoJ25hdl9faXRlbScpO1xuICBtZW51bmF2LnRleHRDb250ZW50ID0gJ21lbnUnO1xuICBtZW51bmF2LmlkID0gJ21lbnVuYXYnO1xuXG4gIGNvbnN0IGNvbnRhY3RuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb250YWN0bmF2LmNsYXNzTGlzdC5hZGQoJ25hdl9faXRlbScpO1xuICAvLyBjb250YWN0bmF2LnRleHRDb250ZW50ID0gJ2NvbnRhY3QnO1xuICBjb250YWN0bmF2LmlkID0gJ2NvbnRhY3RuYXYnO1xuXG4gIGNvbnN0IGFUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGFUYWcuc2V0QXR0cmlidXRlKCdocmVmJyxcIiNmb290ZXJib3hcIik7XG4gIGFUYWcuaW5uZXJUZXh0ID0gXCJjb250YWN0XCI7XG4gIGNvbnRhY3RuYXYuYXBwZW5kQ2hpbGQoYVRhZyk7XG5cbiAgbmF2TGlzdC5hcHBlbmRDaGlsZChhYm91dG5hdik7XG4gIG5hdkxpc3QuYXBwZW5kQ2hpbGQobWVudW5hdik7XG4gIG5hdkxpc3QuYXBwZW5kQ2hpbGQoY29udGFjdG5hdik7XG4gIG5hdi5hcHBlbmRDaGlsZChuYXZMaXN0KTtcblxuICByZXR1cm4gbmF2O1xufVxuXG5leHBvcnQgeyBuYXYgfTsiLCJcbmltcG9ydCB7IGhlYWRlciB9IGZyb20gJy4vaGVhZGVyLmpzJztcbmltcG9ydCB7IG5hdiB9IGZyb20gJy4vbmF2LmpzJztcbmltcG9ydCB7IGFib3V0IH0gZnJvbSAnLi9hYm91dC5qcyc7XG5pbXBvcnQgeyBmb290ZXIgfSBmcm9tICcuL2Zvb3Rlci5qcyc7XG5cbmNvbnN0IHBhZ2VMb2FkID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChuYXYoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXQoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xufVxuXG5leHBvcnQgeyBwYWdlTG9hZCB9OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL215LWZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL215LWZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvbW9ub3Rvbi12MTMtbGF0aW4tcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vZm9udHMvbW9ub3Rvbi12MTMtbGF0aW4tcmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9mb250cy9tb250c2VycmF0L21vbnRzZXJyYXQtdjIzLWxhdGluLXJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL21vbnRzZXJyYXQvbW9udHNlcnJhdC12MjMtbGF0aW4tcmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi9mb250cy9tb250c2VycmF0L21vbnRzZXJyYXQtdjIzLWxhdGluLXJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi9mb250cy9tb250c2VycmF0L21vbnRzZXJyYXQtdjIzLWxhdGluLWl0YWxpYy53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcIi4vZm9udHMvbW9udHNlcnJhdC9tb250c2VycmF0LXYyMy1sYXRpbi1pdGFsaWMud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fID0gbmV3IFVSTChcIi4vZm9udHMvbW9udHNlcnJhdC9tb250c2VycmF0LXYyMy1sYXRpbi1pdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1sb2dvLWNvbG9yOiByZ2IoMTc0LCAyMjEsIDMxKTtcXG4gIC0tc2VjdGlvbi1ib3gtYm9yZGVyLWNvbG9yOiByZ2IoMTE0LCAyMzIsIDExNCk7XFxuICAtLW1lbnUtc2VjdGlvbi1oZWFkaW5nLWNvbG9yOiByZ2IoMjMwLCA1OCwgMTgxKTtcXG4gIC0taGlnaGxpZ2h0LWNvbG9yOnJnYigyNDYsIDExOCwgMjcpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9ub3Rvbic7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdEl0YWxpYyc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fICsgXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcblxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JzsgIFxcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OmZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6ICdNb25vdG9uJztcXG4gIGZvbnQtc2l6ZTo0MnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVlbTtcXG4gIG1hcmdpbi1ib3R0b206MTBweDtcXG4gIGNvbG9yOnJnYigxNzQsIDIyMSwgMzEpXFxufVxcblxcbi5uYXZfX2xpc3Qge1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246cm93O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTozMHB4O1xcbn1cXG5cXG4ubmF2X19pdGVtIHtcXG4gIGZvbnQtc2l6ZToyMHB4O1xcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMTBweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5hYm91dHAge1xcbiAgZm9udC1zaXplOjE4cHg7XFxuICB3aWR0aDo0NjBweDtcXG4gIGxpbmUtaGVpZ2h0OjNjaDtcXG59XFxuXFxuXFxuLmhlbGxvIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LWZhbWlseTogJ015Rm9udCc7XFxufVxcblxcbi5pbWFnZWJsb2NrIHtcXG4gIGRpc3BsYXk6YmxvY2s7XFxuICB3aWR0aDo0NjBweDtcXG59XFxuXFxuLnNlY3Rpb25ib3gge1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgYm9yZGVyLWNvbG9yOnJnYigxMTQsIDIzMiwgMTE0KTtcXG4gIGJvcmRlci13aWR0aDoxcHg7XFxuICBib3JkZXItc3R5bGU6c29saWQ7XFxuICBwYWRkaW5nOjMwcHg7XFxuICB3aWR0aDo3NjBweDtcXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICBtYXJnaW4tdG9wOjEwcHg7XFxuICBtYXJnaW4tYm90dG9tOjEwcHg7XFxuICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxufVxcblxcbi5tZW51aXRlbSB7XFxuICBkaXNwbGF5OmdyaWQ7XFxuICB3aWR0aDo0MzBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2NoIG1heC1jb250ZW50IDJjaDtcXG4gIG1hcmdpbi1ib3R0b206NDBweDtcXG59XFxuXFxuLm1lbnVpdGVtbmFtZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBncmlkLWNvbHVtbjogMSAvIDIgO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgYWxpZ24tc2VsZjpjZW50ZXI7XFxufVxcblxcbi5tZW51aXRlbXByaWNlIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMiA7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYWxpZ24tc2VsZjpjZW50ZXI7XFxufVxcblxcbi5tZW51aXRlbWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdEl0YWxpYyc7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBncmlkLWNvbHVtbjogMSAvIDMgO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4ubWVudWl0ZW1zeW1ib2xzIHtcXG4gIGFsaWduLXNlbGY6Y2VudGVyO1xcbiAgZGlzcGxheTppbmxpbmU7XFxuICBtYXJnaW4tcmlnaHQ6M3B4O1xcbn1cXG5cXG4ubWVudXN5bWJvbHNyb3cge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzIDtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLmdyaWRpdGVtIHtcXG4gIHBhZGRpbmc6MHB4O1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6MzNweDtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOjI2cHg7XFxufVxcblxcbmxpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnVzZWN0aW9uIHtcXG4gIGZvbnQtZmFtaWx5Ok1vbm90b247XFxuICBjb2xvcjpyZ2IoMjMwLCA1OCwgMTgxKTtcXG59XFxuXFxuLm1lbnVjYXRlZ29yeSB7XFxuICBjb2xvcjpibGFjaztcXG59XFxuXFxuLm1lbnVrZXkge1xcbiAgZm9udC1zaXplOjE2cHg7XFxuICBhbGlnbi1zZWxmOmZsZXgtZW5kO1xcbiAgYm9yZGVyLWNvbG9yOnJnYigxOTMsIDIxOCwgMjQ0KTtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYm9yZGVyLXN0eWxlOmRhc2hlZDtcXG4gIHBhZGRpbmc6NXB4O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjQ1LCAyNDkpOyAqL1xcbn1cXG5cXG4ua2V5cm93IHtcXG4gIHBhZGRpbmc6NHB4O1xcbiAgbWFyZ2luOjBweDtcXG59XFxuXFxuLmZvb3RlcmJveCB7XFxuICBkaXNwbGF5OmZsZXg7XFxuICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xcbiAgYm9yZGVyLWNvbG9yOnJnYigxMTQsIDIzMiwgMTE0KTtcXG4gIGJvcmRlci13aWR0aDoxcHg7XFxuICBib3JkZXItc3R5bGU6c29saWQ7XFxuICB3aWR0aDo3NjBweDtcXG4gIG1hcmdpbi10b3A6MTBweDtcXG4gIG1hcmdpbi1ib3R0b206MTBweDtcXG4gIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDIwcHggMzBweCAyMHB4IDMwcHg7XFxufVxcblxcbi5mb290ZXJ0aXRsZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGFsaWduLXNlbGY6ZmxleC1zdGFydDtcXG4gIG1hcmdpbi1ib3R0b206OHB4O1xcbn1cXG5cXG4uZm9vdGVyZGVzY3JpcHRpb24ge1xcbiAgYWxpZ24tc2VsZjpmbGV4LXN0YXJ0O1xcblxcbiAgbWFyZ2luLWJvdHRvbTo0cHg7XFxufVxcblxcbi5mb290ZXJ0aXRsZSwgLmZvb3RlcmRlc2NyaXB0aW9uIHtcXG4gIGNvbG9yOnJlZDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcXG4gIGNvbG9yOmluaGVyaXQ7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IHZhcigtLWhpZ2hsaWdodC1jb2xvcikgd2F2eSB1bmRlcmxpbmU7XFxuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAycHg7XFxuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDRweDtcXG59XFxuXFxuXFxuLmZvb3RlcmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLXNlbGY6ZmxleC1zdGFydDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLCtCQUErQjtFQUMvQiw4Q0FBOEM7RUFDOUMsK0NBQStDO0VBQy9DLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQjswREFDNEM7RUFDNUMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QjswREFDOEQ7RUFDOUQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qjs7OERBRStFO0VBQy9FLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0I7OzhEQUU4RTtFQUM5RSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOzs7O0FBSUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLDhCQUE4QjtFQUM5Qix1Q0FBdUM7RUFDdkMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtJQUNqQixlQUFlO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCOztFQUVyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzREFBc0Q7RUFDdEQsOEJBQThCO0VBQzlCLDBCQUEwQjtBQUM1Qjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWxvZ28tY29sb3I6IHJnYigxNzQsIDIyMSwgMzEpO1xcbiAgLS1zZWN0aW9uLWJveC1ib3JkZXItY29sb3I6IHJnYigxMTQsIDIzMiwgMTE0KTtcXG4gIC0tbWVudS1zZWN0aW9uLWhlYWRpbmctY29sb3I6IHJnYigyMzAsIDU4LCAxODEpO1xcbiAgLS1oaWdobGlnaHQtY29sb3I6cmdiKDI0NiwgMTE4LCAyNyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgc3JjOiB1cmwoJy4vZm9udHMvbXktZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgdXJsKCcuL2ZvbnRzL215LWZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ01vbm90b24nO1xcbiAgc3JjOiB1cmwoJy4vZm9udHMvbW9ub3Rvbi12MTMtbGF0aW4tcmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgdXJsKCcuL2ZvbnRzL21vbm90b24tdjEzLWxhdGluLXJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgc3JjOiB1cmwoJy4vZm9udHMvbW9udHNlcnJhdC9tb250c2VycmF0LXYyMy1sYXRpbi1yZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICB1cmwoJy4vZm9udHMvbW9udHNlcnJhdC9tb250c2VycmF0LXYyMy1sYXRpbi1yZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgdXJsKCcuL2ZvbnRzL21vbnRzZXJyYXQvbW9udHNlcnJhdC12MjMtbGF0aW4tcmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdEl0YWxpYyc7XFxuICBzcmM6IHVybCgnLi9mb250cy9tb250c2VycmF0L21vbnRzZXJyYXQtdjIzLWxhdGluLWl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgdXJsKCcuL2ZvbnRzL21vbnRzZXJyYXQvbW9udHNlcnJhdC12MjMtbGF0aW4taXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgdXJsKCcuL2ZvbnRzL21vbnRzZXJyYXQvbW9udHNlcnJhdC12MjMtbGF0aW4taXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcblxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JzsgIFxcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OmZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6ICdNb25vdG9uJztcXG4gIGZvbnQtc2l6ZTo0MnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVlbTtcXG4gIG1hcmdpbi1ib3R0b206MTBweDtcXG4gIGNvbG9yOnJnYigxNzQsIDIyMSwgMzEpXFxufVxcblxcbi5uYXZfX2xpc3Qge1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246cm93O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTozMHB4O1xcbn1cXG5cXG4ubmF2X19pdGVtIHtcXG4gIGZvbnQtc2l6ZToyMHB4O1xcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMTBweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5hYm91dHAge1xcbiAgZm9udC1zaXplOjE4cHg7XFxuICB3aWR0aDo0NjBweDtcXG4gIGxpbmUtaGVpZ2h0OjNjaDtcXG59XFxuXFxuXFxuLmhlbGxvIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LWZhbWlseTogJ015Rm9udCc7XFxufVxcblxcbi5pbWFnZWJsb2NrIHtcXG4gIGRpc3BsYXk6YmxvY2s7XFxuICB3aWR0aDo0NjBweDtcXG59XFxuXFxuLnNlY3Rpb25ib3gge1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgYm9yZGVyLWNvbG9yOnJnYigxMTQsIDIzMiwgMTE0KTtcXG4gIGJvcmRlci13aWR0aDoxcHg7XFxuICBib3JkZXItc3R5bGU6c29saWQ7XFxuICBwYWRkaW5nOjMwcHg7XFxuICB3aWR0aDo3NjBweDtcXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICBtYXJnaW4tdG9wOjEwcHg7XFxuICBtYXJnaW4tYm90dG9tOjEwcHg7XFxuICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxufVxcblxcbi5tZW51aXRlbSB7XFxuICBkaXNwbGF5OmdyaWQ7XFxuICB3aWR0aDo0MzBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2NoIG1heC1jb250ZW50IDJjaDtcXG4gIG1hcmdpbi1ib3R0b206NDBweDtcXG59XFxuXFxuLm1lbnVpdGVtbmFtZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBncmlkLWNvbHVtbjogMSAvIDIgO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgYWxpZ24tc2VsZjpjZW50ZXI7XFxufVxcblxcbi5tZW51aXRlbXByaWNlIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMiA7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYWxpZ24tc2VsZjpjZW50ZXI7XFxufVxcblxcbi5tZW51aXRlbWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdEl0YWxpYyc7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBncmlkLWNvbHVtbjogMSAvIDMgO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4ubWVudWl0ZW1zeW1ib2xzIHtcXG4gIGFsaWduLXNlbGY6Y2VudGVyO1xcbiAgZGlzcGxheTppbmxpbmU7XFxuICBtYXJnaW4tcmlnaHQ6M3B4O1xcbn1cXG5cXG4ubWVudXN5bWJvbHNyb3cge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzIDtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLmdyaWRpdGVtIHtcXG4gIHBhZGRpbmc6MHB4O1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6MzNweDtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOjI2cHg7XFxufVxcblxcbmxpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnVzZWN0aW9uIHtcXG4gIGZvbnQtZmFtaWx5Ok1vbm90b247XFxuICBjb2xvcjpyZ2IoMjMwLCA1OCwgMTgxKTtcXG59XFxuXFxuLm1lbnVjYXRlZ29yeSB7XFxuICBjb2xvcjpibGFjaztcXG59XFxuXFxuLm1lbnVrZXkge1xcbiAgZm9udC1zaXplOjE2cHg7XFxuICBhbGlnbi1zZWxmOmZsZXgtZW5kO1xcbiAgYm9yZGVyLWNvbG9yOnJnYigxOTMsIDIxOCwgMjQ0KTtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYm9yZGVyLXN0eWxlOmRhc2hlZDtcXG4gIHBhZGRpbmc6NXB4O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjQ1LCAyNDkpOyAqL1xcbn1cXG5cXG4ua2V5cm93IHtcXG4gIHBhZGRpbmc6NHB4O1xcbiAgbWFyZ2luOjBweDtcXG59XFxuXFxuLmZvb3RlcmJveCB7XFxuICBkaXNwbGF5OmZsZXg7XFxuICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xcbiAgYm9yZGVyLWNvbG9yOnJnYigxMTQsIDIzMiwgMTE0KTtcXG4gIGJvcmRlci13aWR0aDoxcHg7XFxuICBib3JkZXItc3R5bGU6c29saWQ7XFxuICB3aWR0aDo3NjBweDtcXG4gIG1hcmdpbi10b3A6MTBweDtcXG4gIG1hcmdpbi1ib3R0b206MTBweDtcXG4gIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDIwcHggMzBweCAyMHB4IDMwcHg7XFxufVxcblxcbi5mb290ZXJ0aXRsZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGFsaWduLXNlbGY6ZmxleC1zdGFydDtcXG4gIG1hcmdpbi1ib3R0b206OHB4O1xcbn1cXG5cXG4uZm9vdGVyZGVzY3JpcHRpb24ge1xcbiAgYWxpZ24tc2VsZjpmbGV4LXN0YXJ0O1xcblxcbiAgbWFyZ2luLWJvdHRvbTo0cHg7XFxufVxcblxcbi5mb290ZXJ0aXRsZSwgLmZvb3RlcmRlc2NyaXB0aW9uIHtcXG4gIGNvbG9yOnJlZDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcXG4gIGNvbG9yOmluaGVyaXQ7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IHZhcigtLWhpZ2hsaWdodC1jb2xvcikgd2F2eSB1bmRlcmxpbmU7XFxuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAycHg7XFxuICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDRweDtcXG59XFxuXFxuXFxuLmZvb3RlcmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLXNlbGY6ZmxleC1zdGFydDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvcmVzdGF1cmFudHBhZ2UvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcGFnZUxvYWQgfSBmcm9tICcuL3BhZ2Vsb2FkLmpzJ1xuaW1wb3J0IHsgYWJvdXQgfSBmcm9tICcuL2Fib3V0LmpzJztcbmltcG9ydCB7IG1lbnUgfSBmcm9tICcuL21lbnUuanMnO1xuLy8gaW1wb3J0IHsgY29udGFjdCB9IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbnBhZ2VMb2FkKCk7XG5cbm5hdmxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIC8vIHdoaWNoIG5hdiBpdGVtIHdhcyBjbGlja2VkLCBtZW51LCBhYm91dCwgb3IgY29udGFjdFxuICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAvLyByZW1vdmUgJ25hdicgZnJvbSBpZCBvZiBpdGVtIGNsaWNrZWQgLSBzbyBtZW51bmF2IHdvdWxkIGJlY29tZSBtZW51XG4gIGxldCB0YWIgPSB0YXJnZXQuaWQuc2xpY2UoMCwgLTMpO1xuICBjb25zb2xlLmxvZyh0YWIpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBmb290ZXJib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyYm94Jyk7XG4gIGNvbnN0IGFib3V0bmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0bmF2Jyk7XG4gIGNvbnN0IG1lbnVuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudW5hdicpO1xuICBjb25zdCBvbGRDaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uYm94Jyk7XG4gIC8vIGNvbnRlbnQucmVtb3ZlQ2hpbGQob2xkQ2hpbGQpO1xuXG4gIGlmICh0YWIgPT09ICdhYm91dCcpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKG9sZENoaWxkKTtcbiAgICBjb250ZW50Lmluc2VydEJlZm9yZShhYm91dCgpLCBmb290ZXJib3gpO1xuICAgIGFib3V0bmF2LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgbWVudW5hdi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICB9IGVsc2UgaWYgKHRhYiA9PT0gJ21lbnUnKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChvbGRDaGlsZCk7XG4gICAgY29udGVudC5pbnNlcnRCZWZvcmUobWVudSgpLCBmb290ZXJib3gpO1xuICAgIGFib3V0bmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgbWVudW5hdi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAvLyB9IGVsc2UgaWYgKHRhYiA9PT0gJ2NvbnRhY3QnKSB7XG4gIC8vICAgY29udGVudC5pbnNlcnRCZWZvcmUoY29udGFjdCgpLCBmb290ZXJib3gpO1xuICB9XG59KTtcblxuXG4iXSwibmFtZXMiOlsiUGlja2xlcyIsImFib3V0IiwiYWJvdXRib3giLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpZCIsInBhcmFncmFwaDEiLCJwYXJhZ3JhcGgyIiwidGV4dENvbnRlbnQiLCJteVBpY2tsZXMiLCJJbWFnZSIsInNyYyIsImFwcGVuZENoaWxkIiwiZm9vdGVyIiwiZm9vdGVyYm94IiwiZm9vdGVyaG91cnMiLCJmb290ZXJhZGRyZXNzIiwiZm9vdGVyY29udGFjdCIsImZvb3RlcmhvdXJzdGl0bGUiLCJpbm5lckhUTUwiLCJmb290ZXJob3Vyc2Rlc2NyaXB0aW9uIiwiZm9vdGVyYWRkcmVzc3RpdGxlIiwiZm9vdGVyYWRkcmVzc2Rlc2NyaXB0aW9uMSIsImZvb3RlcmFkZHJlc3NkZXNjcmlwdGlvbjIiLCJmb290ZXJjb250YWN0dGl0bGUiLCJmb290ZXJjb250YWN0ZGVzY3JpcHRpb24iLCJoZWFkZXIiLCJtZW51IiwibWVudWJveCIsInZlZ2FudiIsImdmIiwibHVuY2hoZWFkaW5nIiwic2FsYWRzIiwicmFkaXNoc2FsYWQiLCJyYWRpc2h0aXRsZSIsInJhZGlzaGRlc2NyaXB0aW9uIiwicmFkaXNocHJpY2UiLCJyYWRpc2htZW51c3ltYm9sc3JvdyIsInB1cnBsZXNhbGFkIiwicHVycGxldGl0bGUiLCJwdXJwbGVkZXNjcmlwdGlvbiIsInB1cnBsZXByaWNlIiwicHVycGxlbWVudXN5bWJvbHNyb3ciLCJ2ZWdhbnYyIiwiY2xvbmVOb2RlIiwiZ2YyIiwic2FuZHdpY2hlcyIsInZlZ3NhbmR3aWNoIiwidmVnc2FuZHdpY2h0aXRsZSIsInZlZ3NhbmR3aWNoZGVzY3JpcHRpb24iLCJ2ZWdzYW5kd2ljaHByaWNlIiwidmVnbWVudXN5bWJvbHNyb3ciLCJ2ZWdhbnYzIiwiY2hpcHNhbmR3aWNoIiwiY2hpcHNhbmR3aWNodGl0bGUiLCJjaGlwc2FuZHdpY2hkZXNjcmlwdGlvbiIsImNoaXBzYW5kd2ljaHByaWNlIiwiY2hpcG1lbnVzeW1ib2xzcm93IiwidmVnYW52NCIsIm1lbnVrZXkiLCJrZXlyb3cxIiwiaW5uZXJUZXh0Iiwia2V5cm93MiIsIm5hdiIsIm5hdkxpc3QiLCJhYm91dG5hdiIsIm1lbnVuYXYiLCJjb250YWN0bmF2IiwiYVRhZyIsInNldEF0dHJpYnV0ZSIsInBhZ2VMb2FkIiwiY29udGVudCIsImdldEVsZW1lbnRCeUlkIiwibmF2bGlzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInRhYiIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsIm9sZENoaWxkIiwicXVlcnlTZWxlY3RvciIsInJlbW92ZUNoaWxkIiwiaW5zZXJ0QmVmb3JlIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==