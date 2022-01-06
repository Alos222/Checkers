let rows = document.querySelectorAll("tr");
let cells = document.querySelectorAll("td");
let whiteCells = document.querySelectorAll(".whiteSquare");
let playCells = document.querySelectorAll(".playSquares");
let resetButton = document.querySelector(".resetButton");
let clickedCell = document.querySelector(".clickedCell");
let blackPieces = document.querySelector(".blackPieces");
let whitePieces = document.querySelector(".whitePieces");
let $blackPieces = $(`.blackPieces`)

$blackPieces.click(function(){
    blackPieces.classList.toggle('clickedCell')
})
