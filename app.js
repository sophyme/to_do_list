// Select elements
/*
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input"); */

// show todays date
const dateElement = document.getElementById("date");

let options = { weekday: "long", month: "short", day: "numeric" };
let today = new Date();

dataElement.innerHTML = today.toLocaleDateString("en-US", optinos);

// class names
const list = document.getElementById("list");
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const LINE_THROUGH = "lineThrough";

//add to do function
function addToDo(toDo, id, done, trash) {
  if (trash) {
    return;
  }

  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";

  const text = `
     <li class="item">
            <i class="far ${DONE} co" job="complete" id="${id}"></i>
            <p class="text ${LINE}"> ${toDo} </p>
            <i class="far fa-trash-alt de" job="delete" id="${id}"></i>
     </li>`;

  const position = "beforeend";

  list.insertAdjacentHTML(position, item);
}

document.addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    const toDo = input.value;

    // if the input isn't empty
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

const list = document.getElementById("list");
list.addEvenetListener("click", function(event) {
  let element = event.target;
  const elementJOB = event.target.attribute.job.value;
  if (elementJOB == "complete") {
    completeToDo();
  } else if (elementJOB == "delete") {
    removeToDo();
  }

  // update local storage
  localStorage.setItem("key", "value");
  let variabel = localStorage.setItem("key");
  localStorage.setItem("TODO", JSON.stringify(LIST));
});

let data = localStorage.getItem("TODO");
if (data) {
  LIST = JSON.parse(data);
  loadToDo(LIST);
  id = LIST.length;
} else {
  LIST = [];
  id = 0;
}

function loadToDo(array) {
  array.forEach(function(item) {
    addToDo(item.name, item.id, item.done, item.trash);
  });
}

const clear = document.querySelector(".clear");
clear.addEventListener("click", function() {
  localStorage.clear();
  location.reload();
});
