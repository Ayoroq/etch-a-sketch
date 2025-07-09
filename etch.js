const container = document.querySelector(".container");
const clear = document.querySelector(".clear");
const resize = document.querySelector(".resize");

let gridSize = 16;

// function to create grid
function createGrid(gridSize) {
  //first clear the grid
  container.innerHTML = "";
  //create the grid
  for (let i = 1; i <= gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 1; j <= gridSize; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
    }
    container.appendChild(row);
  }
  displayColours();
}

const colours = [
  "green",
  "blue",
  "red",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
];

// add colours and increase the opacity
function displayColours() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      const style = getComputedStyle(square);
      if (Number(style.opacity) < 1) {
        square.style.opacity = parseFloat(style.opacity) + 0.1;
      }
      const randomColour = colours[Math.floor(Math.random() * colours.length)];
      if (!square.style.backgroundColor) {
        square.style.backgroundColor = randomColour;
      }
    });
  });
}

//event listener to resize the grid
resize.addEventListener("click", () => {
  let newSizeInput = prompt("Enter a new grid size (1-100):");
  if (newSizeInput === null) return; // User clicked "Cancel"

  const newSize = parseInt(newSizeInput, 10);

  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Invalid input. Please enter a number between 1 and 100.");
  } else {
    gridSize = newSize;
    createGrid(gridSize);
  }
});

//event listener to reload the page with the current configuration
clear.addEventListener("click", () => {
  createGrid(gridSize);
});

createGrid(gridSize);
