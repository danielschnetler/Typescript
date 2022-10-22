type Admin = {
  name: string;
  privelages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Dan",
  privelages: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "Private Company" },
};

console.log(fetchedUserData?.job?.title);

const result = add("Dan", "the Man");
result.split(" ");

type UnkownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnkownEmployee) {
  console.log(emp.name);
  if ("privelages" in emp) {
    console.log("Privelages: " + emp.privelages);
  }
  if ("startDate" in emp) {
    console.log("Privelages: " + emp.startDate);
  }
}

printEmployeeInformation({ name: "Dan", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading Cargo ... " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving at speed:" + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 100 });

//const userInputElement = <HTMLInputElement> document.getElementById("text-input")!;
// const userInputElement = document.getElementById(
//   "text-input"
//)! as HTMLInputElement;

//userInputElement.value = "Hi there!";

const userInputElement = document.getElementById("text-input");

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there too!";
}

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "not a valid email!",
  userName: "Must start with a capital character",
};
