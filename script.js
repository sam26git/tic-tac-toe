var mainTag = document.querySelector('main');

// make every second click add a different class
// add loop inside event lisenter to check for every second click, if 1 red, if 2 blue.

mainTag.addEventListener('click', function(event) {
    var singleDiv = event.target;
    if (singleDiv.tagName === 'DIV') {
        singleDiv.className = 'make-red';
    }

    var allDivs = document.querySelectorAll('div');
    var divOne = document.querySelectorAll('div')[0];
    var divTwo = document.querySelectorAll('div')[1];
    var divThree = document.querySelectorAll('div')[2];
    var divFour = document.querySelectorAll('div')[3];
    var divFive = document.querySelectorAll('div')[4];
    var divSix = document.querySelectorAll('div')[5];
    var divSeven = document.querySelectorAll('div')[6];
    var divEight = document.querySelectorAll('div')[7];
    var divNine = document.querySelectorAll('div')[8];

    if (divOne.className === 'make-red' && divTwo.className === 'make-red' && divThree.className === 'make-red') {
        divOne.className = 'make-green';
        divTwo.className = 'make-green';
        divThree.className = 'make-green';
    } else if (divFour.className === 'make-red' && divFive.className === 'make-red' && divSix.className === 'make-red') {
        divFour.className = 'make-green';
        divFive.className = 'make-green';
        divSix.className = 'make-green';
    } else if (divSeven.className === 'make-red' && divEight.className === 'make-red' && divNine.className === 'make-red') {
        divSeven.className = 'make-green';
        divEight.className = 'make-green';
        divNine.className = 'make-green';
    } else if (divOne.className === 'make-red' && divFour.className === 'make-red' && divSeven.className === 'make-red') {
        divOne.className = 'make-green';
        divFour.className = 'make-green';
        divSeven.className = 'make-green';
    } else if (divTwo.className === 'make-red' && divFive.className === 'make-red' && divEight.className === 'make-red') {
        divTwo.className = 'make-green';
        divFive.className = 'make-green';
        divEight.className = 'make-green';
    } else if (divThree.className === 'make-red' && divSix.className === 'make-red' && divNine.className === 'make-red') {
        divThree.className = 'make-green';
        divSix.className = 'make-green';
        divNine.className = 'make-green';
    } else if (divOne.className === 'make-red' && divFive.className === 'make-red' && divNine.className === 'make-red') {
        divOne.className = 'make-green';
        divFive.className = 'make-green';
        divNine.className = 'make-green';
    } else if (divThree.className === 'make-red' && divFive.className === 'make-red' && divSeven.className === 'make-red') {
        divThree.className = 'make-green';
        divFive.className = 'make-green';
        divSeven.className = 'make-green';
    }


    if (divOne.className === 'make-blue' && divTwo.className === 'make-blue' && divThree.className === 'make-blue') {
        divOne.className = 'make-green';
        divTwo.className = 'make-green';
        divThree.className = 'make-green';
    } else if (divFour.className === 'make-blue' && divFive.className === 'make-blue' && divSix.className === 'make-blue') {
        divFour.className = 'make-green';
        divFive.className = 'make-green';
        divSix.className = 'make-green';
    } else if (divSeven.className === 'make-blue' && divEight.className === 'make-blue' && divNine.className === 'make-blue') {
        divSeven.className = 'make-green';
        divEight.className = 'make-green';
        divNine.className = 'make-green';
    } else if (divOne.className === 'make-blue' && divFour.className === 'make-blue' && divSeven.className === 'make-blue') {
        divOne.className = 'make-green';
        divFour.className = 'make-green';
        divSeven.className = 'make-green';
    } else if (divTwo.className === 'make-blue' && divFive.className === 'make-blue' && divEight.className === 'make-blue') {
        divTwo.className = 'make-green';
        divFive.className = 'make-green';
        divEight.className = 'make-green';
    } else if (divThree.className === 'make-blue' && divSix.className === 'make-blue' && divNine.className === 'make-blue') {
        divThree.className = 'make-green';
        divSix.className = 'make-green';
        divNine.className = 'make-green';
    } else if (divOne.className === 'make-blue' && divFive.className === 'make-blue' && divNine.className === 'make-blue') {
        divOne.className = 'make-green';
        divFive.className = 'make-green';
        divNine.className = 'make-green';
    } else if (divThree.className === 'make-blue' && divFive.className === 'make-blue' && divSeven.className === 'make-blue') {
        divThree.className = 'make-green';
        divFive.className = 'make-green';
        divSeven.className = 'make-green';
    }
})