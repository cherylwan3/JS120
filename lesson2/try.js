/* let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
      console.log(this.a);
    }

    bar();
  },
  bar: function() {
    console.log(this.a + ' ' + this.b);
  }
};

obj.foo();        // => undefined undefined
obj.bar();        // => hello world
*/

/* function repeatThreeTimes(func) {
  func();
  func();
  func();
}

function foo() {
  let john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings: function() {
      let log = () => {
        console.log('hello, ' + this.firstName + ' ' + this.lastName);
      };
      repeatThreeTimes(log);
    },

  };
  john.greetings();
}

foo();

// => hello, John Doe
// hello, John Doe
// hello, John Doe */

function repeatThreeTimes(func) {
  func();
  func();
  func();
}

function foo() {
  let john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings: function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  //repeatThreeTimes(john.greetings.bind(john));
  console.log(john.greetings.call(john));
}

foo();

// => hello, John Doe
// => hello, John Doe
// => hello, John Doe

