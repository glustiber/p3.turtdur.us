var easyWords = new Array("dog","art","bird","pig","paw","pint","poor","pain","fire","well");
var hardWords = new Array("needle","diaper","pencil","doctor","paint","laptop","paper","liver","brain","table");
var answer;
var answer_length;
var numberIncorrect = 0;
var letters = [];
var word_output = new Array("Word: ");
var guess;

$('#new-game').click(function() {

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

	/*for(var i=1;i<=answer_length;i++)
	{
		var wordSpace = $('#word').html();
		var dash = "__  "

		var dashes = wordSpace.concat(dash);

		$('#word').html(dashes);

	}*/

	//var newWordSpace = dashes.concat("  " + answer_length + " letters long.");

	//$('#word').html(newWordSpace);

	$('#game-progress').css('display','block');
	$('#keyboard').css('display','block');

	$('#hanging-man').html("<img src='hangman2.png' alt='hangman'>");

});

$('.alphabet').click(function() {

	//var clicked_letter_id = $(this).attr('id');
	var clicked_letter = $(this).html();

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
		var newGuessSpace = guesses.concat(" - <span class='incorrect'>incorrect</span>");
		$('#guess').html(newGuessSpace);

		// figure out how to reverse, so most recently picked are at beginning
		var missSpace = $('#miss').html();
		var miss = $(this).html();
		var misses = missSpace.concat(miss);
		$('#miss').html(misses + " ");
		wrong_choice();

		if(numberIncorrect > 5) {
			$('#you-lose').css('display','block');
		}

	} 

	if (location_in_string >= 0) {
		var newGuessSpace = guesses.concat(" - <span class='correct'>correct!</span>");
		$('#guess').html(newGuessSpace);

		display_word_output();

/*
		$('#word').html("Word: ");

		for(var i=0;i<=answer_length-1;i++)
		{

			if (i != location_in_string) {
				var wordSpace = $('#word').html();
				var dash = "__  "
				var dashes = wordSpace.concat(dash);
				$('#word').html(dashes);
			}

			if (i = location_in_string) {
				//var wordSpace = $('#word').html();
				//var letter = guess + "  ";
				//var dashes = wordSpace.concat(dash);
				//$('#word').html(dashes);
			}

		}
*/
	}

});

$('.newgame').click(function() {
	if ($(this).html() == "Yes")
	{
		console.log("Yes, new game please.");
	}
	if ($(this).html() == "No")
	{
		console.log("NO, I DO NOT WANT TO PLAY AGIAN");
	}
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

	letters = answer.split("");

	for(var i=1;i <= letters.length;i++)
	{
		if (letters[i - 1] == guess.toLowerCase()) 
		{
			word_output[i] = guess;
			//console.log(word_output[i]);
		}
		/*else (letters[i-1] != guess.toLowerCase())
		{
			word_output[i] = "__  ";
		}*/

	}
	//console.log(word_output.join("  "));
	$('#word').html(word_output.join("  "));

}


