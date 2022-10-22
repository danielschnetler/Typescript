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

function merge<T extends {}, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: "Dan" }, { age: 39 }));

const mergedObj = merge({ name: "Dan", hobbies: ["Running"] }, { age: 39 });

console.log(mergedObj.age);
