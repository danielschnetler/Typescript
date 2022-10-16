// const person: {
//     name: string;
//     age: number;
// } = {
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Dan",
  age: 39,
  hobbies: ["Archery", "Biking"],
  role: Role.ADMIN,
};

let favouriteActivities: string[];
favouriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log("is Author");
}
