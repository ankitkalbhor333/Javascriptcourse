// let output=document.getElementById("name");
// console.dir(output);
// let output1=document.getElementsByClassName("myclass")
// console.dir(output1);
// let output2=document.getElementsByTagName("p");
// console.dir(output2)

// let o=document.querySelector("p");
// console.dir(o);
// let run=document.querySelector("div");
// console.dir(run);
// let run1=document.querySelectorAll(".div");
// // console.dir(run1);
// let idx=0;
// for( val of run1){
//  val.innerText=`new text ${idx}`
// idx++;
// } 
//  let run=document.querySelector(".div");
//  console.log(run.getAttribute("class"));
//  console.log(run.setAttribute("class","class_div"));
//  console.log(run.style.backgroundColor=("red"));

let newBtn=document.createElement("button");
newBtn.innerText="click me";
newBtn.style.color=("white");
newBtn.style.backgroundColor=("orange");
console.log(newBtn);
let select=document.querySelector("body");
select.prepend(newBtn);

let another=document.querySelector("h1");
another.classList.add("nwclass");
another.classList.remove("nwclass");












// let heading=document.createElement("h1");
// heading.innerText="welcome ";
// select.before(heading);



