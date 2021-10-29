// polymorphism through duck typing
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} says hi!`);
  }
}

class Iphone {
  speak() {
    console.log(`siri says hi!`);
  }
}

let objects = [new Animal('kitty'), new Iphone()];
objects.forEach(obj => obj.speak());
// kitty says hi!
// siri says hi!