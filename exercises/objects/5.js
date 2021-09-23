/* eslint-disable max-lines-per-function */
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info: function() {
      console.log(`${name} is a ${year} year student.`);
    },

    listCourses: function() {
      return this.courses;
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

let school = {
  students: [],

  addStudent: function(name, year) {
    if (!['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      console.log('Invalid Year');
    } else {
      let student = createStudent(name, year);
      this.students.push(student);
      return student;
    }
  },

  enrollStudent: function(student, courseName, courseCode) {
    student.addCourse({ name: courseName, code: courseCode});
  },

  addGrade: function(student, courseName, gradeNum) {
    let course = student.listCourses().filter(course => {
      return course.name === courseName;
    })[0];

    if (course) {
      course.grade = gradeNum;
    }
  },

  getReportCard: function(student) {
    student.courses.forEach(courseObj => {
      if (courseObj.grade) {
        console.log(`${courseObj.name}: ${courseObj.grade}`);
      } else {
        console.log(`${courseObj.name}: In progress`);
      }
    });
  },

  courseReport: function(courseName) {
    let grades = [];
    let logThis = [];

    this.students.forEach(student => {
      let course = student.listCourses().filter(courseObj => {
        return (Object.values(courseObj).includes(courseName) &&
        courseObj.grade);
      })[0];

      if (course) {
        logThis.push(`${student.name}: ${course.grade}`);
        grades.push(course.grade);
      }
    });

    if (grades.length > 0) {
      console.log(`=${courseName} Grades=`);
      logThis.forEach(str => console.log(str));
      let avg = (grades.reduce((total, grade) => grade + total))
                / grades.length;
      console.log('---');
      console.log(`Course Average: ${avg}`);
    } else {
      console.log('undefined');
      return undefined;
    }
  }
};

let foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, 'Math', 101);
school.enrollStudent(foo, 'Advanced Math', 102);
school.enrollStudent(foo, 'Physics', 202);
school.addGrade(foo, 'Math', 95);
school.addGrade(foo,'Advanced Math',90);
school.getReportCard(foo);

let bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, 'Math', 101);
school.addGrade(bar, 'Math', 91);

let qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux, 'Math', 101);
school.enrollStudent(qux, 'Advanced Math', 102);
school.addGrade(qux, 'Math', 93);
school.addGrade(qux,'Advanced Math',90);

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');

// book answer:
let school2 = {
  students: [],
  addStudent: function(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].indexOf(year) >= 0) {
      let student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log('Invalid Year');
    }
  },

  enrollStudent: function(student, courseName, courseCode) {
    student.addCourse({name: courseName, code: courseCode})
  },

  addGrade: function(student, courseName, grade) {
    let course = student.listCourses().filter(course => {
      return course.name === courseName;
    })[0];

    if (course) {
      course.grade = grade;
    }
  },

  getReportCard: function(student) {
    student.listCourses().forEach(course => {
      if (course.grade) {
        console.log(`${course.name} : ${String(course.grade)}`);
      } else {
        console.log(`${course.name} : In progress`);
      }
    });
  },

  courseReport: function(courseName) {
    function getCourse(student, courseName) {
      return student.listCourses().filter(course => {
        return course.name === courseName;
      })[0];
    }

    let courseStudents = this.students.map(student => {
      let course = getCourse(student, courseName) || { grade: undefined };
      return { name: student.name, grade: course.grade };
    }).filter(student => student.grade);

    if (courseStudents.length > 0) {
      console.log(`= ${courseName} Grades=`);

      let average = courseStudents.reduce((total, student) => {
        console.log(`${student.name} : ${String(student.grade)}`);
        return total + student.grade;
      }, 0) / courseStudents.length;

      console.log('---');
      console.log(`Course Average: ${String(average)}`);
    }
  },
};