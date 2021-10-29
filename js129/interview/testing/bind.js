function animalSpeaks() {
  console.log(this.animal + ' ' + this.call);
}

let cat = {
  animal: 'cat',
  call: 'meows',
};

let catSpeak = animalSpeaks.bind(cat);
catSpeak();