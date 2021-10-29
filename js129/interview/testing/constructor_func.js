let kitty = {
  name: 'hello kitty',
};

console.log(kitty.constructor); // [Function: Object]
console.log(kitty.hasOwnProperty('constructor')); // false
console.log(Object.hasOwnProperty('constructor')); // false
//console.log(Object.prototoype.hasOwnProperty('constructor')); // true
console.log(kitty.constructor === Object.prototype.constructor); // true

