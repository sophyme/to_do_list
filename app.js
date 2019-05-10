// Select elements
/*
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input"); */

// Add a to-do
const list = document.getElementById("list");

function addToDo(toDo) {
  const text = `
     <li class="item">
            <i class="co far fa-circle" job="complete" />
            <p class="text"> ${toDo} </p>
            <i class="de far fa-trash-alt" job="delete" />
     </li>`;

  const position = "beforeend";

  list.insertAdjacentHTML(position, text);
}

document.addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    const toDo = input.value;
    if (toDo) {
      addToDo(toDo);
    }
    input.value = "";
  }
});
