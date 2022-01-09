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
console.log($cells)


//player properties
let turn = "red";
let isClicked = false;
redScore = 12;
blackScore = 12;
let pieceClicked;
let nextCell;


$cells.click(function () {
    console.log($(this).attr('data-col') + $(this).attr('data-row') + $(this).attr('data-piece-id'));
    //selecting a piece to move
    if (isClicked === false) {
        if ($(this).hasClass('redPieces') || $(this).hasClass('blackPieces')) {
            isClicked = true;
            pieceClicked = $(this)
            $(this).toggleClass('highlight');
        }
        //piece is already selected, move to another place
    } else {
        let isValidRow = checkRow($(this));
        let isValidCol = checkColumn($(this));
        console.log(`isValidRow: ${isValidRow}`);
        console.log(`isValidColumn: ${isValidCol}`);
        console.log(`is playable space` + ` ` + isPlayableSpace($(this)));
        if ($(this).hasClass('playSquares') && isPlayableSpace($(this))) {
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
            pieceClicked.removeAttr('data-piece-id');
        } else {
            isClicked = false;
            pieceClicked.toggleClass('highlight');
        }
        // checkRow();
        // checkColumn();
        // isPlayableSpace();
        // console.log(`checking again` + nextCell)
        // console.log(`checking if column` + checkColumn());
        // console.log(`checking if space is playable` + isPlayableSpace());
        isClicked = false;
        // pieceClicked = "";
    }
    console.log("I am the piece" + " " + pieceClicked)
});


function isPlayableSpace(targetCell) {
    if (checkColumn(targetCell) === true && checkRow(targetCell) === true) {
        return true;
    } else {
        return false;
    }
};


//checking column that is clicked is playable
function checkColumn(targetCell) {
    let col = parseInt(pieceClicked.attr('data-col'));
    let targetColumn = parseInt(targetCell.attr('data-col'));
    if (targetColumn === col - 1) {
        return true;
    } else if (targetColumn === col + 1) {
        return true;
    } else {
        return false;
    }
};
//checking row that is clicked is playable
function checkRow(targetCell) {
    let row = parseInt(pieceClicked.attr('data-row'))
    console.log(`I am the row` + row)
    let targetRow = parseInt(targetCell.attr('data-row'))
    console.log(`targetRow: ${targetRow}`);
    // console.log(targetCell.attr('data-row') == row + 1)
    if (pieceClicked.hasClass('redPieces')) {
        if (targetRow == row + 1) {
            return true;
        } else {
            return false;
        }
    }
    if (pieceClicked.hasClass('blackPieces')) {
        if (targetRow === row - 1) {
            return true;
        } else {
            return false;
        }
    }
};

//rewrite this function to be simpler
function checkforWin() {
    let red = $cells.hasClass('redPieces')
    let black = $cells.hasClass('blackPieces')
    console.log('red:' + red)
    console.log('black:' + black)
        if(red === false) {
            $(".winLine").text("Black Player Wins!")
        }
        if(black === false) {
            $(".winLine").text("Red Player Wins!")
        }
    }

checkforWin()
console.log(isClicked)