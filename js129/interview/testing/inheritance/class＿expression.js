let Animal = class {
  constructor(animal, name) {
    this.animal = animal;
    this.name = name;
    this.call = 'Hi';
  }

  greeting() {
    console.log(`${this.call}, my name is ${this.name} and I am a ${this.animal}.`);
  }
};

let Cat = class extends Animal {
  constructor(animal, name) {
    super(animal, name);
    this.call = 'Meow';
  }
};

let cat = new Cat('kitty', 'alice');
cat.greeting();
// Meow, my name is alice and I am a kitty.


console.log(cat instanceof Cat); // true
console.log(cat instanceof Animal); // true
console.log(cat.constructor === Cat); // true
console.log(Object.getPrototypeOf(cat) === Cat.prototype); // true
console.log(Cat.prototype.isPrototypeOf(cat)); // true

