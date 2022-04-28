function menu() {
  const menubox = document.createElement('div');
  menubox.classList.add('sectionbox');

    // SYMBOLS
    const veganv = document.createElement('p');
    veganv.innerHTML = ('V ');
    veganv.classList.add('menuitemsymbols','griditem');
    const gf = document.createElement('p');
    gf.innerHTML = ('GF ');
    gf.classList.add('menuitemsymbols','griditem');

  // LUNCH
  const lunchheading = document.createElement('h2');
  lunchheading.innerHTML = ('Lunch');
  lunchheading.classList.add('menusection');

  // SALADS
  const salads = document.createElement('h3');
  salads.innerHTML = ('Salads');
  salads.classList.add('menucategory');

  // RADISH DIV
  const radishsalad = document.createElement('div');
  radishsalad.classList.add('menuitem');
  // RADISH TITLE
  const radishtitle = document.createElement('p');
  radishtitle.innerHTML = ('Radish Salad');
  radishtitle.classList.add('menuitemname','griditem');
  // RADISH DESCRIPTION
  const radishdescription = document.createElement('p');
  radishdescription.innerHTML = ('Black Spanish radish, French radish, watermelon radish, pickled fennel, endive, sweet corn, miso-lime vinaigrette.');
  radishdescription.classList.add('menuitemdescription','griditem');
  // RADISH PRICE
  const radishprice = document.createElement('p');
  radishprice.innerHTML = ('$9');
  radishprice.classList.add('menuitemprice','griditem')
  radishsalad.appendChild(radishtitle);
  radishsalad.appendChild(radishdescription);
  radishsalad.appendChild(radishprice);

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
    // RADISH PRICE
    const purpleprice = document.createElement('p');
    purpleprice.innerHTML = ('$9');
    purpleprice.classList.add('menuitemprice','griditem')
    purplesalad.appendChild(purpletitle);
    purplesalad.appendChild(purpledescription);
    purplesalad.appendChild(purpleprice);


  

  // SANDWICHESs
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
    vegsandwich.appendChild(vegsandwichtitle);
    vegsandwich.appendChild(vegsandwichdescription);
    vegsandwich.appendChild(vegsandwichprice);
  
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
      chipsandwichprice.innerHTML = ('$9');
      chipsandwichprice.classList.add('menuitemprice','griditem')

      chipsandwich.appendChild(chipsandwichtitle);
      chipsandwich.appendChild(veganv);
      chipsandwich.appendChild(chipsandwichdescription);
      chipsandwich.appendChild(chipsandwichprice);
      chipsandwich.appendChild(veganv);
      chipsandwich.appendChild(gf);
      

  menubox.appendChild(lunchheading);
  menubox.appendChild(salads);
  menubox.appendChild(radishsalad);
  menubox.appendChild(purplesalad);
  menubox.appendChild(sandwiches);
  menubox.appendChild(vegsandwich);
  menubox.appendChild(chipsandwich);

  return menubox;
}

export { menu };