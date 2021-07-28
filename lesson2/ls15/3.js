let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};


function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

let getDescription = turk.getDescription.bind(turk);

logReturnVal(getDescription);