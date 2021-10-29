// using call with array args
function animalSpeak(call1, call2) {
  return this.animal + ' ' + call1 + ' and ' + call2;
}

let cat = {
  animal: 'cat',
};

let catCalls = ['meows', 'mews'];

let catSpeak = animalSpeak.call(cat, ...catCalls);
console.log(catSpeak);

// using apply
let catSpeak2 = animalSpeak.apply(cat, catCalls);
console.log(catSpeak2);
