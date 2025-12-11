function api1(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("data");
      resolve("success")
    },4000);
  });
 }
 async function getWeatherData(){
  await api1();   /// execution of this will untill api1 complete it all task
  console.log("waiting now ....")
    await api1();
 }
 getWeatherData();
// (async function(){
//   console.log("getting data 1 ");
//   await api1();
//   console.log("getting data  2")
//   await api2();
// })();