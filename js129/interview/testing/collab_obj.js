let cat = {
  name: 'hello kitty',
  call: 'meows',
};

let human = {
  name: 'mark',
  pet: cat,

  petCall() {
    console.log(`${this.pet.name} ${this.pet.call}.`);
  }
};

human.petCall();

