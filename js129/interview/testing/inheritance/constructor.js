function Animal(animal, name) {
  this.animal = animal;
  this.name = name;
  this.call = 'Hi';
}

Animal.prototype.greeting = function() {
  console.log(`${this.call}, my name is ${this.name} and I am a ${this.animal}.`);
};

function Cat(animal, name) {
  Animal.call(this, animal, name);
  this.call = 'Meow';
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;


let animal = new Animal('cat', 'Garfield');
animal.greeting();
// Hi, my name is Garfield and I am a cat.

let cat = new Cat('siamese cat', 'hello kity');
cat.greeting();
// Meow, my name is hello kity and I am a siamese cat.


console.log(cat instanceof Cat); // true
console.log(cat instanceof Animal); // true
console.log(animal instanceof Animal); // true
