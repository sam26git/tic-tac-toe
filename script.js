// universal variables declared for main element, all div elements & h2 element with specific id, counter variable for player turn and variablex for player tokens
var tokenX = document.querySelector('#token-x');
var tokenO = document.querySelector('#token-o');
var mainTag = document.querySelector('main');
var allDivs = document.querySelectorAll('div');
var announceWinner = document.querySelector('#announce-winner');
var playerTurn = 0;
var cross = 'X';
var naught = 'O'

// universal variables declared keep track of each players score
var winsX = document.querySelector('#wins-x');
var drawsX = document.querySelector('#draws-x');
var losesX = document.querySelector('#loses-x');
var winsO = document.querySelector('#wins-o');
var drawsO = document.querySelector('#draws-o');
var losesO = document.querySelector('#loses-o');


// Function to be used for responding to player click on a div element (when added to an event listener)
// function scoped variable for selecting event.target (will be a singular div)
// if click is on a div and its textContent is empty then if player turn is divisible by 2, then player 1's turn and a cross token added to textContent of clicked div, else player 2's turn and a naught added to textContent of clicked div
// increase playerTurn (counter variable by 1)
function handleClick(event) {
    event.preventDefault();

    // player enter unique name
    var nameX = document.querySelector('#name-x');
    var nameO = document.querySelector('#name-o');
    var submitNameX = document.querySelector('#submit-name-x');
    var submitNameO = document.querySelector('#submit-name-o');

    if (event.target === submitNameX && nameX.value.trim() !== '') {
        tokenX.textContent = nameX.value.trim();
        nameX.value = '';
    } else if (event.target === submitNameO && nameO.value.trim() !== '') {
        tokenO.textContent = nameO.value.trim();
        nameO.value = '';
    }



    var singleDiv = event.target;
    if (singleDiv.tagName === 'DIV' && singleDiv.textContent === '') {
        if (playerTurn % 2 === 0) {
            singleDiv.textContent = cross;
        } else {
            singleDiv.textContent = naught;
        }
        playerTurn++;
    }

    // if 3-in-a-row for either player that player wins
    // change background colour for the tiles that are 3-in-a-row
    // remove event listener once a player wins (and game is over)
    // accounce who won with their name
    // show play again button and remove reset board button

    // if player one wins
    if (allDivs[0].textContent === cross && allDivs[1].textContent === cross && allDivs[2].textContent === cross) {
        allDivs[0].classList.add('winner-x');
        allDivs[1].classList.add('winner-x');
        allDivs[2].classList.add('winner-x');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${tokenX.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[3].textContent === cross && allDivs[4].textContent === cross && allDivs[5].textContent === cross) {
        allDivs[3].classList.add('winner-x');
        allDivs[4].classList.add('winner-x');
        allDivs[5].classList.add('winner-x');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${tokenX.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[6].textContent === cross && allDivs[7].textContent === cross && allDivs[8].textContent === cross) {
        allDivs[6].classList.add('winner-x');
        allDivs[7].classList.add('winner-x');
        allDivs[8].classList.add('winner-x');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${tokenX.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[0].textContent === cross && allDivs[3].textContent === cross && allDivs[6].textContent === cross) {
        allDivs[0].classList.add('winner-x');
        allDivs[3].classList.add('winner-x');
        allDivs[6].classList.add('winner-x');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${tokenX.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[1].textContent === cross && allDivs[4].textContent === cross && allDivs[7].textContent === cross) {
        allDivs[1].classList.add('winner-x');
        allDivs[4].classList.add('winner-x');
        allDivs[7].classList.add('winner-x');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${tokenX.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[2].textContent === cross && allDivs[5].textContent === cross && allDivs[8].textContent === cross) {
        allDivs[2].classList.add('winner-x');
        allDivs[5].classList.add('winner-x');
        allDivs[8].classList.add('winner-x');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${tokenX.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[0].textContent === cross && allDivs[4].textContent === cross && allDivs[8].textContent === cross) {
        allDivs[0].classList.add('winner-x');
        allDivs[4].classList.add('winner-x');
        allDivs[8].classList.add('winner-x');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${tokenX.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[2].textContent === cross && allDivs[4].textContent === cross && allDivs[6].textContent === cross) {
        allDivs[2].classList.add('winner-x');
        allDivs[4].classList.add('winner-x');
        allDivs[6].classList.add('winner-x');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${tokenX.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    }

    // if player two wins
    if (allDivs[0].textContent === naught && allDivs[1].textContent === naught && allDivs[2].textContent === naught) {
        allDivs[0].classList.add('winner-o');
        allDivs[1].classList.add('winner-o');
        allDivs[2].classList.add('winner-o');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${tokenO.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[3].textContent === naught && allDivs[4].textContent === naught && allDivs[5].textContent === naught) {
        allDivs[3].classList.add('winner-o');
        allDivs[4].classList.add('winner-o');
        allDivs[5].classList.add('winner-o');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${tokenO.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[6].textContent === naught && allDivs[7].textContent === naught && allDivs[8].textContent === naught) {
        allDivs[6].classList.add('winner-o');
        allDivs[7].classList.add('winner-o');
        allDivs[8].classList.add('winner-o');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${tokenO.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[0].textContent === naught && allDivs[3].textContent === naught && allDivs[6].textContent === naught) {
        allDivs[0].classList.add('winner-o');
        allDivs[3].classList.add('winner-o');
        allDivs[6].classList.add('winner-o');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${tokenO.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[1].textContent === naught && allDivs[4].textContent === naught && allDivs[7].textContent === naught) {
        allDivs[1].classList.add('winner-o');
        allDivs[4].classList.add('winner-o');
        allDivs[7].classList.add('winner-o');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${tokenO.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[2].textContent === naught && allDivs[5].textContent === naught && allDivs[8].textContent === naught) {
        allDivs[2].classList.add('winner-o');
        allDivs[5].classList.add('winner-o');
        allDivs[8].classList.add('winner-o');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${tokenO.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[0].textContent === naught && allDivs[4].textContent === naught && allDivs[8].textContent === naught) {
        allDivs[0].classList.add('winner-o');
        allDivs[4].classList.add('winner-o');
        allDivs[8].classList.add('winner-o');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${tokenO.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[2].textContent === naught && allDivs[4].textContent === naught && allDivs[6].textContent === naught) {
        allDivs[2].classList.add('winner-o');
        allDivs[4].classList.add('winner-o');
        allDivs[6].classList.add('winner-o');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${tokenO.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    }


    // if a draw & keeping track of player scores
    // if a draw:
        // remove event lister
    
        // announce a draw
        // show play again button and remove reset button
        // add 1 to the draw count for each player
    // if a player wins:
        // add 1 to the win count for the winner and add 1 to the lose count for the loser
    if (playerTurn === 9  && announceWinner.textContent === '') {
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `It was a draw!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
        drawsX.textContent = Number(drawsX.textContent) + 1;
        drawsO.textContent = Number(drawsO.textContent) + 1;
    } else if (announceWinner.textContent === `Congrats ${tokenX.textContent}, you won!`) {
        winsX.textContent = Number(winsX.textContent) + 1;
        losesO.textContent = Number(losesO.textContent) + 1;
    } else if (announceWinner.textContent === `Congrats ${tokenO.textContent}, you won!`) {
        winsO.textContent = Number(winsO.textContent) + 1;
        losesX.textContent = Number(losesX.textContent) + 1;
    }
}


// adding the event listener with the type 'click' to listen for a click on the 'main' element (and enter previously declared function (handleClick) as the listener)
mainTag.addEventListener('click', handleClick);


// Buttons for playing another round once the game ends (win, lose or draw), resetting the board if a mistake is made and restarting the game (universal variables declared to cover all buttons)
// a universal variable for keeping track of the round number
var restartBtn = document.querySelectorAll('.restart-btn');
var resetGame = document.querySelector('#reset-game');
var roundNum = document.querySelector('#round-number');

// play again button:
    // wipes the board by reseting textContent and classes for all divs
    // resets announceWinner textContent
    // adds back the event listener on the main element
    // resets playerTurn counter variable
    // adds 1 to the round number
    // hides play again button and shows reset board button
restartBtn[0].addEventListener('click', function() {
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].textContent = '';
        allDivs[i].classList.remove('winner-x');
        allDivs[i].classList.remove('winner-o');
    }
    announceWinner.textContent = '';
    mainTag.addEventListener('click', handleClick);
    playerTurn = 0;
    roundNum.textContent = Number(roundNum.textContent) + 1;
    restartBtn[0].classList.toggle('hidden');
    restartBtn[1].classList.toggle('hidden');
});

// reset board button:
    // same as above but does not add to the round number or toggle buttons display
restartBtn[1].addEventListener('click', function() {
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].textContent = '';
        allDivs[i].classList.remove('winner-x');
        allDivs[i].classList.remove('winner-o');
    }
    announceWinner.textContent = '';
    mainTag.addEventListener('click', handleClick);
    playerTurn = 0;
});

// reset board button:
    // same as above 
    // reset round number back to 1
    // reset all player scores back to 0
    // reset player names to default
    // if play again button showing and reset board button not showing (i.e. at the end of a round) when reset button clicked, hide play again button and show reset button.
resetGame.addEventListener('click', function() {
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].textContent = '';
        allDivs[i].classList.remove('winner-x');
        allDivs[i].classList.remove('winner-o');
    }
    announceWinner.textContent = '';
    mainTag.addEventListener('click', handleClick);
    playerTurn = 0;
    roundNum.textContent = 1;
    winsX.textContent = '0';
    drawsX.textContent = '0';
    losesX.textContent = '0';
    winsO.textContent = '0';
    drawsO.textContent = '0';
    losesO.textContent = '0';
    tokenX.textContent = 'Player 1';
    tokenO.textContent = 'Player 2';
    if (!restartBtn[0].classList.contains('hidden')) {
        restartBtn[0].classList.toggle('hidden');
    }
    if (restartBtn[1].classList.contains('hidden')) {
        restartBtn[1].classList.toggle('hidden');
    }
})