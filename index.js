class Person {
  constructor(name, lastname, age, email) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.email = email;
  }
  getPersonInfo() {
    console.log(
      `Mano vardas ${this.name}, pavarde ${this.lastname}, man yra ${this.age}. Parasyk man laiska adresu ${this.email}`
    );
  }
}

const jonas = new Person(
  "Jonas",
  "Jonaitis",
  25,
  "jonukaslaukialaisku@gmail.com"
);
const petras = new Person(
  "Petras",
  "Petraitis",
  69,
  "petriukaslaukialaisku@gmail.com"
);
const onute = new Person(
  "Onute",
  "Onaityte",
  35,
  "onutelaukialaisku@gmail.com"
);
console.log(jonas);

jonas.getPersonInfo();
petras.getPersonInfo();
onute.getPersonInfo();

/////////////////////////////////////

class Animal {
  static greetings() {
    console.log("I am an animal specie!");
  }
}

const minotaurus = new Animal();
console.log(minotaurus);
Animal.greetings();

///////////////////////////////////////

class Student extends Person {
  constructor(name, lastname, age, course, average) {
    super(name, lastname, age);
    this.course = course;
    this.average = average;
  }

  printStudentInfo() {
    console.log(
      `Mano vardas ${this.name}, pavarde ${this.lastname}, man yra ${this.age}. Mokausi ${this.course}, pazimiu vidurkis ${this.average}`
    );
  }
}

const jonas2 = new Student("Jonas", "Jonaitis", 25, "javascript", 7.9);
jonas2.printStudentInfo();

class Teacher extends Person {
  constructor(name, lastname, age, email, subject, salary) {
    super(name, lastname, age, email);
    this.subjects = subject;
    this.salary = salary;
    this.topics = [];
  }
  isHappy() {
    if (this.salary > 1200) {
      console.log("Hooooray");
    } else if (this.salary > 800) {
      console.log("Not bad");
    } else {
      console.log("Fuck this job");
    }
  }

  setTopics(topikas) {
    this.topics.push(topikas);
  }

  getTopics() {
    this.topics.forEach((el) => console.log(el));
  }
}

const mokytojas1 = new Teacher(
  "Jonas",
  "Jonaitis",
  25,
  "jonaitis@gmail.com",
  "java",
  2000
);
console.log(mokytojas1);

mokytojas1.isHappy();
mokytojas1.setTopics("OOP");
console.log(mokytojas1);
const topikai = ["oop", "array", "xxxx", "jsjsjs"];
topikai.forEach((topic) => mokytojas1.setTopics(topic));

mokytojas1.getTopics();
console.log(mokytojas1);
