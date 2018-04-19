var Letter = require("./Letter.js");


function Word(randomWord) {
	var randomWordArray = [];
	var randomWordObjects = randomWord.split("").forEach(function(currentValue) {
		var newLetter = new Letter(currentValue);
		randomWordArray.push(newLetter);
	})
	
	this.letterArray = randomWordArray;

	this.returnString = function () {
		var displayString = "";
		for (i = 0; i < this.letterArray.length; i++) {
			var displayResult = this.letterArray[i].display();
			displayString = displayString + displayResult;
		}
		
		console.log(displayString + "\n");
		
	}

	this.guessLetter = function(character) {
		for (i = 0; i < this.letterArray.length; i++) {
			this.letterArray[i].guessLetter(character);
		}
	}
}

module.exports = Word;
