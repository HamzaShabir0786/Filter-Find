// Filter
let isAdult = [
  { name: "hamzi", age: 20 },
  { name: "abdullah", age: 11 },
  { name: "ali", age: 33 },
];
let adults = isAdult.filter(
  (person) => person.age >= 18 && person.name === "hamzi"
);
console.log(`${adults[0].name} is Adult and his age is ${adults[0].age}`);
///////////////////////////////////////////////////////////////////////////
// Find
const numbers = [3, 8, 12, 15];

const firstEven = numbers.find((num) => num > 3);
console.log(firstEven); //return single value if doesn't true return undefine

//once an again Filter
const FilterNumber = [3, 8, 12, 15];
const FilNum = FilterNumber.filter((num) => num > 3);
console.log(FilNum); //always return an array
