function contact() {
  const contactbox = document.createElement('div');
  contactbox.classList.add('sectionbox');

  const contactaddress = document.createElement('address');
  contactaddress.classList.add('contactaddress');
  contactaddress.textContent='Here is our contact info';

  contactbox.appendChild(contactaddress);

  return contactbox;
}

export { contact };