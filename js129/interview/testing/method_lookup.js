let a = {
  propA: 'a',
};

let b = {
  propB: 'b',
};

let c = {
  propC: 'c',
};

Object.setPrototypeOf(b, a);
Object.setPrototypeOf(c, b);

console.log(c.propC); // c
console.log(c.propB); // b
console.log(c.propA); // a