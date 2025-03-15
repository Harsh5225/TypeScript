// *union  (|)
function combine(num1, num2, conversionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var result = combine(10, "20", "as-number");
var concat = combine("Harsh", "Ignites", "as-string");
console.log(result, concat);
var user = {
    name: "harsh",
    age: 22,
    email: ["harshj@", "axs@"]
};
console.log(user);
function userH(user) {
    console.log("Person's name is ".concat(user.name));
}
userH(user);
