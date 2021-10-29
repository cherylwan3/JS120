function createStudent(name, school) {
  return {
    name: name,
    school: school,

    info() {
      console.log(`${this.name} studies at ${this.school}.`);
    },
  };
}

let cherri = createStudent('cherri', 'launch school');
cherri.info();