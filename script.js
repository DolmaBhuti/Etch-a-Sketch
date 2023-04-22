//1. get reference to grid-container div
const gridContainer = document.querySelector(".grid-container");
let squareDiv;

//3.  hover effect.  when a square is entered, change the background color
function addHoverEffect(node) {
  node.addEventListener("mouseover", () => {
    node.classList.replace("square", "color");
  });
}
//2. while (count <= num * num)
//   create a div
function createSquare(numOfSquares) {
  console.log("in create Square");
  const dim = 500 / numOfSquares;

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
//4. Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid
createSquare(16);

/*




4. create a Hover effect on grid flex-items using a DOM eventlistener. (1 when you mouse enters a div and one where it leaves it)
-- change color
  There are multiple ways to change the color of the divs, including:
  - adding a new class to the div.
  - changing the div’s background color using JavaScript.

  5. add a button on top of screen that will pop up a prompt that asks for a number of squares per side for the new grid
*/
