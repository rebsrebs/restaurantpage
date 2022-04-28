function footer() {
  const footerbox = document.createElement('div');
  footerbox.classList.add('sectionbox');

  const footergrid = document.createElement('div');
  footergrid.classList.add('footergrid');

  const footerhourstitle = document.createElement('div');
  footerhourstitle.classList.add('footerhourstitle', 'footertitle');
  footerhourstitle.innerHTML = ('Hours');

  const footerhoursdescription = document.createElement('div');
  footerhoursdescription.classList.add('footerhoursdescription', 'footerdescription');
  footerhoursdescription.innerHTML = ('M-F: 12pm - 8pm');

  const footeraddresstitle = document.createElement('div');
  footeraddresstitle.classList.add('footeraddresstitle', 'footertitle');
  footeraddresstitle.innerHTML = ('Address');

  const footeraddressdescription = document.createElement('div');
  footeraddressdescription.classList.add('footeraddressdescription', 'footerdescription');
  footeraddressdescription.innerHTML = ('123 Colorado Blvd');

  const footercontacttitle = document.createElement('div');
  footercontacttitle.classList.add('footercontacttitle', 'footertitle');
  footercontacttitle.innerHTML = ('Contact');

  const footercontactdescription = document.createElement('div');
  footercontactdescription.classList.add('footercontactdescription', 'footerdescription');
  footercontactdescription.innerHTML = ('thepickle @ thepickle dot com');

  footergrid.appendChild(footerhourstitle);
  footergrid.appendChild(footerhoursdescription);
  footergrid.appendChild(footeraddresstitle);
  footergrid.appendChild(footeraddressdescription);
  footergrid.appendChild(footercontacttitle);
  footergrid.appendChild(footercontactdescription);

  footerbox.appendChild(footergrid);

  return footerbox;
}

export { footer };
