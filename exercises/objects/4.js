let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
//  "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"

// eslint-disable-next-line max-lines-per-function
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info: function() {
      console.log(`${name} is a ${year} year student.`);
    },

    listCourses: function() {
      console.log(this.courses);
    },

    addCourse: function(courseObj) {
      this.courses.push(courseObj);
    },

    addNote: function(courseCode, note) {
      let course = this.courses.filter(course => {
        return course.code === courseCode;
      })[0];

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      }
    },

    updateNote: function(courseCode, note) {
      let courseObj = this.courses.filter(courseObj => {
        return courseObj.code === courseCode;
      })[0];

      if (courseObj) {
        courseObj.note = `${note}`;
      }
    },

    viewNotes: function() {
      this.courses.forEach(courseObj => {
        console.log(`${courseObj.name}: ${courseObj.note}`);
      });
    },
  };
}
