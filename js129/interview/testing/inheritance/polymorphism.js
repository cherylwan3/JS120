// polymorphism through inheritance by overriding
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} says hi!`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.call = 'meow';
  }

  speak() {
    console.log(`${this.name} says ${this.call}!`);
  }
}

let animals = [new Animal('random animal'), new Cat('random cat')];
animals.forEach(animal => animal.speak());
// random animal says hi!
// random cat says meow!



