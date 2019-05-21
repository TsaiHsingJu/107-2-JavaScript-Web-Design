// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
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

//
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }

});

// Linsten  for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    //validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    } else {
        //Check if won
        if (guess === winningNum) {
            //Game over -won
            gameOver(true, `${winningNum} is correct,YOU WIN!`);
        } else {
            //Wrong number
            guessLeft -= 1;
            if (guessLeft === 0) {
                //Game over - lost
                gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`, guessLeft);
            } else {
                // Game continues - answer wroung
                gameOver(false, `${guess} is not correct,${guessLeft} guess left`, guessLeft);

            }

        };
    }
});


//Game Over
function gameOver(won, msg, guessLeft) {
    let color;
    won === true ? color = 'green' : color = 'red';

    if (guessLeft === 0 || won === true) {

        //PLAY Again?
        guessInput.disabled = true;
        guessBtn.value = 'Play Again';
        guessBtn.className += 'play-again';
    } else {
        guessInput.value = '';
    }
    guessInput.style.borderColor = color;
    setMessage(msg, color);

    // //PLAY Again?
    // guessBtn.value = 'Play Again';
    // guessBtn.className += 'play-again';
}

//Get Winning Number
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}