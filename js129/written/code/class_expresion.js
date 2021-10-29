let Animal = class {
  constructor(name, animal) {
    this.name = name;
    this.animal = animal;
  }

  greeting() {
    return `I'm a ${this.animal}. My name is ${this.name}.`;
  }
};

let Cat = class extends Animal {
  constructor(name, animal, call) {
    super(name, animal);
    this.call = call;
  }

  greeting() {
    return `${this.call} I'm a ${this.animal}. My name is ${this.name}.`;
  }
};


let cat = new Cat('Hello Kitty', 'Japanese Cat', 'Meow!');
console.log(cat.greeting());
console.log(cat instanceof Cat); // true
console.log(cat instanceof Animal); // true
console.log(Object.getPrototypeOf(cat) === Cat.prototype); // true
console.log(Cat.prototype.isPrototypeOf(cat)); // true