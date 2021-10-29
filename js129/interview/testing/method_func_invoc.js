let cat = {
  meow: 'meow',
  speak() {
    console.log(this.meow);
  }
};


// method invocation
cat.speak(); // meow

// func invocation
let meow = cat.speak;
meow(); // undefined