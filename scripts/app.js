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
let nextCell;
// let validCol = checkColumn();
// let validRow = checkRow();


$cells.click(function () {
    console.log($(this).attr('data-col') + $(this).attr('data-row') + $(this).attr('data-piece-id'));
    //selecting a piece to move
    if (isClicked === false) {
        isClicked = true;
        pieceClicked = $(this)
        if ($(this).hasClass('playSquares')) {
            $(this).toggleClass('highlight');
        }
        $(this).removeAttr('data-piece-id');
        nextCell = "";
        console.log(nextCell)
        //piece is already selected, move to another place
    } else {
        if ($(this).hasClass('playSquares')) {
            nextCell = $(this)
            console.log(nextCell)
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
        checkRow();
        checkColumn();
        isPlayableSpace();
        console.log(`checking if column` + checkColumn());
        console.log(`checking if row` + checkRow());
        console.log(`checking if space is playable` + isPlayableSpace());
        isClicked = false;
        // pieceClicked = "";
    }
    console.log("I am the piece" + " " + pieceClicked)
});


function isPlayableSpace() {
    if (checkColumn() === true && checkRow() === true) {
        return true;
    } else {
        return false;
    }
};

function checkColumn() {
    if (nextCell.attr('data-col') === pieceClicked.attr('data-col') - 1) {
        return true;
    } else if (nextCell.attr('data-col') === pieceClicked.attr('data-col') + 1) {
        return true;
    } else {
        return false;
    }
};

function checkRow() {
    let row = parseInt(pieceClicked.attr('data-row'))
    console.log(`I am the row` + row)
    console.log(parseInt(nextCell))
    console.log(nextCell.attr('data-row') == row + 1)
    if (pieceClicked.hasClass('redPieces')) {
        if (nextCell.attr('data-row') == row + 1) {
            return true;
        } else {
            return false;
        }
    }
    if (pieceClicked.hasClass('blackPieces')) {
        if (nextCell.attr('data-row') === pieceClicked.attr('data-row') - 1) {
            return true;
        } else {
            return false;
        }
    }
};



console.log(isClicked)

