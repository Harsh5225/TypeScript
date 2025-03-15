console.log("type guards")


// !1. Type Guards
// Type Guards help TypeScript determine the exact type of a variable at runtime when working with union types (i.e., multiple possible types).


type combinable=string|number;

function add (n1:combinable,n2:combinable){
  // type guard
  if(typeof n1==="string" || typeof n2==="string"){
    return n1.toString()+n2.toString();
  }else{
    return n1+n2;
  }
}


console.log(add(20,30))
console.log(add(20,"30"))


// 2. Type Guards with Objects (in operator)
// TypeScript does not know the difference between Employee and Admin in a union type unless we explicitly check their properties.


type Admin = {
  name: string;
  privilages: string[];
};
type Employee = {
  name: string;
  startDate: string;
};

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: ", emp.name);

  // Type Guard using 'in' operator
  if ('privilages' in emp) {
      console.log("Privileges: ", emp.privilages);
  }

  if ('startDate' in emp) {
      console.log("Start Date: ", emp.startDate);
  }
}

const emp1: Admin = { name: "Patel", privilages: ["create-server"] };
const emp2: Employee = { name: "Aman", startDate: new Date().toDateString() };

printEmployeeInformation(emp1);
printEmployeeInformation(emp2);


// !Explanation
// The in operator checks if a property exists in the object.
// if ('privilages' in emp) {} ensures that emp is an Admin before accessing privilages.
// if ('startDate' in emp) {} ensures that emp is an Employee before accessing startDate.



// 3. Type Guards with Classes (instanceof Operator)
// The instanceof operator works for class-based objects.


class car{
  drive(){
    console.log("Driving a car...")
  }
}
class Truck{
  drive(){
    console.log("Driving a truck...")
  }

  loadingAmount(n:number){
    console.log("loading amount is",n);
  }
}

type Vehicle=car|Truck

function useVehicle(vehicle:Vehicle){
  vehicle.drive();


  // using in operator
  if("loadingAmount" in vehicle){
    vehicle.loadingAmount(500);
  }

  // using instanceof (best)
  if(vehicle instanceof Truck){
    vehicle.loadingAmount(1000);
  }
}


const v1=new car();
const v2=new Truck();
useVehicle(v1);
useVehicle(v2);

// instanceof checks if an object is an instance of a specific class.
// if (vehicle instanceof Truck) {} ensures that vehicle is actually a Truck before calling loadCargo().




//! 4. Type Casting / Type Assertion
// TypeScript does not always know what kind of element document.getElementById() will return. We use Type Casting to tell TypeScript the exact type.

// Without Type Casting

// const element=document.getElementById("userInput")
// console.log(element)

// document.getElementById() returns HTMLElement | null, so TypeScript does not know if it is an <input>.

// !with type casting // type-assertion
const element2=document.getElementById("userInput")! as HTMLInputElement
element2.value="You rock"