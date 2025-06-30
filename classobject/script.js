const student={
  fullName:"ankit kalbhor",
  marks:98,
  printmarks:function(){
    console.log("marks=",marks);
  }
}
const employe={
  caltex(){
    console.log("tax rate is 10%");
  },
}
const ankit={
  name:"ankitkabbhor",
}
ankit.__proto__=employe;