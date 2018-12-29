// CODE here for your Lambda Classes

//////////////////////////////////////
/////////// CLASSES

//////////////////////////////////////
/////////// PERSON CLASS (BASE)
class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.gender = props.gender;
    this.location = props.location;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

//////////////////////////////////////
/////////// INSTRUCTOR CLASS
class Instructor extends Person {
  constructor(props) {
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }

  gradePoints(student, subject) {
    let randomGrade = Math.ceil((Math.random() - 0.5) * 10);
    student.grade = student.grade + randomGrade;
    if (student.grade > 100) {
      student.grade = 100;
    }
    if (student.grade < 0) {
      student.grade = 0;
    }
    if (randomGrade > 0) {
      return `${
        student.name
      } did well on the ${subject} test. The score improved the student's average grade by ${randomGrade}. ${
        student.name
      }'s average grade is now ${student.grade}.`;
    }
    if (randomGrade < 0) {
      return `${
        student.name
      } did poorly on the ${subject} test. The score decreased the student's average grade by ${randomGrade}. ${
        student.name
      }'s average grade is now ${student.grade}.`;
    } else {
      return `${
        student.name
      } did fine on the ${subject} test. The score did not affect the student's average grade. ${
        student.name
      }'s average grade is still ${student.grade}.`;
    }
  }
}

//////////////////////////////////////
/////////// STUDENT CLASS
class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
    this.grade = props.grade;
  }

  listsSubjects() {
    console.log(`${this.name}'s Favourite Subjects: ${this.favSubjects}`);
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }

  graduate() {
    if (this.grade >= 70) {
      console.log(
        `${this.name}'s current average grade is ${this.grade}. ${
          this.name
        } is allowed to Graduate.`
      );
    } else {
      console.log(
        `${this.name}'s current average is ${this.grade}. Sorry, ${
          this.name
        } did not pass, and is not allowed to graduate.`
      );
    }
  }
}

//////////////////////////////////////
/////////// PROJECT MANAGER CLASS
class ProjectManager extends Instructor {
  constructor(props) {
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times.`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
// === CHARACTERS ===

// === Instructor ===
const bruce = new Instructor({
  name: "Bruce",
  location: "Gotham City",
  age: 40,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Back-end",
  catchPhrase: `To the Batmobile!`
});

// === Student ===
const robbin = new Student({
  name: "Robbin",
  location: "Gotham City",
  age: 15,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `I'm no sidekick!`,
  className: "FSW16",
  previousBackground: "Have done some coding",
  favSubjects: ["REACT", "HTML", "CSS"],
  grade: 100
});

// === Project Manager ===
const alfred = new ProjectManager({
  name: "Alfred",
  location: "London",
  age: 87,
  gender: "male",
  favLanguage: "Perl",
  specialty: "Back-end",
  catchPhrase: `Anything else sir?`,
  gradClassName: "FSW61",
  faveInstructor: "Bruce"
});

bruce.speak();
bruce.demo("classes in JS");
bruce.gradePoints(robbin, "JS");
robbin.listsSubjects();
robbin.PRAssignment("Sprint Challenge");
robbin.sprintChallenge("JS Class");
console.log(robbin.grade);
robbin.graduate();
console.log(alfred.gradePoints(robbin, "JS Classes"));
alfred.standUp("FSW16");
alfred.debugsCode(robbin, "JS Classes");
bruce.grade(robbin, "Functional Programming");
