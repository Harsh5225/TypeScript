// number,string,boolean

function add(num1:number,num2:number,printNum:boolean,sometext:string){
  if(printNum==true){
    console.log(`${sometext} ${num1+num2}`)
  }
}

const n1=10;
const n2=30;
const printNum=true;
const sometext="some of two number is"
add(n1,n2,printNum,sometext);
