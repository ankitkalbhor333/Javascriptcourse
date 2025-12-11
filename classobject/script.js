// const student={
//   fullName:"ankit kalbhor",
//   marks:98,
//   printmarks:function(){
//     console.log("marks=",marks);
//   }
// }
// const employe={
//   caltex(){
//     console.log("tax rate is 10%");
//   },
// }
// const ankit={
//   name:"ankitkabbhor",
// }
// ankit.__proto__=employe;
// class car{
//   constructor(brand,mileage){
//     this.brand=brand;
//     this.mileage=mileage;
//   }
//   start(){
//     console.log("start");
//   }
//   stop(){
//     console.log("stop");
//   }
//   setBrand(brand,mileage){
//     this.brand=brand;
//     this.mileage=mileage;
//   }
// }
// let fortuner=new car("fortuner",11);

// let honda=new car();
// honda.setBrand("honda",10)

class Person{
  constructor(branch){
    console.log("enter parent constructor");
    this.species="homo sapiens";
    this.branch=branch;
  }
  eat(){
    console.log("eat");
  }
}
class Engineer extends Person{
  constructor (branch){
    super(branch);//to invoke parent class constructor
  }
  work(){
    super.eat();
    console.log("solve problem, build something");
  }
}
 let enobj=new Engineer("it");