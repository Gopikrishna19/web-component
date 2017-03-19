(() => {

  'use strict';

  const templatePerson = document.querySelector('template.person');
  const Person = Object.create(HTMLElement.prototype);

  Person.createdCallback = function () {
    const root = this.createShadowRoot();
    const clone = document.importNode(templatePerson.content, true);

    root.appendChild(clone)
  };

  Person.attributeChangedCallback = function (name, oldValue, newValue) {
    let query = `.${name}`;

    if (/age|gender|email/.test(name)) {
      query += ' .value';
    }

    const element = this.shadowRoot.querySelector(query);

    if (element) {
      element.innerHTML = newValue;
    }
  };

  document.registerElement('dir-person', {
    prototype: Person
  });

})();
