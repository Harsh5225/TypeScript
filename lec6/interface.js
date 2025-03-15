"use strict";
//!interface
class Person {
    constructor(n) {
        this.name = n;
    }
    greet(text) {
        console.log(`${text},${this.name}`);
    }
}
let user1;
user1 = new Person("harsh");
user1.greet("Hi");
let add;
add = (n1, n2) => {
    return n1 + n2;
};
console.log(add(30, 90));
class Person2 {
    constructor(n) {
        this.name = n;
    }
}
const p1 = new Person2("Harsh");
console.log(p1.name);
p1.name = "Koi";
