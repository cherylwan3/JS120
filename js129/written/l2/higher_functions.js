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

let greeterCat = createAnimalGreeter('cat');
greeterCat (); // logs 'meow'
greeterCat (); // logs 'meow'
greeterCat (); // logs 'meow'

let greeterDog = createAnimalGreeter('dog');
greeterDog(); // logs 'woof'

let greeter = createAnimalGreeter();
greeter(); // logs 'hello'