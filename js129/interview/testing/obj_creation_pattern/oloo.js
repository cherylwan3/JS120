let animalPrototype = {
  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  },

  greeting() {
    console.log(`I am a ${this.animal} and my name is ${this.name}.`);
  },
};

let cat = Object.create(animalPrototype).init('cat', 'hello kitty');
cat.greeting();

// check the prototype obj
console.log(Object.getPrototypeOf(cat) === animalPrototype);

