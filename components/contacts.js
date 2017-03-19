(() => {

  'use strict';

  const templatePerson = document.querySelector('template.contacts');
  const Contacts = Object.create(HTMLElement.prototype);

  Contacts.createdCallback = function () {
    const root = this.createShadowRoot();
    const clone = document.importNode(templatePerson.content, true);

    root.appendChild(clone)
  };

  document.registerElement('dir-contacts', {
    prototype: Contacts
  });

})();
