let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    let self = this;
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    });
  },
};

/**
 * 'this' on line 5 is bound to the global object.
 * 
 */

console.log(franchise.allMovies());