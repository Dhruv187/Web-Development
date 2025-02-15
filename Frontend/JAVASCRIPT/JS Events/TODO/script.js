let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerHTML = inp.value;
  let dlt = document.createElement("button");
  dlt.innerText = "Delete";
  item.appendChild(dlt);

  ul.appendChild(item);
  item.style.color = "white";
  item.style.fontFamily = "Cambria";
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let list = event.target.parentElement;
    list.remove();
  }
});
