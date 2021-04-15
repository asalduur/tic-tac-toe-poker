//empty array to keep track of what's happening on board
//will determine who wins if items in a row are played by player
const board = []


function play(clickedId) {
    // reassigns span #player to equal playerSpan for later ref in script
    const playerSpan = document.getElementById('player');
    //saves the onclick event to variable clickedElement for later ref
    const clickedElement = document.getElementById(clickedId);

    // loop to change the inner span text
    // see index.html, <span id="player">X</span> that appears on bottom
    // whenever user clicks somewhere on board, this text ('X') on page will change ('O') back and forth on every click
    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        //board at the index of whatever box is clicked, will equal player value 
        board[clickedId] = 'X';
    }
    else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    }
    console.log(board);

// every place on the board will get saved to a variable for convenience
const tLeft = board[0];
const tCent = board[1];
const tRight = board[2];
const mLeft = board[3];
const mCent = board[4];
const mRight = board[5];
const bLeft = board[6];
const bCent = board[7];
const bRight = board[8];

// checks if all values on aligning rows are the same -- win condition
// first check is to see if box is defined, then goes down row
if (tLeft !== undefined && tLeft === tCent && tLeft === tRight){
    alert(`${tLeft} is the winner`);
    return;
}
if (mLeft !== undefined && mLeft === mCent && mLeft == mRight){
    alert(`${mLeft} is the winner`);
    return;
}
if (bLeft !== undefined && bLeft === bCent && bLeft === bRight){
    alert(`${bLeft} is the winner`);
    return;
}

// checks if all values on aligning columns are the same -- win condition
if (tLeft !== undefined && tLeft === mLeft && tLeft === bLeft){
    alert(`${tLeft} is the winner`);
    return;
}
if (tCent !== undefined && tCent === mCent && tCent === bCent){
    alert(`${tCent} is the winner`);
    return;
}
if (tRight !== undefined && tRight === mRight && tRight === bRight){
    alert(`${tRight} is the winner`);
    return;
}

// checks if all values diagonally are the same -- win condition 
if (tLeft !== undefined && tLeft === mCent && tLeft === bRight) {
    alert(`${tLeft} is the winner`);
    return;
}
if (bLeft !== undefined && bLeft === mCent && bLeft === tRight){
    alert(`${bLeft} is the winner`);
    return;
}

//check to see if board is full
//by default, set to true here
let boardFull = true;
//for loop to iterate over each box on board (remember, board index is assigned to the clickedId element), index is set to zero, as long as it's greater than or equal to 8 (9 boxes on board), increment index by 1
//inside for loop, nested if statement to check if iterated index has no value, than the board is not full
//if it is full, user is alerted that game is a tie
for(let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
        boardFull = false;
    }
}
if (boardFull === true){
    alert("It's a tie!");
}
}
