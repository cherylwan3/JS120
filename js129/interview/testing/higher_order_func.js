function createAnimalGreeter(animal) {
  switch (animal) {
    case 'cat':
      return () => console.log('meow');
    case 'dog':
      return () => console.log('woof');
    default:
      return () => console.log('hello');
  }
}

let catGreeter = createAnimalGreeter('cat');
catGreeter(); // meow

let dogGreeter = createAnimalGreeter('dog');
dogGreeter(); // woof

let humanGreeter = createAnimalGreeter();
humanGreeter(); // hello