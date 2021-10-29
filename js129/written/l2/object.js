/* let prototype = {
  prop: 'has property',
};

let obj = Object.create(prototype);
console.log('prop' in obj); // true
console.log(obj.hasOwnProperty('prop')); // false
 */

let parentObj = {
  prop: 'has property',
};
let childObj = {};
Object.setPrototypeOf(childObj, parentObj);

console.log(childObj.prop);                    // => has property
console.log(childObj);                        // => {}
console.log(Object.getPrototypeOf(childObj)); // => { prop: 1}