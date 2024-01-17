export class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  setAge() {
    this.age++;
  }
  getInfo() {
    console.log(`Mano vardas ${this.name} ir man yra ${this.age}`);
  }
}
