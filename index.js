function registerPet() {

  var template = document.querySelector('template.pet-template');
  var Pet = Object.create(HTMLDivElement.prototype);

  Pet.createdCallback = function () {

    var root = this.createShadowRoot();
    var clone = document.importNode(template.content, true);

    clone.querySelector('.type').innerHTML = this.getAttribute('type');
    clone.querySelector('.name').innerHTML = this.getAttribute('name');

    root.appendChild(clone);

  };

  Pet.attributeChangedCallback = function (attr, oldVal, newVal) {

    this.shadowRoot.querySelector(`.${attr}`).innerHTML = newVal;
  };

  document.registerElement('my-pet', {
    prototype: Pet
  });
}

function registerPets() {

  var template = document.querySelector('template.pets-template');
  var Pets = Object.create(HTMLDivElement.prototype);

  Pets.createdCallback = function () {

    var root = this.createShadowRoot();
    var pets = eval(this.getAttribute('pets'));

    pets.forEach(pet => {

      var petEl = document.createElement('my-pet');

      petEl.setAttribute('type', pet.type);
      petEl.setAttribute('name', pet.name);

      root.appendChild(petEl);
    });

  };

  document.registerElement('my-pets', {
    prototype: Pets
  });
}

registerPet();
registerPets();
