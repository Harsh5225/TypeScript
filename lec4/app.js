// function return type
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 20));
// The void type in TypeScript represents the absence of a return value for functions. It indicates that a function does not return any value, ensuring that the function's purpose is solely to act without returning data.
function greet(name) {
    console.log("hi,".concat(name));
}
greet("harsh");
//  combineFunction ek function hoga jo do numbers lega aur ek number return karega.
var combineFunction;
combineFunction = add;
console.log(combineFunction(100, 200));
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandle(10, 60, function (result) {
    console.log(result);
});
