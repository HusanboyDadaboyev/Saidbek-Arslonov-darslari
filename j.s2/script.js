//data types nomi
 // string ,number, boolean ,null,undefined,object,array nomlari
//string nomi
//const streetName = "presindent St";
//number nomi
//const houseNumber = 157;
//boolean nomi
//const isMarried = false;
//null nomi
//const age = null;
//undefined nomi 
//const lname = undefined;
//console.log(typeof age);
//const tenant = "john doe"
//console.log(`${tenant} lives in ${streetName}at house number ${houseNumber}`)
//array nomi 
//const cars = ["audi","bnw","tesla"];
//console.log(cars);
//cars.push("tayota");
//console.log(cars);
// object nomi
//const person={
    //fullname:"Dadaboyev Husanboy",
    //age:18,
  //  isStudent:true,
//address:{
//street:"uygurobod",
//houseNumber:76,
//}
    
//}
//console.log(person);
//console.log(person.address.houseNumber,person.address.street);
//const{fullname,age,isStudent,address:{street,houseNumber}}=person;
//console.log(fullname,age,isStudent,street,houseNumber);
//datani stringga o'g'irish
//console.log(JSON.stringify(person));
//if elseni oddiy usuli
//const x =22;
//const y =24;
//if(x=>y){
//console.log("husanboy");
//}else{
//console.log("abdurahmon");
//}
//bu esa sal murakab usuli bunda ikkita barobar ishlatiladi bu ikki string va oddiy sonniham birhil qilib oladi bunda husanboyni yani true ni kiqarib beradi
//const x ="22";
//const y =22;
//if(x==y){
//console.log("husanboy");
//}else{
//console.log("abdurahmon");
//}
// bu eas uchta barobarligi bu esa abdurahmonga o'tib ketadi chunqi bunda data turi birxil bo'lishi kerak
//const x ="22";
//const y =22;
//if(x===y){
//console.log("husanboy");
//}else{
//console.log("abdurahmon");
//}
//bu esa if else orqali talabani bahoni chiqarib berish 
//const abdurahmonball =89;
//if(abdurahmonball>=90 ){
//console.log("grand");
//} else if (abdurahmonball <90 && abdurahmonball>=80) {
//console.log("grand");
//}  else if (abdurahmonball <80 && abdurahmonball>=70) {
 // console.log("kantrakt");
 // }  else if (abdurahmonball <70 && abdurahmonball>=60) {
   // console.log("kantrakt");
    //}  else if (abdurahmonball <60 && abdurahmonball>=50) {
     // console.log("kantrakt");
     // }else{
      //  console.log("harakat qilin keyingi yilga"); }
      //YANA BIR USULI BOR || yoki degani bunda bittasi to'gri kelsa bo'ldi abdurahmon bali 50 balat lekin 80 kichiq emas shunda ham husanboyni kiqarib beryapti chun bittasiga togri keldi
     //entireni tepasidegi chiziqchani beradi 
  
       // const abdurahmonball =89;
//if (abdurahmonball> 50 || abdurahmonball<80) {
  //console.log("husanboy");
//} else {
 // console.log("abdurahmon");
//}
//bu yangicha if else faqat bu 2ta holagagina ishlaydi if yoki elsega boshqa va yoki deganarni qoshib bolmaydi b javob chiqadi
    //  const abdurahmonbaling =62;
     // const result = abdurahmonbaling > 70 ? "a" : "b" ;
     // console.log(result);
//bu greet yani yani bir if else
//function greet (time){
 // switch (time) {
     // case "morning":
      //console.log("good morning");
    //  break;
     // case "afternoon":
   //   console.log("good afternoon");
  //break;
  //case"evening":
  //console.log("good evening");
  //break;
  //}
  //}
  //greet("morning")
  //const students = [
   // {fname:"JOHN DOE",
   // AGE:23,
   // gradiate:false
//},
//{fname:"sia bhat ",
//AGE:23,
//gradiate:true
//},
//{fname:"iolu smit",
//AGE:23,
//gradiate:true
//},

//]
//console.log(students.length);
//for(let i = 0; i< students.length; i++){
  //  console.log(i);
   // console.log(students[i]);
   // console.log(students[i].fname); // bunda faqat ismlarni chiqarib beradi
//}
//bu senga kop malumot kelsa raqamlab beradi
//yana bir yoli bor bu gradiate ga  filter breasan 
//const gradiate = students.filter(function(student) {
 // return student.gradiate === true;
//}).map(function(s) {
  //return s.fname
//})
//console.log (gradiate);
//console.log(students);
//filter senga filter qilib true ni tallab olib beradi false yozen falseni beradi map esa  fnamelarini chiqaradi yani ismlarini age yani yoshi yozsen yoshini   beradi return esa javoblarini chiqarib beradi
//googldan qirib top array function ,foreach,splice,slice,filter,map, bular muhum mukkamal organ
// yana bir element  
//function addNum(){
 // console.log("function works");
//}
//addNum();//shuni yozsen function works degan yozuv chiqadi honpychdegi consoleda
//shu funcsia bilan qalqulater qilsa boladi
//function addNum (num1, num2){
 // console.log(num1 +num2);
//}
//addNum(12, -33);
//addNum(126, 3354);
//addNum(126, 433);
//HUDU SHUNI S6 DA QILISH YOLI
const multiplyNums = (n1, n2) => {
  console.log(n1 + n2);
}
multiplyNums (12, 43)