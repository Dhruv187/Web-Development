let todo = [];

let req = prompt("Enter the request");

while (true) {
  if (req == "quit") {
    alert("quit");
    break;
  }
  if (req == "list") {
    alert("--------");
    for (i = 0; i < todo.length; i++) {
      alert(todo[i]);
    }
    alert("---------");
  } else if (req == "add") {
    let task = prompt("Enter the task you want to add");
    todo.push(task);
    alert("task added");
  } else if (req == "delete") {
    let idx = prompt("Enter the index u want to delete");
    todo.splice(idx, 1);
    alert("deleted");
  }
  req = prompt("Enter the request");
}
