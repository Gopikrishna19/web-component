(() => {

  'use strict';

  const createPerson = person => {

    const templatePerson = document.querySelector('template.person');
    const clonePerson = document.importNode(templatePerson.content, true);

    return clonePerson;

  };

  fetch('data.json')
    .then(response => response.json())
    .then(data => {

      data.forEach(person => {

        document.body.appendChild(createPerson(person));

      })

    })

})();
