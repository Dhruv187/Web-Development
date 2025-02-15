let btns = document.querySelectorAll("button");
console.dir("btns");

function sayhello() {
  alert("hello");
}
function saybye() {
  alert("bye");
}

//for (btn of btns) {
btn.addEventListener("click", sayhello);
//}

// Event Listener (Elements)

let newp = document.querySelector(".newp");

newp.addEventListener("click", () => {
  console.log("para was clicked");
});

// (This) Events Listener

let bt = document.querySelector("#btn");

bt.addEventListener("click", function (Event) {
  console.log(event);
  this.style.color = "blue";
});

// Keyboard Events

let inp = document.querySelector(".input1");

inp.addEventListener("keydown", function (event) {
  console.log(event);
  console.log("key pressed =", event.code);

  if (event.code == "ArrowUp") {
    console.log("Moving Forward");
  } else if (event.code == "ArrowDown") {
    console.log("Moving Downwards");
  }
});

// Forms Events

let form = document.querySelector("form");
let user = document.querySelector(".user");
let pass = document.querySelector(".pass");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Form Submitted");
  console.log("this is the username", user.value);
  console.log("this is the password", pass.value);
  console.dir(event);
});

//More Events
let input2 = document.querySelector(".input2");
let p1 = document.querySelector(".p1");

input2.addEventListener("input", function () {
  p1.innerHTML = input2.value;
});

//Event Bubbling

let div = document.querySelector(".div");
let ul = document.querySelector(".ul");
let li = document.querySelectorAll(".li");

div.addEventListener("click", () => {
  console.log("div was clicked");
});

ul.addEventListener("click", () => {
  console.log("ul was clicked");
});

li.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("li was clicked");
  });
});
