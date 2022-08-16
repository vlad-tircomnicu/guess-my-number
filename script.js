'use strict';

const
    check = document.querySelector('.check'),
    hiddenNumber = document.querySelector('.number'),
    highScore = document.querySelector('.highscore'),
    score = document.querySelector('.score'),
    body = document.querySelector('body'),
    again = document.querySelector('.again'),
    guessInput = document.querySelector('.guess'),
    displayMessage = function(message) {
        document.querySelector('.message').textContent = message
    }

let
    secretNumber = Math.trunc(Math.random() * 20) + 1,
    liveScore = 20,
    liveHighScore = 0

check.addEventListener('click', () => {
    let guess = Number( guessInput.value )

    // if no number is submitted
    if (!guess) {
        displayMessage('No number')
    // if the number is incorrect
    } else if (guess !== secretNumber) {
        if (liveScore > 1) {
            liveScore--
            displayMessage(guess > secretNumber ? ('To high') : ('To low'))
        } else {
            displayMessage('You lost the game')
            liveScore = 0
        }
    // if the number is correct
    } else {
        displayMessage('Number is correct')
        hiddenNumber.textContent = String(guess)
        body.style.backgroundColor = '#60b347'
        if (liveHighScore < liveScore) {
            liveHighScore = liveScore
            highScore.textContent = liveHighScore
        }
    }

    score.textContent = liveScore
})

// reset the game
again.addEventListener('click', () => {
    liveScore = 20
    score.textContent = liveScore
    displayMessage('Start guessing')
    body.style.backgroundColor = '#222'
    hiddenNumber.textContent = '?'
    secretNumber = Math.trunc(Math.random() * 20) + 1
    guessInput.value = ''
})
