// unknown → TypeScript does not allow direct assignment unless checked.
// any → Can store anything and allows assignments without checks (unsafe).


let userInput: unknown;
// let userInput: any;
let userName:string | number;
userInput=10
// userInput="mern"

if(typeof userInput==="number"){
userName=userInput;
console.log(userName)
}

// never is used for functions that never return a value.
// Example: Functions that throw errors or enter an infinite loop.


function generateError(message:string,code:number):never{
  throw{message:message,statusCode:code}
}

const res = generateError("Internal server error boom", 500);
console.log(res);  // ❌ This line is unreachable because `generateError` never returns.