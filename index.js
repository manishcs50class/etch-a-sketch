const container = document.getElementById("container");

function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    // create rows * cols number of cells inside container div
    for (cellCount = 0; cellCount < (rows * cols); cellCount++) {
        let cell = document.createElement("div");
        // Cells are unique because we have to change color individually
        cell.setAttribute("id", cellCount + 1);

        // Make cells visible.
        cell.style.border = "0.1em solid black";
        cell.style.background = "white";
        cell.style.padding = "1em"

        container.appendChild(cell).className = "grid";

        // change the color of individual cells.
        container.addEventListener("mouseover", (event) => {
            event.target.style.background = 'black';
        });

    };
};
createGrid(16, 16);