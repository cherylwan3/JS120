let foo = {
  a: 1,
  b: 2,
};

let bar = {
  a: 'abc',
  b: 'def',
  add: function() {
    return this.a + this.b;
  },
};

function returnThis() {
  return this.a;
}


console.log(returnThis.call(foo));