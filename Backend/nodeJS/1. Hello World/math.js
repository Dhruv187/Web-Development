function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}
//! Normal Function
module.export;

//! We create a object when we have multiple function to export
module.exports = {
  addFn: add,
  subFn: sub,
  mulFn: mul,
  divFn: div,
};

//! We can also export function using arrow function

exports.add1 = (a, b) => a + b;
