//? JS data Types//

//*PRIMITIVE //

//1.String//

{
  let name = "John";
  console.log(name);
  console.log("this is" + typeof name + "Data Type");
}

//2.Number//

{
  let age = 45;
  console.log(age);
  console.log(typeof age);
}

//3.Boolean//

{
  let statement = true;
  console.log(statement);
  console.log(typeof statement);
}

//4.Null//

{
  let test1 = null;
  console.log(test1);
  console.log(typeof test1);
}

//5.Undefined

{
  let test2 = undefined;
  console.log(test2);
  console.log(typeof test2);
}

//*Non-Primitive//

//1.Array

const arr = [10, 50, 60, 78, 65];
console.log(arr);
console.log(typeof arr);

//2.Object

const details = [(name = "John"), (age = 22)];
console.table(details);
console.log(typeof details);
