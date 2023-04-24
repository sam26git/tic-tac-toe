// Input custom player names
// universal variables declared for input, button & h2 elements with specific ids (for each player)
// listen for click on submit button (& prevent default)
// trim & change h2 textContent to input value (if not empty)
var playerOneName = document.querySelector('#player-one-name');
var playerTwoName = document.querySelector('#player-two-name');
var submitPlayerOneName = document.querySelector('#submit-player-one-name');
var submitPlayerTwoName = document.querySelector('#submit-player-two-name');
var playerX = document.querySelector('#x');
var playerO = document.querySelector('#o');

submitPlayerOneName.addEventListener('click', function(event) {
    event.preventDefault();
    if (playerOneName.value.trim() !== '') {
        playerX.textContent = playerOneName.value.trim();
    }
    playerOneName.value = '';
});

submitPlayerTwoName.addEventListener('click', function(event) {
    event.preventDefault();
    if (playerTwoName.value.trim() !== '') {
        playerO.textContent = playerTwoName.value.trim();
    }
    playerTwoName.value = '';
});


// universal variables declared for main element, all div elements & h2 element with specific id, counter variable for player turn and variablex for player tokens
var mainTag = document.querySelector('main');
var allDivs = document.querySelectorAll('div');
var announceWinner = document.querySelector('#announce-winner');
var playerTurn = 0;
var cross = 'X';
var naught = 'O'

// universal variables declared keep track of each players score
var trackPlayerOneWins = document.querySelector('#track-player-one-wins');
var trackPlayerOneDraws = document.querySelector('#track-player-one-draws');
var trackPlayerOneLoses = document.querySelector('#track-player-one-loses');
var trackPlayerTwoWins = document.querySelector('#track-player-two-wins');
var trackPlayerTwoDraws = document.querySelector('#track-player-two-draws');
var trackPlayerTwoLoses = document.querySelector('#track-player-two-loses');


