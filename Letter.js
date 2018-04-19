function Letter(letter) {
	this.value = letter;
	this.guessed = false;
	if (letter === " ") {
		this.guessed = true;
	}

	this.display = function() {
		if (this.guessed) {
			return this.value + " ";
		} else {
			return "_ ";
		}
	}
	this.guessLetter = function(userGuess) {
		if (userGuess.toUpperCase() === this.value.toUpperCase()) {
			console.log("Correct!")
			this.guessed = true;
		} else {
			console.log("Incorrect!")
		}
	}
}

module.exports = Letter;