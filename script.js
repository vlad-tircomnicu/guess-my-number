'use strict';

const
    check = document.querySelector('.check'),
    message = document.querySelector('.message'),
    hiddenNumber = document.querySelector('.number'),
    highScore = document.querySelector('.highscore'),
    score = document.querySelector('.score'),
    body = document.querySelector('body'),
    again = document.querySelector('.again'),
    guess = document.querySelector('.guess')

let
    number = Math.trunc(Math.random() * 20) + 1,
    liveScore = 20,
    liveHighScore = 0

check.addEventListener('click', () => {
    const
        guess = Number( document.querySelector('.guess').value )

    if (!guess) {
        message.textContent = 'No number'
    } else if (guess === number) {
        message.textContent = 'Number is correct'
        hiddenNumber.textContent = String(number)
        body.style.backgroundColor = '#60b347'
        if (liveHighScore < liveScore) {
            liveHighScore = liveScore
            highScore.textContent = liveHighScore
        }
    } else if (guess > number) {
        if (liveScore > 1) {
            message.textContent = 'Number is to high'
            liveScore--
        } else {
            message.textContent = 'You lost the game'
            liveScore = 0
        }
    } else {
        if (liveScore > 1) {
            message.textContent = 'Number is to low'
            liveScore--
        } else {
            message.textContent = 'You lost the game'
            liveScore = 0
        }
    }

    score.textContent = liveScore
})

// reset the game
again.addEventListener('click', () => {
    liveScore = 20
    score.textContent = liveScore
    message.textContent = 'Start guessing...'
    body.style.backgroundColor = '#222'
    hiddenNumber.textContent = '?'
    number = Math.trunc(Math.random() * 20) + 1
    guess.value = ''
})