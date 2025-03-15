// number,string,boolean
function add(num1, num2, printNum, sometext) {
    //  if(typeof num1==="number" && typeof num2==="number"){
    //   return num1+num2
    //  }else{
    //   return +num1+num2;
    //  }
    if (printNum == true) {
        console.log("".concat(sometext, " ").concat(num1 + num2));
    }
}
var n1 = 10;
var n2 = 30;
var printNum = true;
var sometext = "some of two number is";
add(n1, n2, printNum, sometext);
