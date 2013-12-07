var easyWords = new Array("dog","art","bird","pig","paw","pint","poor","pain","fire","well");
var hardWords = new Array("needle","diaper","pencil","doctor","paint","laptop","paper","liver","brain","table");
var answer;
var answer_length;
var numberIncorrect = 0;
var numberCorrect = 0;
var letters = [];
var word_output = new Array("Word: ");
var guess;
var clickedLetters = [];

$('#new-game').click(function() {

	$('.alphabet-disabled').attr('class','alphabet');
	$('.alphabet').removeAttr('disabled');

	$('#word').html("Word:  ");
	$('#guess').html("Guess:  ");
	$('#miss').html("Misses:  ");

	numberIncorrect = 0;

	var randomNum =  Math.floor(Math.random()*10);

	var difficulty = $('#difficulty').val();

	if (difficulty == 'easy') {
		answer = easyWords[randomNum];
	} 

	if (difficulty == 'hard') {
		answer = hardWords[randomNum];
	}

	answer_length = answer.length;

	for (var i=1; i<=answer_length; i++)
	{
		word_output[i] = "__  ";
	}
	$('#word').html(word_output.join("  "));

	$('#game-progress').css('display','block');
	$('#keyboard').css('display','block');

	$('#hanging-man').html("<img src='hangman2.png' alt='hangman'>");

});

$('.alphabet').click(function() {

	$(this).attr('disabled','disabled');
	$(this).attr('class','alphabet-disabled');

	//var clicked_letter_id = $(this).attr('id');
	var clicked_letter = $(this).html();

	if(clickedLetters.indexOf(clicked_letter) < 0) {
		clickedLetters.push(clicked_letter);
	}
	console.log(clickedLetters);

	$('#guess').html("Guess:  ");
	var guessSpace = $('#guess').html();
	guess = $(this).html();
	var guesses = guessSpace.concat(guess);
	$('#guess').html(guesses);

	var clicked_lowercase = clicked_letter.toLowerCase();

	var location_in_string = answer.indexOf(clicked_lowercase);

	console.log(answer);
	console.log(location_in_string);

	if (location_in_string < 0) {

		var newGuessSpace = guesses.concat("<span class='incorrect'>INCORRECT</span>");
		$('#guess').html(newGuessSpace);

		// figure out how to reverse, so most recently picked are at beginning
		var missSpace = $('#miss').html();
		var miss = $(this).html();
		var misses = missSpace.concat(miss);
		$('#miss').html(misses + " ");
		wrong_choice();

		if(numberIncorrect > 5) {
			$('#end-of-game').css('display','block');
			$('.result').html('YOU LOSE!!!');
			$('.result').css('color','red');
		}

	} 

	if (location_in_string >= 0) {

		var newGuessSpace = guesses.concat("<span class='correct'>CORRECT</span>");
		$('#guess').html(newGuessSpace);

		letters = answer.split("");

		display_word_output();


		for(var i = 0; i < letters.length; i++) {

			if(letters[i] == guess.toLowerCase() ) {

					//console.log(letters[i]);
					numberCorrect++;
			}
			
		}

		console.log(numberCorrect);

		//numberCorrect++
		if(numberCorrect >= answer.length) {
			$('#end-of-game').css('display','block');
			$('.result').html('YOU WIN!!!');
			$('.result').css('color','green');

		}


	}

});

$('#end-of-game').click(function() {
	location.reload();
});

function wrong_choice() {
	//console.log('wrong_choice function called');
	numberIncorrect++;
	//console.log(numberIncorrect);
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

function display_word_output() {

	for(var i=1;i <= letters.length;i++)
	{
		if (letters[i - 1] == guess.toLowerCase()) 
		{
			word_output[i] = guess;
			//console.log(word_output[i]);
		}

	}
	//console.log(word_output.join("  "));
	$('#word').html(word_output.join("  "));

}


