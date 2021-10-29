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

class Kitty extends Cat {
  constructor(name, animal, call) {
    super(name, animal, call);
  }
}

const purrMixin = {
  purr() {
    console.log(this.name + ' purrs!');
  }
};

Object.assign(Kitty.prototype, purrMixin);

let kitty = new Kitty('Hello Kitty', 'Japanese Cat', 'Meow!');
kitty.purr();
