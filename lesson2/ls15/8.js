/* let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment.call(this);
  }
}; */

let foo = {
  a: 0,
  incrementA: function() {
    let increment = function() {
      this.a += 1;
    }.bind(this);

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

// What will the value of foo.a be after this code runs?

console.log(foo.a);