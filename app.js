console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
  constructor(name, petCount, residence, hobbies = []) {
    this.name = name;
    this.pets = petCount;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  removeHobby(hobby) {
    let chosenList = hobby;
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === chosenList) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  greeting() {
    console.log(`Hello ${this.name}, nice to meet you!`)
  }

}

//instance
const myself = new Person("Morri", 0, "Alexandria, VA", ["camping", "traveling", "guitar", "games"] )
console.log(myself)
myself.greeting()
myself.addHobby("swimming")
myself.removeHobby("games")


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person{
  constructor(name, petCount, residence, hobbies = []) {
    super(name, petCount, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
  }

  greeting() {
    console.log(`Hello, I'm a coder and my name is ${this.name}, I have ${this.pets} pets and I live in ${this.residence}, nice to meet you!`)
  }
}

//instance
const coderSelf = new Coder("Morricone", 1, "DC", ["eating", "sleeping", "drinking"])
console.log(coderSelf);
coderSelf.addHobby("gossiping")
coderSelf.removeHobby("drinking")
coderSelf.greeting();

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");


class Calculator {
  constructor() {
    this.result = 0;
  }

  add(a, b) {
    if (b==undefined) {
      b = this.result
    }
    console.log(b)
    return this.result = a + b;
  }

  subtract(a, b) {
    if (b==undefined) {
      b = this.result
    }
    console.log(b)
    return this.result = a - b;
  }

  multiply(a, b) {
    if (b==undefined) {
      b = this.result
    }
    console.log(b)
    return this.result = a * b;
  }

  divide(a, b) {
    if (b == undefined) {
      b = this.result
    }
    console.log(b)
    return this.result = a/b;
  }

  displayResult() {
    console.log(`total is ${this.result}`)
  }
}

//instance

const calc = new Calculator();
console.log(calc);
calc.add(2);
calc.displayResult();
calc.subtract(5,1);
calc.displayResult();
calc.multiply(0);
calc.displayResult();
calc.divide(5);
calc.displayResult();