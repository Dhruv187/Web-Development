//--Variables--//
//!--Var--//

var name = "John";
age = 25;
console.log(name, age);

//*--Const--//
const marks = 55;
console.log(marks);
//--Const can not be redeclared but pushed--//
const arr = [10, 20, 30, 50];
arr.push = [40];
console.log(arr);

//?--let--//
//--same as var but block leveled//
{
  let place = "UK";
  console.log(place);
}
