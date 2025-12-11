//  const URL="https://dogapi.dog/api-docs/v2/swagger.json";
// let apis=document.querySelector("#api");
// let btn=document.querySelector("#btn");
// const getAPI=async()=>{
//   console.log("getting data ....");
//      let response=await fetch(URL);
//      console.log(response);
//      let data=await response.json();
//      const datas=data.info
//     console.log(datas.description)
//     apis.innerText=datas.description;
// }

// btn.addEventListener("click",getAPI)



  const currencyList = {
  AFN: "AF",
  ALL: "AL",
  DZD: "DZ",
  USD: "AS", // First match from your list
  EUR: "AD",
  AOA: "AO",
  XCD: "AG",
  ARS: "AR",
  AMD: "AM",
  AUD: "AU",
  AZN: "AZ",
  BSD: "BS",
  BHD: "BH",
  BDT: "BD",
  BBD: "BB",
  BYN: "BY",
  BZD: "BZ",
  XOF: "BJ",
  BTN: "BT",
  BOB: "BO",
  BAM: "BA",
  BWP: "BW",
  BRL: "BR",
  BND: "BN",
  BGN: "BG",
  BIF: "BI",
  KHR: "KH",
  XAF: "CM",
  CAD: "CA",
  CVE: "CV",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  KMF: "KM",
  CDF: "CD",
  CRC: "CR",
  CUP: "CU",
  CZK: "CZ",
  DKK: "DK",
  DJF: "DJ",
  DOP: "DO",
  EGP: "EG",
  ERN: "ER",
  SZL: "SZ",
  ETB: "ET",
  FJD: "FJ",
  GEL: "GE",
  GMD: "GM",
  GHS: "GH",
  GTQ: "GT",
  GNF: "GN",
  GYD: "GY",
  HTG: "HT",
  HNL: "HN",
  HUF: "HU",
  ISK: "IS",
  INR: "IN",
  IDR: "ID",
  IRR: "IR",
  IQD: "IQ",
  ILS: "IL",
  JMD: "JM",
  JPY: "JP",
  JOD: "JO",
  KZT: "KZ",
  KES: "KE",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KGS: "KG",
  LAK: "LA",
  LBP: "LB",
  LSL: "LS",
  LRD: "LR",
  LYD: "LY",
  CHF: "LI",
  MGA: "MG",
  MWK: "MW",
  MYR: "MY",
  MVR: "MV",
  MRU: "MR",
  MUR: "MU",
  MXN: "MX",
  MDL: "MD",
  MNT: "MN",
  MAD: "MA",
  MZN: "MZ",
  MMK: "MM",
  NAD: "NA",
  NPR: "NP",
  NZD: "NZ",
  NIO: "NI",
  NGN: "NG",
  MKD: "MK",
  NOK: "NO",
  OMR: "OM",
  PKR: "PK",
  PAB: "PA",
  PGK: "PG",
  PYG: "PY",
  PEN: "PE",
  PHP: "PH",
  PLN: "PL",
  QAR: "QA",
  RON: "RO",
  RUB: "RU",
  RWF: "RW",
  WST: "WS",
  STN: "ST",
  SAR: "SA",
  RSD: "RS",
  SCR: "SC",
  SLL: "SL",
  SGD: "SG",
  SBD: "SB",
  SOS: "SO",
  ZAR: "ZA",
  SSP: "SS",
  LKR: "LK",
  SDG: "SD",
  SRD: "SR",
  SEK: "SE",
  SYP: "SY",
  TWD: "TW",
  TJS: "TJ",
  TZS: "TZ",
  THB: "TH",
  TOP: "TO",
  TTD: "TT",
  TND: "TN",
  TRY: "TR",
  TMT: "TM",
  UGX: "UG",
  UAH: "UA",
  AED: "AE",
  GBP: "GB",
  UYU: "UY",
  UZS: "UZ",
  VUV: "VU",
  VES: "VE",
  VND: "VN",
  YER: "YE",
  ZMW: "ZM",
  ZWL: "ZW"
};

const dropdown=document.querySelectorAll(".dropdown select")
 let btn=document.querySelector("#btn");
const from=document.querySelector(".from select");
const to=document.querySelector(".to select");
const msg=document.querySelector(".msg");

const base_url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

for (let select of dropdown){
  for (code in currencyList){
    console.log(code,currencyList[code])
 let newoption=document.createElement("option");
 newoption.innerText=code;
 newoption.value=code;
 select.append(newoption);
 if(select.name ==="from" && code==="USD"){
  newoption.selected="selected"
 }else if(select.name ==="to" && code==="INR"){
  newoption.selected=="selected"
 }
  }

  select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
  })
}

const updateFlag=(element)=>{
  let code=element.value;
  let countrycode=currencyList[code];
  let newsrc=`https://flagsapi.com/${countrycode}/shiny/64.png`
  let img=element.parentElement.querySelector("img");
  img.src=newsrc;
} 


// btn.addEventListener("click",async (evt)=>{
//   evt.preventDefault();
//   let amount=document.querySelector(".amount input");
//   let amtval=amount.value;
//   if(amtval ===""|| amtval<1){
//     amtval=1;
//     amount.value="1"
//   }



// const url=`${base_url}/${from.value.toLowerCase()}/${to.value.toLowerCase()}/.json`

// let response=await fetch(url);
// let data=await response.json();
// let rate=data[to.value.toLowerCase()];
// // let rate=85.75;
// let finalAmount=amtval*rate;
// msg.innerText=`${amtval}${from.value}=${finalAmount} ${to.value}`
// }
// )
btn.addEventListener("click", async (evt) => {
  evt.preventDefault();

  let amount = document.querySelector(".amount input");
  let amtval = amount.value;

  if (amtval === "" || amtval < 1) {
    amtval = 1;
    amount.value = "1";
  }

  const fromCurr = from.value;
  const toCurr = to.value;

  const apiKey = "fca_live_gZvn89ZXZSlw7HSuZ70u66aqnyD2yCksbJfdV8Qf";
  const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&currencies=${toCurr}&base_currency=${fromCurr}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const rate = data.data[toCurr];
    const finalAmount = (amtval * rate).toFixed(2);

    msg.innerText = `${amtval} ${fromCurr} = ${finalAmount} ${toCurr}`;
  } catch (error) {
    msg.innerText = "Something went wrong. Try again later.";
    console.error("API Error:", error);
  }
});
