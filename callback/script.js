// console.log("one");
// console.log("two");
// setTimeout(()=>{
//   console.log("hello");
// },1000);
// console.log("three");
// console.log("fourth");
// function sum(a,b){
//   console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//   console.log("calculate the sum:")
//   sumCallback(a,b);
// }
// calculator(1,2,sum);
// calculator(1,2,(a,b)=>{
//   console.log(a+b);
// })

//callback hell -nested callback stacked below one another forming a pyramid structure (pyramind of doom)

function getData(dataId,getNextData){
  setTimeout(()=>{
    console.log("data",dataId);
    if(getNextData){
      getNextData();
    }
  },2000);
}
getData(1,()=>{
  getData(2,()=>{
    getData(3,()=>{
    getData(4); 
  });
  });
}) 

  //promises

let promises=new Promise((resolve,reject)=>{
  console.log("I am a promise");
  reject("some error occured ");
});

const getPromise=()=>{
  return new Promise((resolve,reject)=>{
    console.log("i am a promise");
    resolve("success");
  })
}
let promise =getPromise();

promise.then((res)=>{
  console.log("promise fulfilled",res);
})
promise.catch((err)=>{
  console.log("reject",err)
})
 function asyncFun1(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("data");
      resolve("success")
    },4000);
  });
 }
  function asyncFun2(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("data");
      resolve("success")
    },4000);
  });
 }
 
console.log("fetching data 1....")
 let p1=asyncFun1();
 p1.then((res)=>{
  console.log(res);
  console.log("fetching data 2....")
  
  let p2=asyncFun2();
 p2.then((res)=>{
  console.log(res);
 })
 })
 
