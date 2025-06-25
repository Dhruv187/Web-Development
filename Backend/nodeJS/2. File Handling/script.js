let fs = require("fs");

//! Sync File Writing

fs.writeFileSync("text.txt", "First Written File");

//! ASync File Writing

fs.writeFile("text1.txt", "Second Written File", (err) => {});

//! Sync File Reading

let result1 = fs.readFileSync("text.txt", "utf-8");
console.log(result1);

//! Async File Reading

let result2 = fs.readFile("text1.txt", "utf-8", (err, result2) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result2);
  }
});

//! Sync File Append

fs.appendFileSync("text.txt", "  This is a Sync File");

//! Async File Append
fs.appendFile("text1.txt", "  This is a Async File", (err) => {});

//! The main difference between Sync and Asyc is that in Sync type is no callback function is required but in Asyc type required a callback fumction for its functioning
