const meow = {
  meow() {
    console.log('meow');
  },
};

class Animal {
  constructor(animal, name) {
    this.animal = animal;
    this.name = name;
  }
}

class Cat extends Animal {
  constructor(animal, name) {
    super(animal, name);
    Object.assign(this, meow); // here
  }
}

let cat = new Cat();
cat.meow();