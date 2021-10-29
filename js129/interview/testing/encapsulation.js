/* let student = {
  name: 'Cherri',
  school: 'launch school',

  logGreeting() {
    console.log(`Hello, my name is ${this.name} and I study at ${this.school}.`);
  },
}; */

let student = {
  name: 'Cherri',
  school: 'Launch School',

  logGreeting: function() {
    console.log(`Hello, my name is ${this.name} and I study at ${this.school}.`);
  },
};

student.logGreeting();
