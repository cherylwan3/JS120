/* eslint-disable max-lines-per-function */
function createStudent(name, grade) {
  return {
    name,
    grade,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.grade} year student.`);
    },

    addCourse(courseObj) {
      this.courses.push(courseObj);
    },

    listCourses() {
      return this.courses;
    },

    addNote(code, note) {
      let course = this.courses.filter(courseObj => {
        return courseObj.code === code;
      })[0];
      if (course.hasOwnProperty('note')) {
        course.note = course.note + '; ' + note;
      } else {
        course.note = note;
      }
    },

    updateNote(code, note) {
      let course = this.courses.filter(courseObj => {
        return courseObj.code === code;
      })[0];
      course.note = note;
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.hasOwnProperty('note')) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },
  };
}

let school = {
  students: [],

  addStudent(name, year) {
    if (!['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      console.log('Invalid Year');
    } else {
      let student = createStudent(name, year);
      this.students.push(student);
      return student;
    }
  },

  enrollStudent(student, courseName, code) {
    student.addCourse({ name: courseName, code: code});
  },

  addGrade(student, courseName, grade) {
    let course = student.listCourses().filter(course => {
      return course.name === courseName;
    })[0];

    if (course) {
      course.grade = grade;
    }
  },

  getReportCard(student) {
    student.listCourses().forEach(course => {
      if (course.grade) {
        console.log(course.name + ': ' + course.grade);
      } else {
        console.log(course.name + ': ' + 'In progress');
      }
    });
  },

  courseReport(courseName) {
    let grades = [];
    let log = [];

    console.log(`=${courseName} Grades=`);

    this.students.forEach(student => {
      let course = student.listCourses().filter(course => {
        return course.name === courseName && course.grade;
      })[0];

      if (course) {
        grades.push(course.grade);
        log.push(student.name + ': ' + course.grade);
      }
    });

    if (grades.length > 0) {
      log.forEach(str => console.log(str));
      console.log('--');

      let avg = grades.reduce((sum, grade) => sum + grade) / grades.length;
      console.log('Course Average: ' + avg + '\n');
    } else {
      console.log('undefined');
      return undefined;
    }
  },
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
