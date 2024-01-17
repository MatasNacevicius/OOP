import { Animal } from "./model.js";

const katinas = new Animal("Rokis", 4);

katinas.setAge();
katinas.getInfo();
console.log(katinas);

class Dog extends Animal {
  constructor(name, age, colour, legs) {
    super(name, age);
    this.colour = colour;
    this.legs = legs;
  }
  getInfo1() {
    console.log(
      `Mano vardas ${this.name}, man yra ${this.age}, mano kailio spalva ${this.colour} ir as turiu ${this.legs} kojas`
    );
  }
}

const suo = new Dog("Reksas", 6, "juoda", 4);
suo.getInfo1();
suo.setAge();
console.log(suo);
