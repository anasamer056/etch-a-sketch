// Selecting elements
const squaresContainer = document.querySelector(".squares-container");
const changeSizeButton = document.querySelector(".change-size");

// Main logic
drawBoard();

// A function that creates the board based on the specified square count
function drawBoard(squareCount = 16){
    let squares = [...squaresContainer.childNodes];
    if (squares.length > 0){
        squares.forEach((square)=>squaresContainer.removeChild(square));
    }

    for (let i = 0; i < squareCount * squareCount; i++) {
        let div = document.createElement("div");
        div.classList.add("square", "inactive");
        div.style.minWidth =  div.style.minHeight = `${squaresContainer.offsetWidth/squareCount}px`;
        squaresContainer.appendChild(div);   
    }
}

// Event handler that colors a square on mouse hover
squaresContainer.addEventListener("mouseover", (event)=>{
    if (event.target.classList.contains("squares-container")) return;
    console.log("event captured")
    event.target.classList.add("active");
})

changeSizeButton.addEventListener("click", ()=>{
    let size;
    do{
        size = +prompt("How many squares per side? (Between 1 and 60)")
        if (size == 0) size = 16;
    } while (size <= 0 || size > 60);
    drawBoard(size);
})