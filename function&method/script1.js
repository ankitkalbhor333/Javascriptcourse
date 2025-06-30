// function message(str){//parameter
//   console.log(str);  //function definition 

// }
// message("hii ankit"); //function call //argument

// function  sum(a,b){
//   s=a+b;  //local variable scope
//   return s;
// }
// let final=sum(1,2);
// console.log(final);


//arrow function
// let arrowfunction=(a,b)=>{
//   multiple=a*b;
//   console.log(multiple);
// } 
// console.log(arrowfunction);
// arrowfunction(10,100);
 
//   findvowel=(str)=>{
//   let count=0;
// for (const charcter of str){
 
//   if(charcter==="a"||
//     charcter==="e"||
//     charcter==="i"||
//     charcter==="o"||
//     charcter==="u"){
//  count++;
//   }
// }

// console.log(count)
//  }
//  findvowel("ankitkalbhor")

// function abc(){
//   console.log("hello");
// }
// function myfunc(a){
//   console.log(a)
// }
// myfunc(abc);

//forEach method
// let array=["ankit","kalbhor","germany","usa"]
// array.forEach((val,index,arr)=>{
//   console.log(val,index,array);
// })

//
// let arr=[2,4,6,8,10];
//  arr.forEach((value)=>{
//   console.log(value+value);
// })


//map
//create a new array with result of some operation.the value its callback return are used to form new array
// let array1=[2,5,6,2,7]
// let newarray=array1.map((value)=>{
//   return value*value
// })
// console.log(newarray)
// let array2=[1,2,3,4]
// // let newarray=array2.filter((val)=>{
// //   return val%2==0;
// // })
// // console.log(newarray)

// const output=array2.reduce((prev,cur)=>{
//   // console.log(prev,cur);
//   return prev>cur?prev:cur;
// })
// console.log("biggest number --"+ output)

// let marks=[90,46,80,91,98]

// let topper=marks.filter((val)=>{
//   return val>=90
// })
// console.log(topper)

let n=prompt("enter a number :")
let arr=[];
for (i=1;i<=n;i++){
   arr[i-1]=i;
}
console.log("your array",arr)

let finalsum=arr.reduce((prev,cur)=>{
  return prev + cur
})
console.log("sum",finalsum)

let finalproduct=arr.reduce((prev,cur)=>{
  return prev*cur
})
console.log("final product",finalproduct)