"use strict";
// console.log("hi")
var mike = {
    name: 'mike',
    age: 24
};
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "HI my name is " + this.name + " and I am " + this.age;
    };
    return Person;
}());
var ankit = new Person("ankit", 25);
console.log(ankit.greet());
var john = new Person("JHON", 35);
console.log(john.name);
var abook = {
    id: 1,
    name: "Title 1 ",
    data: ""
};
// ENUMS 
var Manufacturer;
(function (Manufacturer) {
    Manufacturer[Manufacturer["TESLA"] = 0] = "TESLA";
    Manufacturer[Manufacturer["AUDI"] = 1] = "AUDI";
    Manufacturer[Manufacturer["MERCEDES"] = 2] = "MERCEDES";
    Manufacturer[Manufacturer["VOLVO"] = 3] = "VOLVO";
    Manufacturer[Manufacturer["BMW"] = 4] = "BMW";
})(Manufacturer || (Manufacturer = {}));
var myCar = {
    year: 2020,
    make: Manufacturer.VOLVO
};
console.log(myCar.make);
