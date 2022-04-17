document.addEventListener('DOMContentLoaded', () => {
    let letters = document.querySelector('#spaces');
    let message = document.querySelector('#message');
    let guesses = document.querySelector('#guesses');
    let apples = document.querySelector('#apples');
    let replay = document.querySelector('#replay');

    let currentGame;

    let randomWord = function () {
        let words = ['apple', 'banana', 'orange', 'pear'];

        return function () {
            if (words.length === 0) return undefined;
            let randomIndex = Math.floor(Math.random() * (words.length - 1 + 1));
            return words.splice(randomIndex, 1)[0];
        };
    }();

    class Game {
        constructor () {
            this.incorrect = 0;
            this.lettersGuessed = [];
            this.correctSpaces = 0;
            this.word = randomWord();
            if (!this.word) {
                this.displayMessage("Sorry, I've run out of words!");
                return this;
            }
            this.word = this.word.split("");
            this.init();
        }

        displayMessage(text) {
            message.textContent = text;
        }
    
        createBlanks() {
            let spaces = (new Array(this.word.length + 1)).join("<span></span>");

            let spans = letters.querySelectorAll('span'); //currently empty;
            spans.forEach(span => {
                span.parentNode.removeChild(span);
            });
            letters.insertAdjacentHTML('beforeend', spaces);
            this.spaces = document.querySelectorAll('#spaces span');
        }

        checkLetter(letter) {
            if (this.lettersGuessed.includes(letter)) {
                return;
            }

            this.lettersGuessed.push(letter);
            guesses.insertAdjacentHTML('beforeend', `<span>${letter}</span>`)

            if (this.word.includes(letter)) {
                this.word.forEach((char, index) => {
                    if (char === letter) this.spaces[index].textContent = letter;
                })
            } else {
                this.incorrect += 1;
                apples.className = `guess_${this.incorrect}`;
            }
        }

        guessedAllLetters() {
            return this.word.every(letter => {
                return this.lettersGuessed.includes(letter);
            }) 
        }

        checkGameStatus() {
            if (this.incorrect === 6) {
                return 'loss';
            } else if (this.guessedAllLetters()) {
                return 'win';
            }
        }

        init() {
            this.createBlanks();
        }
    }

    function checkLetterStatus(event) { //Named function that checks if input is a a single letter;
    // if it is, it calls the objects checkLetter method in order to perform the correct actions;
        let inputLetter = event.key;
        if (inputLetter.length > 1 || !event.key.match(/[a-z]/i)) {
            return;
        }
        currentGame.checkLetter(inputLetter);
    }

    function newGame() {
        currentGame = new Game();
        if (!currentGame.word) return;
        document.removeEventListener('keyup', displayGameStatus);
        message.textContent = '';
        document.body.className = '';
        replay.setAttribute('hidden', '');
        apples.className = '';
        guesses.innerHTML = "<h2>Guesses:</h2>";
        document.addEventListener('keyup', checkLetterStatus);
        document.addEventListener('keyup', displayGameStatus);
    }

    function displayGameStatus(event) {
        if (currentGame.checkGameStatus() === 'loss') {
            message.textContent = 'You lost!';
            document.body.classList.add('lose');
            replay.removeAttribute('hidden');
            document.removeEventListener('keyup', checkLetterStatus)
        } else if (currentGame.checkGameStatus() === 'win') {
            message.textContent = 'You win!';
            document.body.classList.add('win');
            replay.removeAttribute('hidden');
            document.removeEventListener('keyup', checkLetterStatus);
        }
    }

    newGame();    

    replay.addEventListener('click', (event) => {
        event.preventDefault();
        newGame();
    })
})
    



