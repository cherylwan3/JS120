// compact syntax
let ally = {
  name: 'Ally',
  age: '25',
  info() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
};

ally.info();

// non compact method syntax
let ally2 = {
  name: 'Ally',
  age: '25',
  info: function() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
};
ally2.info();