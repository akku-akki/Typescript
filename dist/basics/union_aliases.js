"use strict";
function combine(num1, num2, resultConversion) {
    var res;
    if (typeof num1 === "number" && typeof num2 === "number") {
        res = num1 + num2;
    }
    else {
        res = num1.toString() + num2.toString();
    }
    if (resultConversion === 'num') {
        return +res; // this converts string to number
    }
    else {
        return res.toString();
    }
}
var combinedAges = combine(30, 20, 'num');
var combinedNames = combine("30", "40", "str");
var combinedAgesSTR = combine("ANKIT", "GUPTA", 'str');
console.log(combinedAges);
console.log(combinedNames);
console.log(combinedAgesSTR);
