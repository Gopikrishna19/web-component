(() => {

  'use strict';

  const createPerson = person => {
    const templatePerson = document.querySelector('template.person');
    const clonePerson = document.importNode(templatePerson.content, true);

    clonePerson.querySelector('.name').innerHTML = `${person.first_name} ${person.last_name}`;

    return clonePerson;
  };

  const fetchPerson = function () {
    const src = this.getAttribute('src');

    fetch(src)
      .then(response => response.json())
      .then(list =>
        list.forEach(person =>
          this.appendChild(createPerson(person))
        )
      );
  };

  const Persons = Object.create(HTMLElement.prototype);

  Persons.createdCallback = function () {
    fetchPerson.call(this);
  };

  Persons.attributeChangedCallback = function (name) {
    if (name === 'src') {
      fetchPerson.call(this);
    }
  };

  document.registerElement('dir-persons', {
    prototype: Persons
  });

})();
