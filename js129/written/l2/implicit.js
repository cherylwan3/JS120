"use strict"; // the quotes are required

function foo() {
  console.log("this refers to: " + this);
}

foo(); // this refers to: undefined