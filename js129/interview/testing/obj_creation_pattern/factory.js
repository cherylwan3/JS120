function createAnimal(animal, name) {
  return {
    animal,
    name,

    greeting() {
      console.log(`My name is ${this.name} and I am a ${this.animal}.`);
    },
  };
}

let cat = createAnimal('cat', 'hello kitty');
cat.greeting();