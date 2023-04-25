// Universal Variables
var tokenX = document.querySelector('#token-x');
var tokenO = document.querySelector('#token-o');
var bodyElement = document.querySelector('body');
var allDivs = document.querySelectorAll('div');
var announceWinner = document.querySelector('#announce-winner');
var playerTurn = 0;
var winsX = document.querySelector('#wins-x');
var drawsX = document.querySelector('#draws-x');
var losesX = document.querySelector('#loses-x');
var winsO = document.querySelector('#wins-o');
var drawsO = document.querySelector('#draws-o');
var losesO = document.querySelector('#loses-o');
var playAgain = document.querySelector('#play-again');
var resetBoard = document.querySelector('#reset-board');


// function to handle a click event and prevent default (reload on form submission)
function handleClick(event) {
    event.preventDefault();
    

    // player enter unique player name
    var eventTarget = event.target;
    var nameX = document.querySelector('#name-x');
    var nameO = document.querySelector('#name-o');
    var submitNameX = document.querySelector('#submit-name-x');
    var submitNameO = document.querySelector('#submit-name-o');

    if (eventTarget === submitNameX && nameX.value.trim() !== '') {
        tokenX.textContent = nameX.value.trim();
        nameX.value = '';
    } else if (eventTarget === submitNameO && nameO.value.trim() !== '') {
        tokenO.textContent = nameO.value.trim();
        nameO.value = '';
    }


    // keep track of player turn
    var cross = 'X';
    var naught = 'O';

    if (eventTarget.tagName === 'DIV' && eventTarget.textContent === '') {
        if (playerTurn % 2 === 0) {
            eventTarget.textContent = cross;
        } else {
            eventTarget.textContent = naught;
        }
        playerTurn++;
    }

   
    // logic for player win
    var winner = '';

    // if player one wins
    if (allDivs[0].textContent === cross && allDivs[1].textContent === cross && allDivs[2].textContent === cross) {
        allDivs[0].classList.add('winner-x');
        allDivs[1].classList.add('winner-x');
        allDivs[2].classList.add('winner-x');
        winner = 'x';
    } else if (allDivs[3].textContent === cross && allDivs[4].textContent === cross && allDivs[5].textContent === cross) {
        allDivs[3].classList.add('winner-x');
        allDivs[4].classList.add('winner-x');
        allDivs[5].classList.add('winner-x');
        winner = 'x';
    } else if (allDivs[6].textContent === cross && allDivs[7].textContent === cross && allDivs[8].textContent === cross) {
        allDivs[6].classList.add('winner-x');
        allDivs[7].classList.add('winner-x');
        allDivs[8].classList.add('winner-x');
        winner = 'x';
    } else if (allDivs[0].textContent === cross && allDivs[3].textContent === cross && allDivs[6].textContent === cross) {
        allDivs[0].classList.add('winner-x');
        allDivs[3].classList.add('winner-x');
        allDivs[6].classList.add('winner-x');
        winner = 'x';
    } else if (allDivs[1].textContent === cross && allDivs[4].textContent === cross && allDivs[7].textContent === cross) {
        allDivs[1].classList.add('winner-x');
        allDivs[4].classList.add('winner-x');
        allDivs[7].classList.add('winner-x');
        winner = 'x';
    } else if (allDivs[2].textContent === cross && allDivs[5].textContent === cross && allDivs[8].textContent === cross) {
        allDivs[2].classList.add('winner-x');
        allDivs[5].classList.add('winner-x');
        allDivs[8].classList.add('winner-x');
        winner = 'x';
    } else if (allDivs[0].textContent === cross && allDivs[4].textContent === cross && allDivs[8].textContent === cross) {
        allDivs[0].classList.add('winner-x');
        allDivs[4].classList.add('winner-x');
        allDivs[8].classList.add('winner-x');
        winner = 'x';
    } else if (allDivs[2].textContent === cross && allDivs[4].textContent === cross && allDivs[6].textContent === cross) {
        allDivs[2].classList.add('winner-x');
        allDivs[4].classList.add('winner-x');
        allDivs[6].classList.add('winner-x');
        winner = 'x';
    }

    // if player two wins
    if (allDivs[0].textContent === naught && allDivs[1].textContent === naught && allDivs[2].textContent === naught) {
        allDivs[0].classList.add('winner-o');
        allDivs[1].classList.add('winner-o');
        allDivs[2].classList.add('winner-o');
        winner = 'o';
    } else if (allDivs[3].textContent === naught && allDivs[4].textContent === naught && allDivs[5].textContent === naught) {
        allDivs[3].classList.add('winner-o');
        allDivs[4].classList.add('winner-o');
        allDivs[5].classList.add('winner-o');
        winner = 'o';
    } else if (allDivs[6].textContent === naught && allDivs[7].textContent === naught && allDivs[8].textContent === naught) {
        allDivs[6].classList.add('winner-o');
        allDivs[7].classList.add('winner-o');
        allDivs[8].classList.add('winner-o');
        winner = 'o';
    } else if (allDivs[0].textContent === naught && allDivs[3].textContent === naught && allDivs[6].textContent === naught) {
        allDivs[0].classList.add('winner-o');
        allDivs[3].classList.add('winner-o');
        allDivs[6].classList.add('winner-o');
        winner = 'o';
    } else if (allDivs[1].textContent === naught && allDivs[4].textContent === naught && allDivs[7].textContent === naught) {
        allDivs[1].classList.add('winner-o');
        allDivs[4].classList.add('winner-o');
        allDivs[7].classList.add('winner-o');
        winner = 'o';
    } else if (allDivs[2].textContent === naught && allDivs[5].textContent === naught && allDivs[8].textContent === naught) {
        allDivs[2].classList.add('winner-o');
        allDivs[5].classList.add('winner-o');
        allDivs[8].classList.add('winner-o');
        winner = 'o';
    } else if (allDivs[0].textContent === naught && allDivs[4].textContent === naught && allDivs[8].textContent === naught) {
        allDivs[0].classList.add('winner-o');
        allDivs[4].classList.add('winner-o');
        allDivs[8].classList.add('winner-o');
        winner = 'o';
    } else if (allDivs[2].textContent === naught && allDivs[4].textContent === naught && allDivs[6].textContent === naught) {
        allDivs[2].classList.add('winner-o');
        allDivs[4].classList.add('winner-o');
        allDivs[6].classList.add('winner-o');
        winner = 'o';
    }


    // announce winner or draw
    if (winner === 'x' || winner === 'o' || (winner === '' && playerTurn === 9)) {
        bodyElement.removeEventListener('click', handleClick);
        playAgain.classList.toggle('hidden');
        resetBoard.classList.toggle('hidden');
        if (winner === 'x') {
            announceWinner.textContent = `What a game! You win ${tokenX.textContent}!!`;
            winsX.textContent = Number(winsX.textContent) + 1;
            losesO.textContent = Number(losesO.textContent) + 1;
        } else if (winner === 'o') {
            announceWinner.textContent = `What a game! You win  ${tokenO.textContent}!!`;
            winsO.textContent = Number(winsO.textContent) + 1;
            losesX.textContent = Number(losesX.textContent) + 1;
        } else {
            announceWinner.textContent = `Oh no, you drew!`;
            drawsX.textContent = Number(drawsX.textContent) + 1;
            drawsO.textContent = Number(drawsO.textContent) + 1;
        }
    }
}


