var randomNumber = Math.floor(Math.random() * 99) + 1;
var lastResult = document.querySelector("#lastResult");
var lowOrHi = document.querySelector("#lowOrHi");
var guessSubmit = document.querySelector(".guessSubmit");
var guessField = document.querySelector(".guessField");
var guessCount = 1;
var resetButton = document.querySelector("#reset");
var gamesLost = 0;
var gamesWon = 0;

guessField.focus();
resetButton.style.display = 'none';

function resetGame() {
    guessCount = 1;
    var resetParas = document.querySelectorAll('.resultParas p');

    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.style.display = 'none';
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 99) + 1;
    document.getElementById("gamesWon").innerHTML = "Number of Games Won: " + gamesWon;
    document.getElementById("gamesLost").innerHTML = "Number of Games Lost: " + gamesLost;
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.style.display = 'inline';
    resetButton.addEventListener('click', resetGame);
}

function checkGuess() {
    var userGuess = Number(guessField.value);

    if (guessCount === 1) {
        guesses.innerHTML = 'Previous Guessses: ';
    }

    if (userGuess > 99 || userGuess < 1) {
        alert("Guess was out of range! Please only enter values between 1 - 99");
        return;
    }

    guesses.innerHTML += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.innerHTML = "Congratulations! You got it right!";
        lastResult.style.backgroundColor = 'green';
        lowOrHi.innerHTML = '';
        gamesWon += 1;
        setGameOver();
    } else if (guessCount === 7) {
        lastResult.innerHTML = "Sorry, you lost!";
        gamesLost += 1;
        setGameOver();
    } else {

        lastResult.innerHTML = "Wrong";
        lastResult.style.backgroundColor = "red";

        if (userGuess < randomNumber) {
            lowOrHi.innerHTML = "Last guess was too low!";
        } else if (userGuess > randomNumber) {
            lowOrHi.innerHTML = "Last guess was too high!";
        }
    }
    guessCount += 1;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);