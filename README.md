# TypeScript Learnings 📚

Welcome to my TypeScript learning repository! This document summarizes the key concepts I have learned, along with practical examples.

## 🧠 Mind Map of Concepts

```
TypeScript Basics
├── Primitive Types
│   ├── Number
│   ├── String
│   ├── Boolean
├── Advanced Types
│   ├── Object
│   ├── Enum
│   ├── Array
│   ├── Tuple
│   ├── Union
│   ├── Alias
│   ├── Unknown
│   ├── Any
│   ├── String | Number
│   ├── Never
├── Functions
│   ├── Return Types
│   ├── Void
│   ├── Callback Functions
├── Object-Oriented Programming (OOP)
│   ├── Classes
│   │   ├── Private
│   │   ├── Public
│   │   ├── Protected
│   │   ├── Static
│   │   ├── Abstract
│   │   ├── Get & Set Methods
│   │   ├── Readonly Properties
│   ├── Interfaces
│   │   ├── Class Implements Interface
│   │   ├── Extends
│   ├── Type vs Interface
├── Type Guards
│   ├── Objects
│   ├── Classes
│   ├── `in` Operator
│   ├── `instanceof` Operator
├── Type Casting / Type Assertion
├── Generics
│   ├── Generic Constraints
│   ├── Generics with Interface
│   ├── Generic Default Types
│   ├── Generics with Classes
│   ├── Generics with Arrays
│   ├── Generics with `keyof`
```

## 📌 Practical Examples

### 1️⃣ Basic Types
```ts
let age: number = 25;
let username: string = "John Doe";
let isLoggedIn: boolean = true;
```

### 2️⃣ Enum
```ts
enum Role { Admin, User, Guest }
const userRole: Role = Role.Admin;
```

### 3️⃣ Tuple
```ts
let person: [string, number] = ["Alice", 30];
```

### 4️⃣ Union & Alias
```ts
type ID = string | number;
let userId: ID = 101;
```

### 5️⃣ Function Return Type & Void
```ts
function add(a: number, b: number): number {
    return a + b;
}
function logMessage(message: string): void {
    console.log(message);
}
```

### 6️⃣ Interface & Class Implementation
```ts
interface Person {
    name: string;
    age: number;
}
class Employee implements Person {
    constructor(public name: string, public age: number) {}
}
```

### 7️⃣ Generics with Constraints
```ts
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return { ...objA, ...objB };
}
const mergedObj = merge({ name: "Alice" }, { age: 30 });
```

### 8️⃣ Generic with keyof
```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
const user = { name: "Bob", age: 25 };
console.log(getProperty(user, "name"));
```

### 9️⃣ Class with Get & Set Methods
```ts
class User {
    private _age: number;
    constructor(private name: string, age: number) {
        this._age = age;
    }
    get age(): number {
        return this._age;
    }
    set age(newAge: number) {
        if (newAge > 0) this._age = newAge;
    }
}
const newUser = new User("Alice", 25);
console.log(newUser.age);
newUser.age = 30;
```

## 🚀 Conclusion
This repository serves as a reference for my TypeScript journey. Feel free to contribute or suggest improvements! 🎉

