const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}

Object.assign(Car.prototype, Speed);
Object.assign(Truck.prototype, Speed);

// console.log(Car.prototype.hasOwnProperty('goFast'));
// console.log('goFast' in Car.prototype);

let BMW = new Car();
BMW.goFast();

console.log(BMW.constructor.name);
//console.log(Car.name);