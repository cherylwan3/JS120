function animalSound(sound) {
  return this.animal + ' ' + sound;
}

let obj = {
  animal: 'cat',
};

obj.animal = animalSound.call(obj, 'meows');
console.log(obj.animal); // 'cat meows'