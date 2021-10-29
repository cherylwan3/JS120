class Animal {
  constructor(name, animal) {
    this.name = name;
    this.animal = animal;
  }

  greeting() {
    return `I'm a ${this.animal}. My name is ${this.name}.`;
  }
}

class Cat extends Animal {
  constructor(name, animal, call) {
    super(name, animal);
    this.call = call;
  }

  greeting() {
    return `${this.call} I'm a ${this.animal}. My name is ${this.name}.`;
  }
}


let cat = new Cat('Hello Kitty', 'Japanese Cat', 'Meow!');
console.log(cat.greeting());
console.log(cat instanceof Cat);
console.log(cat instanceof Animal);
console.log(Object.getPrototypeOf(cat) === Cat.prototype);
console.log(Cat.prototype.isPrototypeOf(cat));