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
  footercontact.classList.add('footercolumn');

  // const footergrid = document.createElement('div');
  // footergrid.classList.add('footergrid');

  const footerhourstitle = document.createElement('div');
  footerhourstitle.classList.add('footerhourstitle', 'footertitle');
  footerhourstitle.innerHTML = ('Hours');

  const footerhoursdescription = document.createElement('div');
  footerhoursdescription.classList.add('footerhoursdescription', 'footerdescription');
  footerhoursdescription.innerHTML = ('M-F: 7:30am - 8pm');

  const footeraddresstitle = document.createElement('div');
  footeraddresstitle.classList.add('footeraddresstitle', 'footertitle');
  footeraddresstitle.innerHTML = ('Address');

  const footeraddressdescription1 = document.createElement('div');
  footeraddressdescription1.classList.add('footeraddressdescription', 'footerdescription');
  footeraddressdescription1.innerHTML = ('123 Colorado Blvd');

  const footeraddressdescription2 = document.createElement('div');
  footeraddressdescription2.classList.add('footeraddressdescription', 'footerdescription');
  footeraddressdescription2.innerHTML = ('Sierra Madre, CA 11223');

  const footercontacttitle = document.createElement('div');
  footercontacttitle.classList.add('footercontacttitle', 'footertitle');
  footercontacttitle.innerHTML = ('Contact');

  const footercontactdescription = document.createElement('div');
  footercontactdescription.classList.add('footercontactdescription', 'footerdescription');
  footercontactdescription.innerHTML = ('thepickle @ thepickle dot com');

  // footergrid.appendChild(footerhourstitle);
  // footergrid.appendChild(footerhoursdescription);
  // footergrid.appendChild(footeraddresstitle);
  // footergrid.appendChild(footeraddressdescription);
  // footergrid.appendChild(footercontacttitle);
  // footergrid.appendChild(footercontactdescription);

  // footerbox.appendChild(footergrid);

  footerhours.appendChild(footerhourstitle);
  footerhours.appendChild(footerhoursdescription);
  footeraddress.appendChild(footeraddresstitle)
  footeraddress.appendChild(footeraddressdescription1)
  footeraddress.appendChild(footeraddressdescription2)
  footercontact.appendChild(footercontacttitle)
  footercontact.appendChild(footercontactdescription)

  footerbox.appendChild(footerhours);
  footerbox.appendChild(footeraddress);
  footerbox.appendChild(footercontact);
  


  return footerbox;
}

export { footer };
