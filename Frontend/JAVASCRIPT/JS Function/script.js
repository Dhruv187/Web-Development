//! Higher Order Function

function multiplegreet(func, n) {
  for (let i = 1; i <= n; i++) {
    func();
  }
}
let greet = function () {
  console.log("hello");
};
multiplegreet(greet, 50);

//? Higher order return

function oddevenrequest(request) {
  if (request == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("Worng request");
  }
}
let request = "odd";

const arr = ["apple", "mango", "banana"];

arr.forEach(function (fruits) {
  console.log(fruits);
});

let arr2 = [1, 2, 3, 4];
arr2.map(function (el) {
  console.log(el * 10);
});

const age = [15, 20, 88, 18, 14];
const new4 = age.filter(function (age) {
  return age > 18;
});

let arr3 = [1, 2, 3, 4, 5];
const new5 = arr3.reduce((res, el) => res + el);
console.log(new5);
