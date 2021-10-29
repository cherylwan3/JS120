function Animal(name, animal) {
  this.name = name;
  this.animal = animal;
}

Animal.prototype.greeting = function() {
  return `I'm a ${this.animal}. My name is ${this.name}.`;
};

function Cat(name, animal) {
  Animal.call(this, name, animal);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.greeting = function() {
  return `Meow! I'm a ${this.animal}. My name is ${this.name}.`;
};

let cat = new Cat('Hello Kitty', 'Japanese Cat');
console.log(cat.greeting());
console.log(cat instanceof Cat);
console.log(cat instanceof Animal);