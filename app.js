// Select the Elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const LINE_THROUGH = "lineThrough";

// Variabled
let LIST, id;

// Show todays date
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// Add to do function

function addToDo(toDo, id, done, trash) {
  if (trash) {
    return;
  }

  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";

  const item = `<li class="item">
                <i class="far ${DONE} co" job="complete" id="${id}"></i>
                <p class="text ${LINE}">${toDo}</p>
                <i class="far fa-trash-alt" job="delete" id="${id}"></i>
            </li>`;
  const position = "beforeend";

  list.insertAdjacentHTML(position, item);
}

// add an item to the list user the enter key
document.addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    const toDo = input.nodeValue;

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
  }
});

addToDo("Coffee", 1, false, false);
