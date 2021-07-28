function func() {
  return this;
}

let context = func();

console.log(context);

// global object

