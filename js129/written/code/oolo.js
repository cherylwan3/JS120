let animalPrototype = {
  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  },

  greeting() {
    return `I'm a ${this.animal} and my name is ${this.name}.`;
  },
};

let cat = Object.create(animalPrototype).init('cat', 'Hello Kitty');
console.log(cat.greeting());
