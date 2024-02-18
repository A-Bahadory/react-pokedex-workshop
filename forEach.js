// array.forEach((item, index) => {
//   if (item === "three") {
//     console.log("we got number 3!");
//   } else {
//     console.log(item);
//   }
// });

const people = [
  {
    name: "Florin",
    age: 26,
  },
  {
    name: "Ivan",
    age: 18,
  },
  {
    name: "jai",
    age: 15,
  },
];

//filter method

const adult = people.filter((person) => person.age <= 18);
//console.log(adult);

const numbers = [1, 2, 1];
const removeDo = numbers.filter((value, index, arr) => {
  console.log(arr.indexOf(value));
});
