// function return type
function add(num1:number,num2:number):number{
  return num1+num2;
}


console.log(add(10,20))

// The void type in TypeScript represents the absence of a return value for functions. It indicates that a function does not return any value, ensuring that the function's purpose is solely to act without returning data.


function greet(name:string):void{
  console.log(`hi,${name}`)
}
greet("harsh")


//  combineFunction ek function hoga jo do numbers lega aur ek number return karega.

let combineFunction:(a:number,b:number)=> number

combineFunction=add
console.log(combineFunction(100,200))


type CB= (n:number)=> void

function addHandle(num1:number,num2:number,cb:CB){
  const result=num1+num2;
  cb(result);
}

addHandle(10,60,(result:number)=>{
  console.log(result)
})