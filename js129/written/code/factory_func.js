// shorthand
function createAnimal (animal, name) {
  return {
    animal,
    name,

    greeting() {
      return `I'm a ${this.animal} and my name is ${this.name}.`;
    },
  };
}

let cat = createAnimal('cat', 'Hello Kitty');
console.log(cat.greeting());

/* // w/o shorthand
function createAnimal (animal, name) {
  return {
    animal: animal,
    name: name,

    greeting: function() {
      return `I'm a ${this.animal} and my name is ${this.name}.`;
    },
  };
}

let cat = createAnimal('cat', 'Hello Kitty');
console.log(cat.greeting()); */