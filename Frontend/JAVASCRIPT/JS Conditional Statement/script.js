//! JS Conditional Statement

//? if Statement

let Word = true;

if (Word) {
  console.log("Hello");
}

//? if else Statement

let age = 19;

if (age > 18) {
  console.log("Your Allowed");
}
else{
  console.log("Your not allowed" );
  
}

//? else if statement

let age1 = 50;
if (age1 >= 18) {
  console.log("Your allowed");
  
}
else if(age1 <= 18){
  console.log("Your not allowed");
  
}
else{
  console.log("Invaild");
}


//? Switch Statement

let age3 =18;
switch (age3) {
  case 17:
    console.log("ur young");
    break;
  case 18:
    console.log("perfect age");
    break;
  case 19:
    console.log("too old");
    break;
  default:
    console.log("invaild"); 
    break;
}