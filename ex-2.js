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
console.log(alex)

employees[1].hobbies = "Cryptocurrency" + "," + "Social media" + "," + "Watching basketball";
console.log(employees[1])


let alexHobbies = employees[1].hobbies;
console.log(alex)


let alexAndJamesAge = employees[0].age + employees[1].age;
console.log(alexAndJamesAge)


const updateEmployees = employees;
employees[0].name = "Alicia";
employees[0].age = 29;
employees[0].hobbies = "Shopping" +','+ ' ' +"Reading novels";

employees[1].name = "Kody";
employees[1].age = 19;
employees[1].hobbies = "Computer games" +','+' '+ "Wake board";

console.log(updateEmployees)
updateEmployees.pop();
console.log(updateEmployees)
console.log(employees)
