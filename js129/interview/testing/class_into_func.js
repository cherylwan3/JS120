function createObj(className) {
  return new className();
}

class Hello {
  sayHello() {
    console.log('hello');
  }
}

let helloObj = createObj(Hello);
helloObj.sayHello();