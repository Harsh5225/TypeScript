// arrat,object,tuple,enum
console.log("let's learn");
// !object
// const person:{
//   name:string;
//   age:number;
//   xyz:{
// address:string;
//   }
// }={
//   name:"harsh",
//   age:22,
//   xyz:{
//     address:"mumbai"
//   }
// };
// !Array
// const person:{
// name:string;
// age:number;
// skills:string[]
// }={
//   name:"Harsh",
//   age:22,
//   skills:["Reactjs","Nodejs"]
// }
// let favouritelanaguage:string[];
// favouritelanaguage=["english","hindi"]
// let favouritelanaguage2:any[]; // loose ts powerful
// favouritelanaguage2=["english","hindi",21,true]
// console.log(favouritelanaguage2)
//!tuple
// const person={
//   name:string;
//   age:number;
//   skills:string[] ;
//   product: [number,string];  // tuple fixed arrya of types
// }={
//   name:"Harsh",
//   age:21,
//   skills:["react","nodejs"],
//   product:[10,"M1 macbook"]
// }
// person.product[1]=20
//!enum
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["author"] = 1] = "author";
    Role[Role["READ_USER_ONLY"] = 2] = "READ_USER_ONLY";
})(Role || (Role = {}));
var person = {
    name: "harsh",
    age: 22,
    skills: ["react", "node"],
    product: [10, "air2"],
    role: Role.READ_USER_ONLY
};
if (person.role === Role.author) {
    console.log("author");
}
else if (person.role === Role.admin) {
    console.log("admin");
}
else if (person.role === Role.READ_USER_ONLY) {
    console.log("READ_USER_ONLY");
}
