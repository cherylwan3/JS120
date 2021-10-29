'use strict';

function foo() {
  this.bar = 'value';
}

foo();
console.log(global.bar); // 'value'
console.log(bar); // 'value'