console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

//mine2
function objectsEqual(objA, objB) {
  let objAEntries = Object.entries(objA).flat().sort();
  let objBEntries = Object.entries(objB).flat().sort();
  return objAEntries.every((elem, idx) => elem === objBEntries[idx]);
}

//mine1
function objectsEqual2(objA, objB) {
  for (let keyA in objA) {
    for (let keyB in objB) {
      if (objA[keyA] !== objB[keyA]) return false;
      if (objB[keyB] !== objA[keyB]) return false;
    }
  }
  return true;
}

// book
function objectsEqual3(a, b) {
  if (a === b) {
    return true;
  }

  return (keysMatch(a, b) && valuesMatch(a, b));
}

function keysMatch(a, b) {
  let aKeys = Object.getOwnPropertyNames(a).sort();
  let bKeys = Object.getOwnPropertyNames(b).sort();

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every((key, index) => {
    return key === bKeys[index];
  });
}

function valuesMatch(a, b) {
  let aKeys = Object.getOwnPropertyNames(a).sort();

  return aKeys.every(key => a[key] === b[key]);
}

