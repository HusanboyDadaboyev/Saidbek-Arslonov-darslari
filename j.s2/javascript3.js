// object nomi
const person={
    fullname:"Dadaboyev Husanboy",
    age:18,
    isStudent:true,
address:{
street:"uygurobod",
houseNumber:76,
}
    
}
//console.log(person);
//console.log(person.address.houseNumber,person.address.street);
const{fullname,age,isStudent,address:{street,houseNumber}}=person;
console.log(fullname,age,isStudent,street,houseNumber);
//datani stringga o'g'irish
//console.log(JSON.stringify(person));