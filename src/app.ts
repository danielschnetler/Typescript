function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Dan";

  constructor() {
    console.log("Creating Person Object...");
  }
}

const pers = new Person();
console.log(pers);
