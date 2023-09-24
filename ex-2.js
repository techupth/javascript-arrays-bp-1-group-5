// Exercise #2: Editing Employee Array
const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];
// Start coding here
let alex = employees[1].name;
console.log(alex);
employees[1].hobbies.push("Watching basketball");
console.log(employees);
let alexHobbies = employees[1].hobbies;
console.log(alexHobbies);
let alexAndJamesAge = employees[0].age + employees[1].age;
console.log(alexAndJamesAge);
const updateEmployees = employees;
updateEmployees[2] =
{
  name: "Alicia",
  age: 29,
  hobbies: ["Shopping", "Reading novels"]
};
updateEmployees[3] =
{
  name: "Kody",
  age: 19,
  hobbies: ["Computer games", "Wakeboard"]
};
console.log(updateEmployees);
updateEmployees.pop();
console.log(updateEmployees);
console.log(employees);
