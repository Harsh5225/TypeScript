// *union  (|)

// function combine(num1:number | string,num2:number | string){
//   let result;
//   if(typeof num1==="number" && typeof num2==="number"){
//     result= num1+num2;
//   }else{
//     result=num1.toString()+num2.toString();
//   }
//   return result;
// }

// const result=combine(10,20);
// const concat=combine("Harsh","Ignites")

// console.log(result,concat)


// !LITERAL TYPES
// function combine(num1:number | string,num2:number | string,conversionType:"as-number"){
//   let result;
//   if(typeof num1==="number" && typeof num2==="number" || conversionType==="as-number"){
//     result= +num1 + +num2;
//   }else{
//     result=num1.toString()+num2.toString();
//   }
//   return result;
// }

// const result=combine(10,"20","as-number");
// // const concat=combine("Harsh","Ignites")
// console.log(result)


// !ALIAS / custom types

type conversiontype="as-number"| "as-string";
type combinable=number | string;

function combine(num1:combinable,num2:combinable,conversionType:conversiontype){
  let result;
  if(typeof num1==="number" && typeof num2==="number" || conversionType==="as-number"){
    result= +num1 + +num2;
  }else{
    result=num1.toString()+num2.toString();
  }
  return result;
}

const result=combine(10,"20","as-number");
const concat=combine("Harsh","Ignites","as-string")
console.log(result,concat)


type User={
  name:string;
  age:number;
  email:string[];
}

const user:User={
  name:"harsh",
  age:22,
  email:["harshj@","axs@"]
}

console.log(user)


function userH(user:User){
  console.log(`Person's name is ${user.name}`)
}

userH(user)