// call handleClick when body element clicked
bodyElement.addEventListener('click', handleClick);

// call anonymous function to respond to button click in the body element
bodyElement.addEventListener('click', function(event) {
    var eventTarget = event.target;
    var resetGame = document.querySelector('#reset-game');
    var roundNum = document.querySelector('#round-number');

    if (eventTarget === resetBoard || eventTarget === resetGame || eventTarget === playAgain) {
        for (let i = 0; i < allDivs.length; i++) {
            allDivs[i].textContent = '';
            allDivs[i].classList.remove('winner-x');
            allDivs[i].classList.remove('winner-o');
        }
        announceWinner.textContent = '';
        bodyElement.addEventListener('click', handleClick);
        playerTurn = 0;
        if (eventTarget === playAgain) {
            roundNum.textContent = Number(roundNum.textContent) + 1;
        playAgain.classList.toggle('hidden');
        resetBoard.classList.toggle('hidden');
        } else if (eventTarget === resetGame) {
            roundNum.textContent = 1;
            winsX.textContent = '0';
            drawsX.textContent = '0';
            losesX.textContent = '0';
            winsO.textContent = '0';
            drawsO.textContent = '0';
            losesO.textContent = '0';
            tokenX.textContent = 'Player 1';
            tokenO.textContent = 'Player 2';
            if (!playAgain.classList.contains('hidden')) {
                playAgain.classList.toggle('hidden');
            }
            if (resetBoard.classList.contains('hidden')) {
                resetBoard.classList.toggle('hidden');
            }
        }
    }
});