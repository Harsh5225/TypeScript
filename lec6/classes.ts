// Ek class ek blueprint hoti hai, jisme hum properties aur methods define kar sakte hain.



// name ek property hai jo string type ki hai.
// constructor(n: string) ka use karke name initialize kar rahe hain.
// describe() ek method hai jo department ka naam print karega.

// class Department{
//   name:string;
//   constructor(n:string){
//     this.name=n
//   }

//   describe(this: Department){
//     console.log("Department",this.name);
//   }
// }

// const accounting=new Department("Accounting");
// accounting.describe();


// const accountingCopy={
//   name:"Dummy",
//   describeCopy:accounting.describe

// }

// accountingCopy.describeCopy()


//! 🔹 2. Private & Public Access Modifiers

// class Department{
//   // public name:string;
//   // private employees:string[]=[];
//   // short hand
//   constructor(public name:string,private employees:string[]=[],n:string){
//     this.name=n
//   }
  
//   addEmployee(emp:string){
//     this.employees.push(emp);
//   }

//   printEmployeeInformation(){
//     console.log(this.employees)
//   }
 
// }


// const engineering=new Department("Engineering");

// engineering.addEmployee("Harsh")
// engineering.printEmployeeInformation();



// accounting.employees.push("Shivani"); ❌ ERROR (employees is private)



// 🔹 3. Readonly Property
// Agar kisi property ko sirf ek baar initialize karna hai aur baad me change nahi karna toh hum readonly use kar sakte hain.
// readonly

// class Department {
//   private readonly id: string; // Cannot be changed after initialization
//   public name: string;

//   constructor(n: string) {
//       this.name = n;
//       this.id = "d1"; // ✅ Allowed inside constructor
//   }

//   describe() {
//       console.log(`Department (${this.id}), ${this.name}`);
//   }
// }

// const accounting = new Department("Accounting");
// accounting.id = "d2"; 
// ❌ ERROR: Cannot assign to 'id' because it is a read-only property




// readonly id: string ka matlab hai ki id ko sirf ek baar assign kar sakte hain, uske baad nahi.



// 🔹 4. Inheritance (Parent-Child Classes)

// class Department{
//   protected employees:string[]=[];
//   constructor(public name:string){}

//   addEmployee(emp:string){
//     this.employees.push(emp);
//   }
 
//   printEmployeeInformation() {
//     console.log(this.employees);
// }
// }


// child class
// public reports: string[] automatically creates and initializes the reports property.

// class AccountingDepartment extends Department{
//   constructor(public reports:string[]){
//     super("Accounting") // Calling parent class constructor
//   }

//   addReports(report:string){
//     this.reports.push(report);
//   }
//   printReports() {
//     console.log(this.reports);
// }

// }

// const accDep = new AccountingDepartment([]); // Initialize with an empty array
// accDep.addReports("Bug Fix Report"); // Adds "Bug Fix Report" to reports array
// accDep.printReports(); // Prints: ["Bug Fix Report"]



//! protected keyword ka matlab hai ki ye property sirf class aur uske child classes ke andar access ho sakti hai.
class Department {
  protected employees: string[] = []; // Can be accessed in child classes
}

// class AccountingDepartment extends Department {
//   addEmployee(emp: string) {
//       this.employees.push(emp); // ✅ Allowed (protected property)
//   }
// }



// * Agar hume kisi private property ko safely access ya modify karna hai, toh hum getter & setter ka use karte hain.


class AccountingDepartment extends Department {
  private reports: string[] = [];

  // getter reports
  get getReports() {
      if (this.reports.length === 0) {
          throw new Error("No reports found!");
      }
      return this.reports;
  }

  set setReports(value: string) {
      if (!value) {
          throw new Error("Invalid report");
      }
      this.reports.push(value);
  }
}

const accDep = new AccountingDepartment();
accDep.setReports = "Code Review Error"; // Using setter
console.log(accDep.getReports); // Using getter



// Static methods class ke instance (object) ke bina directly class ke naam se call kiye ja sakte hain.
// class Department {
//   static getSalary() {
//       return { salary: 500000 };
//   }
// }

// console.log(Department.getSalary()); // ✅ Output: { salary: 500000 }

// static keyword ka use karke koi bhi method class ke object ke bina call kar sakte hain.
// Department.getSalary() bina new kiye call ho raha hai.




//! abstract classes

// *abstract class → Sirf inherit karne ke liye hoti hai, iska direct object nahi bana sakte.
// *abstract method → Ye sirf child class implement karegi, iska koi body nahi hota.
abstract class Department3{
  public name:string;
  protected employees:string[]=[];
  protected readonly id:string

  constructor(id:string,n:string){
    this.id=id
    this.name=n
  }

  abstract describe(this:Department3):void
}


class Subclass extends Department3{
  constructor(id:string,private reports:string[]){
    super(id,"Accounting")
  }
  describe(): void {
    console.log("Deparrment",this.id)
  }
}





