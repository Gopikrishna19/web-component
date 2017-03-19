(() => {

  'use strict';

  const createPerson = person => {

    const templatePerson = document.querySelector('template.person');
    const clonePerson = document.importNode(templatePerson.content, true);

    clonePerson.querySelector('.name').innerHTML = `${person.first_name} ${person.last_name}`;

    return clonePerson;

  };

  fetch('data.json')
    .then(response => response.json())
    .then(list => {

      list.forEach(person => {

        document.body.appendChild(createPerson(person));

      });

      const persons = document.createElement('dir-persons');

      persons.list = list;

      document.body.appendChild(persons);

    });

})();
