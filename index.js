(() => {

  'use strict';

  const tmplPerson = document.querySelector('template.person');
  const clonePerson = document.importNode(tmplPerson.content, true);

  document.body.appendChild(clonePerson)

})();
