/*
Name: Gregory Lustiber
Date: December 6, 2013
Course: CSCI E-15: Dynamic Web Applications
Project: Project 3
*/

var easyWords = new Array("dog","art","bird","pig","paw","pint","poor","pain","fire","well");
var hardWords = new Array("needle","diaper","pencil","doctor","paint","laptop","paper","liver","brain","table");
var answer;
var numberIncorrect = 0;
var numberCorrect = 0;
var letters = [];
var word_output = new Array("Word: ");
var guess;
var clickedLetters = [];

// set up a new game
$('#new-game').click(function() {

	// set keyboard back to default at start of new game
	$('.alphabet-disabled').attr('class','alphabet');
	$('.alphabet').removeAttr('disabled');

	// set game stats back to default at start of new game
	$('#word').html("Word:  ");
	$('#guess').html("Guess:  ");
	$('#miss').html("Misses:  ");
	numberIncorrect = 0;

	// get a random number between 1 and 9
	var randomNum =  Math.floor(Math.random()*10);

	// get the selected difficulty level
	var difficulty = $('#difficulty').val();

	// pick a random easy word
	if (difficulty == 'easy') {
		answer = easyWords[randomNum];
	} 

	// pick a random hard word
	if (difficulty == 'hard') {
		answer = hardWords[randomNum];
	}

	// set an array of underscores. 1 underscore for each letter in the answer
	for (var i=1; i<=answer.length; i++)
	{
		word_output[i] = "__  ";
	}
	// convert the array of underscores to a string. Display on game board.
	$('#word').html(word_output.join("  "));

	// display the game statistics and keyboard
	$('#game-progress').css('display','block');
	$('#keyboard').css('display','block');

	// display the initial image of the gallows
	$('#hanging-man').html("<img src='hangman2.png' alt='hangman'>");

});

// to perform when a letter is chosen
$('.alphabet').click(function() {

	// after letter is picked, disable it so it can't be picked again
	$(this).attr('disabled','disabled');
	$(this).attr('class','alphabet-disabled');

	// get the letter that was chosen
	var clicked_letter = $(this).html();

	// if the letter was not already chosen, add it to array of chosen letters
	if(clickedLetters.indexOf(clicked_letter) < 0) {
		clickedLetters.push(clicked_letter);
	}

	// Display the user's guess
	$('#guess').html("Guess:  ");
	var guessSpace = $('#guess').html();
	guess = $(this).html();
	var guesses = guessSpace.concat(guess);
	$('#guess').html(guesses);

	var clicked_lowercase = clicked_letter.toLowerCase();

	// determine the the chosen letter is in the answer
	var location_in_string = answer.indexOf(clicked_lowercase);

	// what to do if the choice is wrong
	if (location_in_string < 0) {

		// let the user know they were wrong
		var newGuessSpace = guesses.concat("<span class='incorrect'>INCORRECT</span>");
		$('#guess').html(newGuessSpace);

		// display wrong choice with other misses
		var missSpace = $('#miss').html();
		var miss = $(this).html();
		var misses = missSpace.concat(miss);
		$('#miss').html(misses + " ");

		// Display appropriate image of hangman, depending on number of incorrect guesses
		wrong_choice();

		// determine if the game has ended and display result
		if(numberIncorrect > 5) {
			$('#end-of-game').css('display','block');
			$('.result').html('<p>YOU LOSE!!!</p>');
			$('.disp-answer').html('Answer: ' + answer.toUpperCase() + ' <br><br>');
			$('.result').css('color','red');
		}

	} 

	// what to do if choice is correct
	if (location_in_string >= 0) {

		// let the user know they were correct
		var newGuessSpace = guesses.concat("<span class='correct'>CORRECT</span>");
		$('#guess').html(newGuessSpace);

		// split the answer into array of letters
		letters = answer.split("");

		// function to 'fill in' the word
		display_word_output();

		// increase numberCorrect by the appropriate amount
		for(var i = 0; i < letters.length; i++) {

			if(letters[i] == guess.toLowerCase() ) {

					numberCorrect++;
			}
			
		}

		// determine if the game has ended and display result
		if(numberCorrect >= answer.length) {
			$('#end-of-game').css('display','block');
			$('.result').html('YOU WIN!!!');
			$('.result').css('color','green');

		}

	}

});

// if the user clicks new game, refresh page and start again
$('#play-again').click(function() {
	location.reload();
});

// determine which hangman image to display, based on number of incorrect choices
function wrong_choice() {

	numberIncorrect++;
	switch(numberIncorrect)
	{
		case 1:
			$('#hanging-man').html("<img src='hangman2-miss1.png' alt='hangman'>");
			break;
		case 2:
			$('#hanging-man').html("<img src='hangman2-miss2.png' alt='hangman'>");
			break;
		case 3:
			$('#hanging-man').html("<img src='hangman2-miss3.png' alt='hangman'>");
			break;
		case 4:
			$('#hanging-man').html("<img src='hangman2-miss4.png' alt='hangman'>");
			break;
		case 5:
			$('#hanging-man').html("<img src='hangman2-miss5.png' alt='hangman'>");
			break;
		case 6:
			$('#hanging-man').html("<img src='hangman2-miss6.png' alt='hangman'>");
			break;
	}

}

// replace underscores with correct guesses to fill in the answer
function display_word_output() {

	for(var i=1;i <= letters.length;i++)
	{
		if (letters[i - 1] == guess.toLowerCase()) 
		{
			word_output[i] = guess;
		}
	}
	$('#word').html(word_output.join("  "));
}
