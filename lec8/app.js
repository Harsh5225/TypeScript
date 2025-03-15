"use strict";
console.log("generics");
// Generics in TypeScript allow us to create reusable and flexible components (functions, classes, and interfaces) that work with multiple data types instead of a single one. Let’s go step by step and understand your code examples.
//one type is connected to another type
const fruits = [];
fruits.push("mango");
fruits.push("apple");
console.log(fruits);
// 1️⃣ Basics of Generics
function merge(objA, objB, objC) {
    return Object.assign(Object.assign(Object.assign({}, objA), objB), objC);
}
const result = merge({ name: "Harsh" }, { role: "SDE-1" }, { CTC: "30LPA" });
console.log(result);
// <T, U, V> are generic types (placeholders).
// The function merge() takes three objects of any type.
// It merges them using the spread operator (...).
// When we call merge(), TypeScript automatically detects the types.
// 2️⃣ Generic Constraints
function createObject(key, value, isActive) {
    return { key, value, isActive };
}
const result2 = createObject("age", 22, true);
console.log(result2);
const numberBox = { value: 200 };
const stringBox = { value: "Hello" };
console.log(numberBox);
console.log(stringBox);
const repsonse = { data: "Success", status: 200 };
const jsonRes = { data: { name: "Hikes", age: 25 }, status: 200 };
console.log(repsonse);
console.log(jsonRes);
// Explanation
// User<T = string>: If no type is provided, T defaults to string.
// response uses the default string type.
// jsonRes explicitly defines T as Person2.
// 5️⃣ Generics with Classes
class Container {
    constructor(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
}
const C1 = new Container("hello classes");
console.log(C1.getContent());
const D1 = new Container(100);
console.log(D1.getContent());
// class Container<T> makes T a flexible type.
// We can create instances with string, number, etc.
// The method getContent() returns the stored value.
// 6️⃣ Generics with Arrays
function getFirst(arr) {
    return arr[0];
}
const firstNumber = getFirst([1, 2, 3, 4]);
const firstString = getFirst(["a", "b", "c"]);
console.log(firstNumber);
console.log(firstString);
// T[] means an array of any type.
// getFirst() returns the first element of an array.
// Generic with keyof
// function getProperty(obj:object,key:string){
//   return obj[key];
// }
// const res1 = getProperty({}, "name");
// console.log(res1);
function getProperty(obj, key) {
    return obj[key];
}
const p1 = getProperty({ name: "harsh", age: 22 }, "age");
console.log(p1);
