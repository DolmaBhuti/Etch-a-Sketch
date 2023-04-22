//1. get reference to grid-container div
const gridContainer = document.querySelector(".grid-container");
let squareDiv;

//3.  hover effect.  when a square is entered, change the background color

//2. while (count <= num * num)
//   create a div
function createSquare(numOfSquares) {
  console.log("in create Square");
  const dim = 950 / numOfSquares;
  console.log("width and height: " + dim);
  for (let i = 0; i < numOfSquares * numOfSquares; i++) {
    squareDiv = document.createElement("div");
    // squareDiv.style.width = dim + "px";
    // squareDiv.style.height = dim + "px";

    squareDiv.style.cssText = `width: ${dim}px; height: ${dim}px`;
    //create hover effect
    //mouseHover(squareDiv);
    gridContainer.appendChild(squareDiv);
  }
}

createSquare(16);
/*




4. create a Hover effect on grid flex-items using a DOM eventlistener. (1 when you mouse enters a div and one where it leaves it)
-- change color
  There are multiple ways to change the color of the divs, including:
  - adding a new class to the div.
  - changing the div’s background color using JavaScript.

  5. add a button on top of screen that will pop up a prompt that asks for a number of squares per side for the new grid
*/
