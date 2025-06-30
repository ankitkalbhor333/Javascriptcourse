
// btn1.onclick=(e)=>{
//   console.log("clicked")
//   console.log(e);
//    console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// }
// let body=document.querySelector("body")
// let curmode="light"
// btn1.addEventListener("click",(e)=>{
//   if(curmode==="light"){
//     curmode="dark";
//     btn1.style.backgroundColor="black"
//     body.style.backgroundColor="black"
//       btn1.style.color="white"
//   }
//   else{
//     curmode="light";
//     btn1.style.backgroundColor="white"
//     body.style.backgroundColor="white"
//       btn1.style.color="black"
//   }
// console.log(curmode)
// })

let btn1=document.querySelector("#btn");
let body=document.querySelector("body");

btn1.addEventListener("mouseover",(e)=>{
body.style.backgroundColor="black";
btn1.style.color="black";
})
btn1.addEventListener("mouseout",(e)=>{
body.style.backgroundColor="white";

btn1.style.backgroundColor("white");
})