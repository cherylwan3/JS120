let objA = { propA: 'A' };
let objB = Object.create(objA);
objB.propB = 'B';

for (let prop in objB) {
  console.log(prop);
}

console.log('--');
Object.keys(objB).forEach(key => console.log(key));

