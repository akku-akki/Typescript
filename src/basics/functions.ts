
function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log("RESULT" + num);
}


// This may refer to type def in dart
// let combineValue: Function;

let combineValue: (a: number, b: number) => number;

// 
combineValue = add;
// combineValue = printResult;

// printResult(add(5, 12))
printResult(combineValue(5, 6));

// CallBacks

function addAndHandle(n1: number,n2:number, cb: (num: number)=> void){
    const result = n1+n2;
    cb(result);
}

addAndHandle(10,20,(result)=>console.log(result))