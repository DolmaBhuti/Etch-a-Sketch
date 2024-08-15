//1. get reference to grid-container div
const gridContainer = document.querySelector(".grid-container");
const gridDimension = 400;
let squareDiv;

//3.  hover effect.  when a square is entered, change the background color
function addHoverEffect(node) {
  node.addEventListener("mouseover", () => {
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = `.color { background: ${generateNewColor()}; }`;
    document.head.appendChild(style);
    node.classList.replace("square", "color");
  });
}

function generateNewColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
}
//2. while (count <= num * num)
//   create a div
function createSquare(numOfSquares) {
  console.log("in create Square");
  const dim = gridDimension / numOfSquares;

  console.log("width and height: " + dim);
  for (let i = 0; i < numOfSquares * numOfSquares; i++) {
    squareDiv = document.createElement("div");
    squareDiv.style.cssText = `width: ${dim}px; height: ${dim}px`;
    squareDiv.classList.add("square");

    //create hover effect
    addHoverEffect(squareDiv);
    gridContainer.appendChild(squareDiv);
  }
}
function clearSquare() {
  while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}
createSquare(16);

//5. add a button on top of screen that will pop up a prompt that asks for a number of squares per side for the new grid
function btnClicked() {
  let newNum = prompt("Please enter a number less than 101: ");
  let num = parseInt(newNum);
  if (newNum != null) {
    if (newNum <= 100) {
      //clear the old etch a sketch
      clearSquare();

      //create a new one
      createSquare(newNum);
    } else {
      console.log("Number entered is greater than 100");
    }
  }
}
/*
4. create a Hover effect on grid flex-items using a DOM eventlistener. (1 when you mouse enters a div and one where it leaves it)
-- change color
  There are multiple ways to change the color of the divs, including:
  - adding a new class to the div.
  - changing the div’s background color using JavaScript.

*/
