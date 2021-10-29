// checking if prototypeObj is the prototype of childObj
let prototypeObj = {
  prop: 'prop',
};

let childObj = {};
Object.setPrototypeOf(childObj, prototypeObj);

// method 1
console.log(Object.getPrototypeOf(childObj) === prototypeObj);

//method2
console.log(prototypeObj.isPrototypeOf(childObj));


// using Object.create & checking for existence of property in child object

let prototype = {
  prop: 'prop',
};

let child = Object.create(prototypeObj);

// in operator: checks if method exists in protoype chain
console.log('prop' in child); // true

// hasOwnProperty instance method checks if prop exists in obj's own property
console.log(child.hasOwnProperty('prop')); // false