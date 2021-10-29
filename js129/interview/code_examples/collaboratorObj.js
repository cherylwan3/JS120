function createParent(name, occupation) {
  return {
    name,
    occupation,
  };
}

let teen = {
  name: 'Ally',
  age: 16,
  parents: [],

  greeting() {
    return `Hi, my name is ${this.name}.`;
  },

  addParent(name, occupation) {
    let parent = createParent(name, occupation);
    this.parents.push(parent);
  },

  logParents() {
    this.parents.forEach(parent => {
      console.log(`${parent.name}: ${parent.occupation}`);
    });
  }
};

teen.addParent('mom', 'software engineer');
teen.addParent('dad', 'designer');
teen.logParents();