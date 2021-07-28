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

bar.add.call(foo); // => 3
// use call to invoke the add method but with foo as execution context. 
// What will this return?

// => 3