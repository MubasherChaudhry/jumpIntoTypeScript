// Code goes here!

class Department {
  name:string;

  constructor (n:string) {
    this.name=n;
  }
}

// how we can creat a new Department by using the class we created


const accounting=new Department('Accounting')
console.log(accounting);
//this new class will call the constructor method that we created before!

