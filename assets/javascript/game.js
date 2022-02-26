var letters = ["a","b","c","d","e","f", "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",],
    randomLetter = "",
    winCount = 0,
    lossCount = 0,
    guessesLeft = 0,
    guessedLetters = [],
    defaultGuessesLeft = 9;

window.addEventListener("keypress", onKeyPress, false);
newGame();

function newGame() {
    guessedLetters = [];
    resetGuesses();
    generateRandomLetter();
    console.log(randomLetter); // Turn on to see randomLetter in console
    displayOnScreen("wins", `Wins: ${String(winCount)}`);
    displayOnScreen("losses", `Losses: ${String(lossCount)}`);
    displayOnScreen("guessesleft", `Guesses Left: ${String(guessesLeft)}`);
}

function onKeyPress(key) {
    letter = key.key.toLowerCase();
    if (
        letters.includes(letter, 0) &&
        guessedLetters.includes(letter, 0) === false
    ) {
        guessedLetters.push(letter);
        printKeyPressed(letter);
        guessesLeft--;
        displayOnScreen("guessesleft", `Guesses Left: ${String(guessesLeft)}`);
        if (String(letter) == String(randomLetter)) {
            winCount++;
            displayOnScreen("wins", `Wins: ${String(winCount)}`);
            newGame();
        }
        if (guessesLeft === 0) {
            lossCount++;
            displayOnScreen("losses", `Losses: ${String(lossCount)}`);
            newGame();
        }
    }
}

function generateRandomLetter() {
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
}

function printKeyPressed(letter) {
    if (guessesLeft == 9) {
        document.getElementById("guessessofar").innerHTML += letter;
    } else {
        document.getElementById("guessessofar").innerHTML += ", " + letter;
    }
}

function resetGuesses() {
    guessesLeft = defaultGuessesLeft;
    displayOnScreen("guessesleft", `Losses: ${String(guessesLeft)}`);
    displayOnScreen("guessessofar", `Your Guesses so far: `);
}

function displayOnScreen(divContainer, content) {
    document.getElementById(divContainer).innerHTML = content;
}