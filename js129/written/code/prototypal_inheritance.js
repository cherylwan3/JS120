let animalPrototype = {
  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  },
};

let catPrototype = Object.create(animalPrototype);
catPrototype.greeting = function() {
  return `I'm a ${this.animal} and my name is ${this.name}.`;
};


let cat = Object.create(catPrototype).init('cat', 'Hello Kitty');
console.log(cat.greeting());