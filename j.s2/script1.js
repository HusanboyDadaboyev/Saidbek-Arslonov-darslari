const students = [
    {fname:"JOHN DOE",
    AGE:23,
    gradiate:false
},
{fname:"sia bhat ",
AGE:23,
gradiate:true
},
{fname:"iolu smit",
AGE:23,
gradiate:true
},

]
//console.log(students.length);
for(let i = 0; i< students.length; i++){
    console.log(i);
    console.log(students[i]);
   // console.log(students[i].fname); // bunda faqat ismlarni chiqarib beradi
}
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