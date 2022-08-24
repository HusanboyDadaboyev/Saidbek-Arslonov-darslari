function Abdurahmon() {
    const name = document.getElementById("name");
    const weightval = document.getElementById("weight");
    const heightval = document.getElementById("height");
 const husanboy = document.querySelector("#result");
    const weight = parseFloat(weightval.value);
    const height = parseFloat(heightval.value);

let bmi = (weight / (height*height)).toFixed(2);
husanboy.textContent = ` ${name.value}'s Bmi is ${bmi} `;

}














//function calculatebmi(name, weight , height ) {
    //let bmi = weight / (height*height)
    //console.log(name+"'s bmi is"+bmi);

//}
//calculatebmi("usmon",80 ,1.8);
//calculatebmi("ali",80 ,1.8);
//calculatebmi("madaminjon",80 ,1.8);








//DOM = document object model

//const sit = document.getElementById("is");
//const ab = document.querySelector("#click")
//const ma = document.querySelector(".myinput")
//console.log(ma.value);
//sit.innerHTML="<span class='bg-dark'>husanboy</span>"
//sit.textContent="this is just a text ";
//sit.className="new-class"
//console.log(sit);
//console.log(ab);
//console.log(ma);
