function  it() {
    const name = document.getElementById("ismi");
    const weightval = document.getElementById("eni");
    const heightval = document.getElementById("bo'yi");
   const hi= document.querySelector("#chiqish");
   const weight = parseFloat(weightval.value);
   const height = parseFloat(heightval.value);

let xiu = (weight / (height*height)).toFixed(2);
 if (xiu<18.5 ){
    console.log("you under wight");
   } else if (xiu< 24.9 && xiu>18.5 ){
   console.log("you bmi normal");
   }
   else if (xiu<29.9 && xiu>24.9)
   {
       console.log("you bmi over wight");
       
   } else {
   console.log("obesity");
   } 

 hi.textContent = ` ${name.value}'s Bmi is ${xiu} `;
 
 
 


}