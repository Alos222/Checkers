//DOM References
const rows = document.querySelectorAll("tr");
const cells = document.querySelectorAll("td");
const whiteCells = document.querySelectorAll(".whiteSquare");
const playCells = document.querySelectorAll(".playSquares");
const resetButton = document.querySelector(".resetButton");
const blackPieces = document.querySelector(".blackPieces");
const redPieces = document.querySelector(".redPieces");
const $blackPieces = $(`.blackPieces`);
const $redPieces = $(`.redPieces`);
const $playable = $(`.playSquares`);
const $rows = $(`tr`);
const $cells = $(`td`);
const $gamePieces = $(`.gamePieces`);


//player properties
let turn = "red";
let redScore = 12;
let blackScore = 12;
let isClicked = false;
let pieceClicked;


$cells.click(function () {
    console.log("im working kind of");
    console.log($(this).attr('data-col') + $(this).attr('data-row') + $(this).attr('data-piece-id'));
    //selecting a piece to move
    if (isClicked === false) {
        isClicked = true;
        pieceClicked = $(this)
        if ($(this).hasClass('playSquares')) {
            $(this).toggleClass('highlight');
        }
        $(this).removeAttr('data-piece-id');
        //piece is already selected, move to another place
    } else {
        if ($(this).hasClass('playSquares')) {
            if (pieceClicked.hasClass('redPieces')) {
                pieceClicked.toggleClass('redPieces highlight');
                $(this).toggleClass('redPieces');
            }
            if (pieceClicked.hasClass('blackPieces')) {
                pieceClicked.toggleClass('blackPieces highlight');
                $(this).toggleClass('blackPieces');
            }
            $(this).attr('data-piece-id', pieceClicked.attr('data-piece-id'));
        }
        isClicked = false;
        pieceClicked = "";
    }
    console.log("I am the piece" + " " + pieceClicked)
});



console.log(isClicked)

