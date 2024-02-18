const names = ["1 2", "2 1", "3 1", "4 3"];
// names.sort((name1, name2) =>
//   name1.split(" "[1].localeCompare(name2.split(" ")[1]))
// );

console.log(names);
//const myNames = names.sort((name1, name2) =>
//   name1.split(" ")[1].localeCompare(name2.split(" ")[1])
//);
const tesName = names.sort((name1, name2) =>
  name1.split(" ")[1].localeCompare(name2.split(" ")[1])
);
console.log(tesName);
