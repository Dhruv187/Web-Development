//! String Concatenation

//? Operator

let name = "Reed";
let surname = "richards";

const text = name + surname;
console.log(text);

//? Concat

let text1 = "Hello";
let text2 = "World";

const text3 = text1.concat(text2);

//? Template Literal

let text4 = "Emma";
let text5 = "Frost";

const text6 = `${text4}  ${text5}`;
console.log(text6);

//! ToLowerCase & UpperCase

//? ToLowerCase

const word = "HELLO WORLD";
const word2 = word.toLocaleLowerCase();
console.log(word2);

//? ToUpperCase

const word3 = "hello world";
const word4 = word.toLocaleUpperCase();
console.log(word4);

//! String Length

//? String Length

const word5 = "Harry";
const strlength = word5.length;
console.log(word5, strlength);

//? Length Validation

const string1 = "Bruce";
if (string1.length <= 5) {
  console.log("vaild username");
} else {
  console.log("invaild username Retry");
}
