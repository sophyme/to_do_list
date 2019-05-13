// Select elements
/*
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input"); */

// Add a to-do
const list = document.getElementById("list");
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const LINE_THROUGH = "lineThrough";

function addToDo(toDo, id, done, trash) {
  if (trash) {
    return;
  }

  const DONE = done ? CHECK : UNCHECK;
  const LINE = dond ? LINE_THROUGH : "";

  const text = `
     <li class="item">
            <i class="far ${DONE} co" job="complete" id="${id}"></i>
            <p class="text ${LINE}"> ${toDo} </p>
            <i class="far fa-trash-alt de" job="delete" id="${id}"></i>
     </li>`;

  const position = "beforeend";

  list.insertAdjacentHTML(position, text);
}

document.addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    const toDo = input.value;
    if (toDo) {
      addToDo(toDo, id, false, false);
      LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false
      });
    }
    input.value = "";
    id++;
  }
});

element.classList.toggle(CLASS);

function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
  LIST[element.id].done = LIST[element.id].done ? false : true;
}

function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].trash = true;
}