// Function to be used for responding to player click on a div element (when added to an event listener)
// function scoped variable for selecting event.target (will be a singular div)
// if click is on a div and its textContent is empty then if player turn is divisible by 2, then player 1's turn and a cross token added to textContent of clicked div, else player 2's turn and a naught added to textContent of clicked div
// increase playerTurn (counter variable by 1)
function handleClick(event) {
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
        allDivs[0].classList.add('player-one-wins');
        allDivs[1].classList.add('player-one-wins');
        allDivs[2].classList.add('player-one-wins');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerX.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[3].textContent === cross && allDivs[4].textContent === cross && allDivs[5].textContent === cross) {
        allDivs[3].classList.add('player-one-wins');
        allDivs[4].classList.add('player-one-wins');
        allDivs[5].classList.add('player-one-wins');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerX.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[6].textContent === cross && allDivs[7].textContent === cross && allDivs[8].textContent === cross) {
        allDivs[6].classList.add('player-one-wins');
        allDivs[7].classList.add('player-one-wins');
        allDivs[8].classList.add('player-one-wins');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerX.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[0].textContent === cross && allDivs[3].textContent === cross && allDivs[6].textContent === cross) {
        allDivs[0].classList.add('player-one-wins');
        allDivs[3].classList.add('player-one-wins');
        allDivs[6].classList.add('player-one-wins');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerX.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[1].textContent === cross && allDivs[4].textContent === cross && allDivs[7].textContent === cross) {
        allDivs[1].classList.add('player-one-wins');
        allDivs[4].classList.add('player-one-wins');
        allDivs[7].classList.add('player-one-wins');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerX.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[2].textContent === cross && allDivs[5].textContent === cross && allDivs[8].textContent === cross) {
        allDivs[2].classList.add('player-one-wins');
        allDivs[5].classList.add('player-one-wins');
        allDivs[8].classList.add('player-one-wins');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerX.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[0].textContent === cross && allDivs[4].textContent === cross && allDivs[8].textContent === cross) {
        allDivs[0].classList.add('player-one-wins');
        allDivs[4].classList.add('player-one-wins');
        allDivs[8].classList.add('player-one-wins');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerX.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[2].textContent === cross && allDivs[4].textContent === cross && allDivs[6].textContent === cross) {
        allDivs[2].classList.add('player-one-wins');
        allDivs[4].classList.add('player-one-wins');
        allDivs[6].classList.add('player-one-wins');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerX.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    }

    // if player two wins
    if (allDivs[0].textContent === naught && allDivs[1].textContent === naught && allDivs[2].textContent === naught) {
        allDivs[0].classList.add('player-two-wins');
        allDivs[1].classList.add('player-two-wins');
        allDivs[2].classList.add('player-two-wins');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerO.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[3].textContent === naught && allDivs[4].textContent === naught && allDivs[5].textContent === naught) {
        allDivs[3].classList.add('player-two-wins');
        allDivs[4].classList.add('player-two-wins');
        allDivs[5].classList.add('player-two-wins');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerO.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[6].textContent === naught && allDivs[7].textContent === naught && allDivs[8].textContent === naught) {
        allDivs[6].classList.add('player-two-wins');
        allDivs[7].classList.add('player-two-wins');
        allDivs[8].classList.add('player-two-wins');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerO.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[0].textContent === naught && allDivs[3].textContent === naught && allDivs[6].textContent === naught) {
        allDivs[0].classList.add('player-two-wins');
        allDivs[3].classList.add('player-two-wins');
        allDivs[6].classList.add('player-two-wins');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerO.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[1].textContent === naught && allDivs[4].textContent === naught && allDivs[7].textContent === naught) {
        allDivs[1].classList.add('player-two-wins');
        allDivs[4].classList.add('player-two-wins');
        allDivs[7].classList.add('player-two-wins');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerO.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[2].textContent === naught && allDivs[5].textContent === naught && allDivs[8].textContent === naught) {
        allDivs[2].classList.add('player-two-wins');
        allDivs[5].classList.add('player-two-wins');
        allDivs[8].classList.add('player-two-wins');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerO.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[0].textContent === naught && allDivs[4].textContent === naught && allDivs[8].textContent === naught) {
        allDivs[0].classList.add('player-two-wins');
        allDivs[4].classList.add('player-two-wins');
        allDivs[8].classList.add('player-two-wins');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerO.textContent}, you won!`;
        restartBtn[0].classList.toggle('hidden');
        restartBtn[1].classList.toggle('hidden');
    } else if (allDivs[2].textContent === naught && allDivs[4].textContent === naught && allDivs[6].textContent === naught) {
        allDivs[2].classList.add('player-two-wins');
        allDivs[4].classList.add('player-two-wins');
        allDivs[6].classList.add('player-two-wins');
        mainTag.removeEventListener('click', handleClick);
        announceWinner.textContent = `Congrats ${playerO.textContent}, you won!`;
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
        trackPlayerOneDraws.textContent = Number(trackPlayerOneDraws.textContent) + 1;
        trackPlayerTwoDraws.textContent = Number(trackPlayerTwoDraws.textContent) + 1;
    } else if (announceWinner.textContent === `Congrats ${playerX.textContent}, you won!`) {
        trackPlayerOneWins.textContent = Number(trackPlayerOneWins.textContent) + 1;
        trackPlayerTwoLoses.textContent = Number(trackPlayerTwoLoses.textContent) + 1;
    } else if (announceWinner.textContent === `Congrats ${playerO.textContent}, you won!`) {
        trackPlayerTwoWins.textContent = Number(trackPlayerTwoWins.textContent) + 1;
        trackPlayerOneLoses.textContent = Number(trackPlayerOneLoses.textContent) + 1;
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
        allDivs[i].classList.remove('player-one-wins');
        allDivs[i].classList.remove('player-two-wins');
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
        allDivs[i].classList.remove('player-one-wins');
        allDivs[i].classList.remove('player-two-wins');
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
        allDivs[i].classList.remove('player-one-wins');
        allDivs[i].classList.remove('player-two-wins');
    }
    announceWinner.textContent = '';
    mainTag.addEventListener('click', handleClick);
    playerTurn = 0;
    roundNum.textContent = 1;
    trackPlayerOneWins.textContent = '0';
    trackPlayerOneDraws.textContent = '0';
    trackPlayerOneLoses.textContent = '0';
    trackPlayerTwoWins.textContent = '0';
    trackPlayerTwoDraws.textContent = '0';
    trackPlayerTwoLoses.textContent = '0';
    playerX.textContent = 'Player 1';
    playerO.textContent = 'Player 2';
    if (!restartBtn[0].classList.contains('hidden')) {
        restartBtn[0].classList.toggle('hidden');
    }
    if (restartBtn[1].classList.contains('hidden')) {
        restartBtn[1].classList.toggle('hidden');
    }
})