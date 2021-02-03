"use strict";
var number1 = 2;
console.log(number1);
function addsum(num1, num2) {
    return num1 + num2;
}
var num3 = add(-1.55, 3);
console.log(num3);
console.log("Hello2");
// object
var person = {
    name: "Ankit",
    age: 25,
    hobbies: [],
    role: [2, 'author']
};
// Simple
var person2 = {
    name: "Ankit",
    age: 25,
    hobbies: ['Sport', 'Cooking'],
    role: [2, 'author']
};
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
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["READ_ONLY"] = 1] = "READ_ONLY";
    ROLE[ROLE["AUTHOR"] = 2] = "AUTHOR";
})(ROLE || (ROLE = {}));
var person3 = {
    name: "Ankit",
    age: 25,
    hobbies: ['Sport', 'Cooking'],
    role: ROLE.ADMIN
};
console.log(person3.role);
