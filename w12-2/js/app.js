// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');


// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Linsten  for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    //validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    } else {
        //Check if won
        if (guess === winningNum) {
            //Disable input
            guessInput.disabled = true;
            //Change border color
            guessInput.style.borderColar = 'green';
            //Set message
            setMessage(`${winningNum} is correct, You WIN!`, 'green');
        } else {
            setMessage(`${guess} is wroung,You LOSE!`, 'red');
        }
    }

});

//Set message
function setMessage(msg, colar) {
    message.style.colar = colar;
    message.textContent = msg;
}