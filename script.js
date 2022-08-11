'use strict';

const
    number = Math.trunc(Math.random() * 20) + 1

let
    check = document.querySelector('.check'),
    message = document.querySelector('.message'),
    hiddenNumber = document.querySelector('.number')

check.addEventListener('click', () => {
    const guess = Number( document.querySelector('.guess').value )

    if (!guess) {
        message.textContent = 'No number'
    } else if (guess === number) {
        message.textContent = 'Number is correct'
        hiddenNumber.textContent = String(number)
    } else if (guess > number) {
        message.textContent = 'Number is to high'
    } else {
        message.textContent = 'Number is to low'
    }
})