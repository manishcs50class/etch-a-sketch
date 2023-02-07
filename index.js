const container = document.getElementById("container");

function createGrid(rows, cols) {
    // for (let i = 0; i < 16; i++) {
    //     for (let j = 0; j < 16; j++) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    // create rows * cols number of cells inside container div
    for (cellCount = 0; cellCount < (rows * cols); cellCount++) {
        let cell = document.createElement("div");
        cell.innerText = (cellCount + 1);
        container.appendChild(cell).className = "grid";
    };
};
createGrid(16, 16);