"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("RESULT" + num);
}
// This may refer to type def in dart
// let combineValue: Function;
var combineValue;
// 
combineValue = add;
// combineValue = printResult;
// printResult(add(5, 12))
printResult(combineValue(5, 6));
// CallBacks
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) { return console.log(result); });
