// console.log("hi")

// let aString: string = "hi";
// aString = "1";

// let variableto: string
// variableto = "Dss"

// let aNUM = 5;

// let arrString: string[] = ['a', 'a', 'a']
// let arrNumber: number[] = [1, 2, 3]
// let arrBool: boolean[] = [true, false]
// let arrMix = ["a", true, 1]
// arrBool[0] = false

// arrBool.push(true)
// console.log(arrBool[0])

// let arrTUPLE: [string, number] = ["a", 5]

// let rocky = {
//     name: "Jesse",
//     age: 25
// }

// type stringOrNum = string | number
// let year: stringOrNum;

// year = 2020;
// year = "2020"

// function calcSum(a: number, b: number): number {
//     return a + b
// }

// calcSum(2, 2)

// let calcSUM: (a:number, b:number) => number;

// calcSUM = (first:number,second:number) =>{
//     return first + second
// }

// INTERFACE

interface PersonInterface {
    name: string,
    age: number
}

let mike: PersonInterface = {
    name: 'mike',
    age: 24
}

class Person implements PersonInterface {

    constructor(public name: string,public age: number){}

    greet() {
        return `HI my name is ${this.name} and I am ${this.age}`
    }

}

let ankit = new Person("ankit", 25)
console.log(ankit.greet())

let john = new Person("JHON",35);
console.log(john.name)

// GENERICS

interface book<T>{
    id: number;
    name: string;
    data: T
}

const abook:book<string> = {
    id:1,
    name:"Title 1 ",
    data: ""
}

// ENUMS 

enum Manufacturer {TESLA,AUDI,MERCEDES,VOLVO,BMW}

const myCar = {
    year : 2020,
    make : Manufacturer.VOLVO
}

console.log(myCar.make)