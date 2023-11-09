// Selecting elements
const squaresContainer = document.querySelector(".squares-container");
const changeSizeBtn = document.querySelector(".change-size");
const rainbowModeBtn = document.querySelector(".rainbow"); 

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
        div.classList.add("square");
        div.style.backgroundColor = "black"
        div.style.minWidth =  div.style.minHeight = `${squaresContainer.offsetWidth/squareCount}px`;
        squaresContainer.appendChild(div);   
    }
}

// Event handler that colors a square on mouse hover
squaresContainer.addEventListener("mouseover", drawWhite)

function drawWhite (event) {
    
    if (event.target.classList.contains("squares-container")) return;
    event.target.style.backgroundColor = "white"

}

changeSizeBtn.addEventListener("click", ()=>{
    let size;
    do{
        size = +prompt("How many squares per side? (Between 1 and 60)")
        if (size == 0) size = 16;
    } while (size <= 0 || size > 60);
    drawBoard(size);
});

rainbowModeBtn.addEventListener("click", ()=>{
    squaresContainer.removeEventListener("mouseover", drawWhite);
    squaresContainer.addEventListener("mouseover", drawColors )
});

function drawColors(event) {
    if (event.target.classList.contains("squares-container")) return;
    let randRGB = [];
    for (let i = 0; i < 3; i++) {
        let num = Math.floor(Math.random() * 254 + 1);  
        randRGB.push(num);
    }
    event.target.style.backgroundColor = `rgb(${randRGB})`
}