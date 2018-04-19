var Word = require("./Word.js");

var inquirer = require("inquirer");

var superHeroes = ["superman", "batman", "avengers", "flash", "nightwing",
				   "wolverine", "cyclops", "deadpool"];

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
			    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var guessesLeft = 10;
var pickedWord;
var userGuess;
var chosenWord;
var lettersGuessed = [];

function randomWord() {
	var randomWordsIndex = Math.floor(Math.random() * superHeroes.length);
	chosenWord = superHeroes[randomWordsIndex];

	pickedWord = new Word(chosenWord);

	pickedWord.returnString();
}


function guessChecker() {
	for (i = 0; i < pickedWord.letterArray.length; i++) {
		if (pickedWord.letterArray[i].value.toUpperCase() === userGuess.toUpperCase()) {
			console.log("\nCorrect!\n");
			return;
		}		
	}
	guessesLeft--;
	console.log("\nIncorrect! You have " + guessesLeft + " guesses remaining!\n");
}

function winChecker() {
	var trueletters = 0;
	for (i = 0; i < pickedWord.letterArray.length; i++) {
		if (pickedWord.letterArray[i].guessed === true) {
			trueletters++;
			if (trueletters === pickedWord.letterArray.length) {
				console.log("You win! The word or phrase was '" + chosenWord + "'!\n" +
					"\nStart guessing a new word below!\n");
				lettersGuessed = [];
				randomWord();
			}
		}
	}
}

function startGame() {
	inquirer.prompt([
			{
				type: "input",
				message: "Guess a letter!",
				name: "userGuess",

			}
		]).then(function(answer) {
			
			userGuess = answer.userGuess;

			if (lettersGuessed.includes(userGuess)) {
				console.log("\nYou already guessed that letter.\n");
				pickedWord.returnString();
				startGame();

			} else {
				if (alphabet.includes(userGuess.toUpperCase())) {
					lettersGuessed.push(userGuess);
					pickedWord.guessLetter(userGuess);
					guessChecker();
					pickedWord.returnString();
					winChecker();

					if (guessesLeft > 0) {
						startGame();
					} else {
						console.log("Game over! You ran out of guesses!\n");
					}

				} else {
					console.log("\nPlease enter a valid letter.\n");
					pickedWord.returnString();
					startGame();
				}
			}
		})
}

randomWord();

startGame();