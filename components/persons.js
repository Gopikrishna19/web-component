(() => {

  'use strict';

  const Persons = Object.create(HTMLElement.prototype);

  Persons.createdCallback = function (...args) {
    console.log('created', ...args);
  };

  Persons.attributeChangedCallback = function (...args) {
    console.log('attribute changed', ...args);
  };

  Persons.attachedCallback = function (...args) {
    console.log('attached', ...args);
    console.log(this.list);
  };

  Persons.detachedCallback = function (...args) {
    console.log('detached', ...args);
  };

  document.registerElement('dir-persons', {
    prototype: Persons
  });

})();
