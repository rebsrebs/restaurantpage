function menu() {
  const menubox = document.createElement('div');
  menubox.classList.add('sectionbox');
  menubox.id = 'menubox';

  // SYMBOLS
  // vegan
  const veganv = document.createElement('p');
  veganv.textContent = ('V ');
  veganv.classList.add('menuitemsymbols');
  // gluten free
  const gf = document.createElement('p');
  gf.textContent = ('GF ');
  gf.classList.add('menuitemsymbols');

  // LUNCH
  const lunchheading = document.createElement('h2');
  lunchheading.textContent = ('Lunch');
  lunchheading.classList.add('menusection');

  // SALADS
  const salads = document.createElement('h3');
  salads.textContent = ('Salads');
  salads.classList.add('menucategory');

  // RADISH DIV
  const radishsalad = document.createElement('div');
  radishsalad.classList.add('menuitem');
  // RADISH TITLE
  const radishtitle = document.createElement('p');
  radishtitle.textContent = ('Radish Salad');
  radishtitle.classList.add('menuitemname','griditem');
  // RADISH DESCRIPTION
  const radishdescription = document.createElement('p');
  radishdescription.textContent = ('Black Spanish radish, French radish, watermelon radish, pickled fennel, endive, sweet corn, miso-lime vinaigrette.');
  radishdescription.classList.add('menuitemdescription','griditem');
  // RADISH PRICE
  const radishprice = document.createElement('p');
  radishprice.textContent = ('$9');
  radishprice.classList.add('menuitemprice','griditem')
  // RADISH SYMBOLS
  const radishmenusymbolsrow = document.createElement('div');
  radishmenusymbolsrow.classList.add('menusymbolsrow');

  radishsalad.appendChild(radishtitle);
  radishsalad.appendChild(radishdescription);
  radishsalad.appendChild(radishprice);
  radishsalad.appendChild(radishmenusymbolsrow);
  radishmenusymbolsrow.appendChild(veganv);
  radishmenusymbolsrow.appendChild(gf);

  // PURPLE DIV
  const purplesalad = document.createElement('div');
  purplesalad.classList.add('menuitem');
  // PURPLE TITLE
  const purpletitle = document.createElement('p');
  purpletitle.innerHTML = ('Purple Salad');
  purpletitle.classList.add('menuitemname','griditem');
  // PURPLE DESCRIPTION
  const purpledescription = document.createElement('p');
  purpledescription.innerHTML = ('Purple potato, read leaf lettuce, red slaw, miso eggplant, carrot ginger dressing.');
  purpledescription.classList.add('menuitemdescription','griditem');
  // PURPLE PRICE
  const purpleprice = document.createElement('p');
  purpleprice.innerHTML = ('$11');
  purpleprice.classList.add('menuitemprice','griditem')
  // PURPLE SYMBOLS
  const purplemenusymbolsrow = document.createElement('div');
  purplemenusymbolsrow.classList.add('menusymbolsrow');
  // PURPLEDOM
  purplesalad.appendChild(purpletitle);
  purplesalad.appendChild(purpledescription);
  purplesalad.appendChild(purpleprice);
  purplesalad.appendChild(purplemenusymbolsrow);
  let veganv2 = veganv.cloneNode(true);
  let gf2 = gf.cloneNode(true);
  purplemenusymbolsrow.appendChild(veganv2);
  purplemenusymbolsrow.appendChild(gf2);

  // SANDWICHES
  const sandwiches = document.createElement('h3');
  sandwiches.innerHTML = ('Sandwiches');
  sandwiches.classList.add('menucategory');


  // VEG DIV
  const vegsandwich = document.createElement('div');
  vegsandwich.classList.add('menuitem');
  // VEG TITLE
  const vegsandwichtitle = document.createElement('p');
  vegsandwichtitle.innerHTML = ('Vegetable Sandwich');
  vegsandwichtitle.classList.add('menuitemname','griditem');
  // VEG DESCRIPTION
  const vegsandwichdescription = document.createElement('p');
  vegsandwichdescription.innerHTML = ('Almond manouri cheese, figs, arugula, avocado, lemon, sourdough.');
  vegsandwichdescription.classList.add('menuitemdescription','griditem');
  // VEG PRICE
  const vegsandwichprice = document.createElement('p');
  vegsandwichprice.innerHTML = ('$9');
  vegsandwichprice.classList.add('menuitemprice','griditem')
  // VEG SYMBOLS
  const vegmenusymbolsrow = document.createElement('div');
  vegmenusymbolsrow.classList.add('menusymbolsrow');

  vegsandwich.appendChild(vegsandwichtitle);
  vegsandwich.appendChild(vegsandwichdescription);
  vegsandwich.appendChild(vegsandwichprice);
  vegsandwich.appendChild(vegmenusymbolsrow);
  let veganv3 = veganv.cloneNode(true);
  vegmenusymbolsrow.appendChild(veganv3);
  
  
  // CHIP DIV
  const chipsandwich = document.createElement('div');
  chipsandwich.classList.add('menuitem');
  // CHIP TITLE
  const chipsandwichtitle = document.createElement('p');
  chipsandwichtitle.innerHTML = ('Chip Sandwich');
  chipsandwichtitle.classList.add('menuitemname','griditem');
  // CHIP DESCRIPTION
  const chipsandwichdescription = document.createElement('p');
  chipsandwichdescription.innerHTML = ('Avocado, shiitake bacon, potato chips, pesto, sourdough.');
  chipsandwichdescription.classList.add('menuitemdescription','griditem');
  // CHIP PRICE
  const chipsandwichprice = document.createElement('p');
  chipsandwichprice.innerHTML = ('$10');
  chipsandwichprice.classList.add('menuitemprice','griditem')
  // CHIP SYMBOLS
  const chipmenusymbolsrow = document.createElement('div');
  chipmenusymbolsrow.classList.add('menusymbolsrow');

  chipsandwich.appendChild(chipsandwichtitle);
  chipsandwich.appendChild(chipsandwichdescription);
  chipsandwich.appendChild(chipsandwichprice);
  chipsandwich.appendChild(chipmenusymbolsrow);
  let veganv4 = veganv.cloneNode(true);
  chipmenusymbolsrow.appendChild(veganv4);

  // MENU KEY
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

export { menu };