//lecture-1 
// console.log("ankit ,hello");
// console.log("where are you from ");
// var names="ankit";
// var names="ankit555";
// var x=null;
// console.log(names+1);
// isfollow=true;
// console.log(isfollow);

// nam="ankit";
// NAM="KALBHOR";
// Country_name="INDIA";
// foriegncountry$name="japan";
// console.log(nam+NAM+Country_name+foriegncountry$name);
// let country="india";
//  country="indonesia";
// console.log(country)
// const central_state="mp"
// // central_state="up"
// console.log(central_state)
// let x=BigInt('236591445945643269');
// console.log(x);
// let Symbol="2416$$$$%&*(()"
// const student={
//   name:"ankit",
//   class:"5th",
//   age:8,
//   location:"germany"
// }

// student.name="kalbhor"
// console.log(student.name)
// console.log(student.age)
// console.log(student["age"])
/// object value assignement or update


// const product={
//   image:"url",
//   name:"parker jotter standard cT BALL PEN",
//   rating:5,
//   offer:"5% off",
//   price:555
// }

// console.log(product)

// const profile={
//   username:"ankit",
//   follow:true,
//   post:145,
//   follower:56700,
//   detail:"studing in sati vidisha college "

// }
// console.log(profile)
// console.log(typeof profile.username )
 
//lecture-2 //operator and conditional 
{
// let a=100;
// let b=20;
// let c=2;
// console.log(a%b); // modulo
// console.log(b**c)//b to power c
// console.log(c++);//postincreament
// console.log(++c);//preincrement
// console.log(c--);//postdecreament
// console.log(--c);//predecrement
}
// assignement operator
{
  // let a=2;

  // console.log(a*=4);
  // console.log(a/=4);
  // console.log(a%=4);
}
///comparison operator
{


}
//logical operator
{
  // let a=5;
  // let b=10;
  // console.log("logical operator",(5<10)&&(10>5));
  //   console.log("logical operator",(5<10)||(10>5));
}
//conditional statement

//ternary operator
// let age=18
// console.log(age>=18?"i can drive car":"i cant drive drink");
//mdn documentation
{
  // let age="18";
  // switch(age){
  //   case "18":
  //     console.log("i am 18 year old i can drive dring ");
  //     break;
  //   case "17":
  //     console.log("you can't drive")  
  //     break;
  // }
}

// let a=prompt("enter a number");
// if(a%5==0){
//   console.log("multiple of 5")
// }
// let score=prompt("enter the score:");
// if((score>=90 && score<=100)){
//   console.log("A")
// }else if((score>=70 && score<=89)){
//   console.log("B")
// }
//lecture-3 loop and string 


// for (let i=0;i<1000;i++){
// console.log("ankit")
// }
// // sum of 10 number
// let sum=0;
// for ( i=1;i<=5;i++){
// //i is block scope 
// sum+=i;
// }
//   console.log(sum)


// let i=1;
// // while(i<=10){
// //   console.log(i);
// //   i++;
// // }
// do{
//   console.log(i);
//   i++;
// }while(i<=16);

//for-of loop ,for-in loop


// let String="ankitkalbhor";
// for (let val of String){
//   console.log(val)
// }

// let student={
//   name:"ankit",
//   location:"vidisha",
//   age:19,
//   goal:"want to earn lots of money by doing stuff"
// }
// for (let val in student){
//   console.log(student[val]);
// }
// let i=0;
// while(i<=100){
//   if(i%2==0){
//     console.log("this is even number",i)
//   }
//   i++;
// }

//string 
// let str1="ankitkalbhor";
// console.log(str1.length)
// console.log(str1[0])//character access

// let obj={
//   item:"laptop",
//   price:500000
// };
// let literal=`the cost of ${obj.item} is ${obj.price} rupees`
// console.log(literal)
// let str ="     ankit   "
// console.log(str.toUpperCase())//method no change original string 
// console.log(str.trim())
// let str3="ANKITKALBHOR"
// console.log(str3.slice(5))
// console.log(str.concat(str3))
// console.log(str.replace("a","g"));
// let str4="indian"
// console.log(str4.charAt(str[0]))
let full_name=prompt("enter your full name");

let lg=full_name.length;
console.log(`${full_name}ankit${lg}`)