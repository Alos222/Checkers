const rows = document.querySelectorAll("tr");
const cells = document.querySelectorAll("td");
const whiteCells = document.querySelectorAll(".whiteSquare");
const playCells = document.querySelectorAll(".playSquares");
const resetButton = document.querySelector(".resetButton");
const clickedCell = document.querySelector(".clickedCell");
const blackPieces = document.querySelector(".blackPieces");
const whitePieces = document.querySelector(".whitePieces");
const $blackPieces = $(`.blackPieces`);


$blackPieces.click(function(){
    $(this).toggleClass('clicked')
});

