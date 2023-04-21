// var storing the main tag (divs container)
// counter variable to keep track of player turn
// event listener to listen for a click on mainTag
// event.target to target a single div
// if the tagNamae is 'DIV' continue
// if playerTurn counter modulo 2 === 0 it's player 1 turn (red) else player 2 turn (blue)
// increase counter variable to change turn after a click

var mainTag = document.querySelector('main');
var playerTurn = 0;

function handleClick(event) {
    var singleDiv = event.target;
    if (singleDiv.tagName === 'DIV') {
        if ( playerTurn % 2 === 0 ) {
            singleDiv.className = 'player-one';
        } else {
            singleDiv.className = 'player-two';
        }
        playerTurn++;
    }

// var to find all the divs on the page
// if 3 in a row for either colour that player wins
    var allDivs = document.querySelectorAll('div');

    if (allDivs[0].className === 'player-one' && allDivs[1].className === 'player-one' && allDivs[2].className === 'player-one') {
        allDivs[0].className = 'player-one-wins';
        allDivs[1].className = 'player-one-wins';
        allDivs[2].className = 'player-one-wins';
        mainTag.removeEventListener('click', handleClick);
    } else if (allDivs[3].className === 'player-one' && allDivs[4].className === 'player-one' && allDivs[5].className === 'player-one') {
        allDivs[3].className = 'player-one-wins';
        allDivs[4].className = 'player-one-wins';
        allDivs[5].className = 'player-one-wins';
        mainTag.removeEventListener('click', handleClick);
    } else if (allDivs[6].className === 'player-one' && allDivs[7].className === 'player-one' && allDivs[8].className === 'player-one') {
        allDivs[6].className = 'player-one-wins';
        allDivs[7].className = 'player-one-wins';
        allDivs[8].className = 'player-one-wins';
        mainTag.removeEventListener('click', handleClick);
    } else if (allDivs[0].className === 'player-one' && allDivs[3].className === 'player-one' && allDivs[6].className === 'player-one') {
        allDivs[0].className = 'player-one-wins';
        allDivs[3].className = 'player-one-wins';
        allDivs[6].className = 'player-one-wins';
        mainTag.removeEventListener('click', handleClick);
    } else if (allDivs[1].className === 'player-one' && allDivs[4].className === 'player-one' && allDivs[7].className === 'player-one') {
        allDivs[1].className = 'player-one-wins';
        allDivs[4].className = 'player-one-wins';
        allDivs[7].className = 'player-one-wins';
        mainTag.removeEventListener('click', handleClick);
    } else if (allDivs[2].className === 'player-one' && allDivs[5].className === 'player-one' && allDivs[8].className === 'player-one') {
        allDivs[2].className = 'player-one-wins';
        allDivs[5].className = 'player-one-wins';
        allDivs[8].className = 'player-one-wins';
        mainTag.removeEventListener('click', handleClick);
    } else if (allDivs[0].className === 'player-one' && allDivs[4].className === 'player-one' && allDivs[8].className === 'player-one') {
        allDivs[0].className = 'player-one-wins';
        allDivs[4].className = 'player-one-wins';
        allDivs[8].className = 'player-one-wins';
        mainTag.removeEventListener('click', handleClick);
    } else if (allDivs[2].className === 'player-one' && allDivs[4].className === 'player-one' && allDivs[6].className === 'player-one') {
        allDivs[2].className = 'player-one-wins';
        allDivs[4].className = 'player-one-wins';
        allDivs[6].className = 'player-one-wins';
        mainTag.removeEventListener('click', handleClick);
    }


    if (allDivs[0].className === 'player-two' && allDivs[1].className === 'player-two' && allDivs[2].className === 'player-two') {
        allDivs[0].className = 'player-two-wins';
        allDivs[1].className = 'player-two-wins';
        allDivs[2].className = 'player-two-wins';
        mainTag.removeEventListener('click', handleClick);
    } else if (allDivs[3].className === 'player-two' && allDivs[4].className === 'player-two' && allDivs[5].className === 'player-two') {
        allDivs[3].className = 'player-two-wins';
        allDivs[4].className = 'player-two-wins';
        allDivs[5].className = 'player-two-wins';
        mainTag.removeEventListener('click', handleClick);
    } else if (allDivs[6].className === 'player-two' && allDivs[7].className === 'player-two' && allDivs[8].className === 'player-two') {
        allDivs[6].className = 'player-two-wins';
        allDivs[7].className = 'player-two-wins';
        allDivs[8].className = 'player-two-wins';
        mainTag.removeEventListener('click', handleClick);
    } else if (allDivs[0].className === 'player-two' && allDivs[3].className === 'player-two' && allDivs[6].className === 'player-two') {
        allDivs[0].className = 'player-two-wins';
        allDivs[3].className = 'player-two-wins';
        allDivs[6].className = 'player-two-wins';
        mainTag.removeEventListener('click', handleClick);
    } else if (allDivs[1].className === 'player-two' && allDivs[4].className === 'player-two' && allDivs[7].className === 'player-two') {
        allDivs[1].className = 'player-two-wins';
        allDivs[4].className = 'player-two-wins';
        allDivs[7].className = 'player-two-wins';
        mainTag.removeEventListener('click', handleClick);
    } else if (allDivs[2].className === 'player-two' && allDivs[5].className === 'player-two' && allDivs[8].className === 'player-two') {
        allDivs[2].className = 'player-two-wins';
        allDivs[5].className = 'player-two-wins';
        allDivs[8].className = 'player-two-wins';
        mainTag.removeEventListener('click', handleClick);
    } else if (allDivs[0].className === 'player-two' && allDivs[4].className === 'player-two' && allDivs[8].className === 'player-two') {
        allDivs[0].className = 'player-two-wins';
        allDivs[4].className = 'player-two-wins';
        allDivs[8].className = 'player-two-wins';
        mainTag.removeEventListener('click', handleClick);
    } else if (allDivs[2].className === 'player-two' && allDivs[4].className === 'player-two' && allDivs[6].className === 'player-two') {
        allDivs[2].className = 'player-two-wins';
        allDivs[4].className = 'player-two-wins';
        allDivs[6].className = 'player-two-wins';
        mainTag.removeEventListener('click', handleClick);
    }
}

mainTag.addEventListener('click', handleClick);



// form to select player names
var playerOneName = document.querySelector('#player-one-name');
var playerTwoName = document.querySelector('#player-two-name');
var submitPlayerOneName = document.querySelector('#submit-player-one-name');
var submitPlayerTwoName = document.querySelector('#submit-player-two-name');
var playerX = document.querySelector('#x');
var playerO = document.querySelector('#o');

submitPlayerOneName.addEventListener('click', function(event) {
    event.preventDefault();

    if (playerOneName.value.trim() !== '') {
        playerX.textContent = playerOneName.value + ' (X)';
    }

    playerOneName.value = '';
});

submitPlayerTwoName.addEventListener('click', function(event) {
    event.preventDefault();

    if (playerTwoName.value.trim() !== '') {
        playerO.textContent = playerTwoName.value + ' (O)';
    }

    playerTwoName.value = '';
});


// make instead of colour just the text letters X & O so that i can animate.
// make a resart game button