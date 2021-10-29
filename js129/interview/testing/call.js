function animalSpeak(call) {
  return this.animal + ' ' + call;
}

let cat = {
  animal: 'cat',
};

let catSpeak = animalSpeak.call(cat, 'meows');
console.log(catSpeak);