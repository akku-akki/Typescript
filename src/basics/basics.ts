let number1: number = 2;
console.log(number1)


function addsum(num1: number, num2: number) {
    return num1 + num2;
}

let num3 = add(-1.55, 3);
console.log(num3);
console.log("Hello2");


// object
const person: { name: string; age: number, hobbies: string[], role: [number, string] } = {
    name: "Ankit",
    age: 25,
    hobbies: [],
    role: [2, 'author']

}

// Simple

const person2 = {
    name: "Ankit",
    age: 25,
    hobbies: ['Sport', 'Cooking'],
    role: [2, 'author']

}
// person2.role[5] = 10; // beaware it may increase size of tuple
// console.log(person2)

// console.log(person.age);

// let games = ["cricket", "football", "basketball"];

// games.forEach((item, value) => console.log(item + "__" + value)
// )

// for (const hobby of person2.hobbies) {
//     console.log(hobby.toString());
// }

// TUPLE fixed length array

// ENUM

enum ROLE { ADMIN, READ_ONLY, AUTHOR }

const person3 = {
    name: "Ankit",
    age: 25,
    hobbies: ['Sport', 'Cooking'],
    role: ROLE.ADMIN

}
console.log(person3.role);