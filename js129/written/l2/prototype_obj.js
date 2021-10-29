// https://launchschool.com/lessons/1eaf5e37/assignments/f7b8620b
// ex4]

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

function assignProperty(obj, prop, value) {
  if (prop in obj) {
    while (obj) {
      if (obj.hasOwnProperty(prop)) {
        obj[prop] = value;
        break;
      }

      obj = Object.getPrototypeOf(obj);
    }
  }
}

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false