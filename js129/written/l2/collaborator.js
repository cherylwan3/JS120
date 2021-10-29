//collaborator example
let mom = {
  name: 'Mrs. Lee',
  occupation: 'software engineer',
};

let teen = {
  name: 'Ally',
  age: 16,
  mom: mom,

  greeting() {
    return `Hi, my name is ${this.name}. My mother's name is ${mom.name}.`;
  },
};

teen.greeting();
