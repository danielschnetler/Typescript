// const names: Array<string> = ["Dan", "Max"]; // string[]
// //names[0].split("");

// const promise: Promise<string> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: "Dan" }, { age: 39 }));

const mergedObj = merge({ name: "Dan", hobbies: ["Running"] }, { age: 39 });
console.log(mergedObj.age);

interface Lenghty {
  length: number;
}

function countAndDescribe<T extends Lenghty>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi There!"));
console.log(countAndDescribe(["Sports", "Coocking"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Dan" }, "name"));
