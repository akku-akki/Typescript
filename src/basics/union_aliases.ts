
type Combinator = number | string;

function combine(num1: Combinator, num2: Combinator,
    resultConversion: string
) {
    let res;
    if (typeof num1 === "number" && typeof num2 === "number") {
        res = num1 + num2;
    } else {
        res = num1.toString() + num2.toString();
    }
    if (resultConversion === 'num') {
        return +res; // this converts string to number
    } else {
        return res.toString();
    }
}

const combinedAges = combine(30, 20, 'num');
const combinedNames = combine("30", "40", "str");
const combinedAgesSTR = combine("ANKIT", "GUPTA", 'str');

console.log(combinedAges);
console.log(combinedNames);
console.log(combinedAgesSTR);