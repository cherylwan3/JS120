function createTeen (name, age) {
  return {
    name,
    age,

    greeting() {
      return `Hi, my name is ${this.name} and I'm ${this.age} years old.`;
    },
  };
}

let teen = createTeen('Ally', 16);
console.log(teen.greeting());

// non shorthand & non compact syntax
function createTeen (name, age) {
  return {
    name: name,
    age: age,

    greeting: function(){
      return `Hi, my name is ${this.name} and I'm ${this.age} years old.`;
    },
  };
}

