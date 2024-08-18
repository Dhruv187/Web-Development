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

//! Slice Operation

let word6 = "this is my javascript code";
const sliceword = word6.slice(0, 5);
console.log(sliceword);

//! Split Operation

//? Split Operation by using Character

let word7 = "Hello, Word";
const word8 = word7.split(",");
console.log(word8);

//! IndexOf Operation

let word11 = "Hello World";
const word12 = word11.indexOf("Hello");
console.log(word12);

//! String Trim

let word13 = "             Hello World        ";
const word14 = word13.trim();
console.log(word14);

//! String Replace

let word15 = "Hello Word";
const word16 = word15.replace("Word", "World");
console.log(word16);

//! String LastIndexOf

let word17 = "Hello Word";
const word18 = word17.lastIndexOf("Hello");
console.log(word18);

//! String Include

let word19 = "Hello Word";
const word20 = word19.includes("Hello");
console.log(word20);
