(() => {

  'use strict';

  const createPerson = person => {
    const personElement = document.createElement('dir-person');

    personElement.setAttribute('first-name', person.first_name);
    personElement.setAttribute('last-name', person.last_name);
    personElement.setAttribute('email', person.email);
    personElement.setAttribute('gender', person.gender);
    personElement.setAttribute('age', person.age);

    return personElement
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
