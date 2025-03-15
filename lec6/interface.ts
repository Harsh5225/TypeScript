//!interface

interface Person{
  name:string;
  age:number;
  greet(text:string):void;
}
// type Person={
//   name:string;
//   age:number;
//   greet(text:string):void;
// }

// let user:Person;

// user={
//   name:"Harsh",
//   age:22,
//   greet(text):void{
//     console.log(`${text}, ${this.name}`)
//   }
// }
// console.log(user)

// user.greet("Hello")


// interface greetable{
//   name:string;
//   greet(text:string):void;
// }
// interface greetable2{
//   name:string;
//   greet(text:string):void;
// }

// class Person implements greetable{
// name:string;
// constructor(n:string){
//   this.name=n;
// }
// greet(text: string): void {
//   console.log(`${text}, ${this.name}`)
// }
// }

// const p1=new Person("Aman");
// p1.greet("Hello");



//! readonly
// interface Greetable {
//     readonly name: string;
//     greet(text: string): void;
// }

// class Person implements Greetable {
//     name: string;
//     constructor(n: string) {
//         this.name = n;
//     }
//     greet(text: string): void {
//         console.log(`${text}, ${this.name}`);
//     }
// }
// let user1: Greetable;
// user1 = new Person("Patel");
// user1.name = "Patel Mernstack"; error

// extending interface

interface Named{
  readonly name:string;
}

interface greetable extends Named{
  greet(text:string):void;
}

class Person implements greetable{
  name:string;
  constructor(n:string){
    this.name=n
  }

  greet(text: string): void {
    console.log(`${text},${this.name}`)
  }
}


let user1:greetable;
user1=new Person("harsh");
user1.greet("Hi")


// type addFun=(a:number,b:number)=>number;
interface addFun{
  (a:number,b:number):number;
}


let add:addFun;

add=(n1:number,n2:number)=>{
  return n1+n2
}

console.log(add(30,90))


// optional ?

interface named{
  
 readonly name:string;
  hobby?:string
}


class Person2 implements named{
  name:string
  constructor(n:string){
    this.name=n;
  }
}

const p1=new Person2("Harsh")
console.log(p1.name)
p1.name="Koi"


// Interfaces in TypeScript do not enforce property modifiers in implementing classes.
// If you want readonly behavior, you must explicitly mark the property as readonly in the class.
// Now, with readonly name: string in Person2, TypeScript will prevent reassignment and throw an error.