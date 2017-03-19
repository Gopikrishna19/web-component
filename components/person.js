(() => {

  'use strict';

  const createPerson = () => {
    const templatePerson = document.querySelector('template.person');

    return document.importNode(templatePerson.content, true);
  };

  const Person = Object.create(HTMLElement.prototype);

  Person.createdCallback = function () {
    this.appendChild(createPerson())
  };

  Person.attributeChangedCallback = function (name, oldValue, newValue) {
    let query = `.${name}`;

    if(/age|gender|email/.test(name)) {
      query += ' .value';
    }

    const element = this.querySelector(query);

    if(element) {
      element.innerHTML = newValue;
    }
  };

  document.registerElement('dir-person', {
    prototype: Person
  });

})();
