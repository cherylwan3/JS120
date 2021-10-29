// encapsulated obj
let teen = {
  name: 'Ally',
  age: 16,
  dreamOccupation: 'dancer',
  hobbies: ['listening to music'],

  greeting() {
    return `Hi, my name is ${this.name} and I'm ${this.age} years old.`;
  },

  dream() {
    return `${this.name} dreams of becoming a ${this.dreamOccupation}.`;
  },

  changeDream(newDream) {
    this.dreamOccupation = newDream;
  },

  addHobby(hobby) {
    this.hobbies.push(hobby);
  },

  listHobbies() {
    return this.hobbies;
  },
};

console.log(teen.greeting());
console.log(teen.dream());
teen.changeDream('designer');
console.log(teen.dream());
teen.addHobby('dancing');
console.log(teen.listHobbies());

// non compact method syntax
// encapsulated obj

let teen = {
  name: 'Ally',
  age: 16,

  greeting: function() {
    return `Hi, my name is ${this.name} and I'm ${this.age} years old.`;
  },
};

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


