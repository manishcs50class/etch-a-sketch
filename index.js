const container = document.getElementById("container");

//Getting user input for number of rows
let inputRows;
function getInputFromUser() {
  inputRows = prompt("Enter No. of Rows");
  container.replaceChildren();

  createGrid(inputRows, inputRows);
}

//resetting the grid
function resetGrid() {
  container.replaceChildren();
  createGrid(inputRows, inputRows);
}

function colorGradient() {}

function getRandomRGBColor() {
  var red = Math.floor(Math.random() * 256); // range is 0-255
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
}

function createGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  // create rows * cols number of cells inside container div
  for (cellCount = 0; cellCount < rows * cols; cellCount++) {
    let cell = document.createElement("div");
    // Cells are unique because we have to change color individually
    cell.setAttribute("id", cellCount + 1);

    // Make cells visible.
    cell.style.border = "0.1em solid black";
    cell.style.background = "white";
    cell.style.padding = "1em";

    container.appendChild(cell).className = "grid";

    // change the color of individual cells to black.
    container.addEventListener("mouseover", (event) => {
      event.target.style.background = getRandomRGBColor();
    });
  }
}
