var easyWords = new Array("dog","art","bird","pig","paw","pint","poor","pain","fire","well");
var hardWords = new Array("needle","diaper","pencil","doctor","paint","laptop","paper","liver","brain","table");
var answer;
var answer_length;
var numberIncorrect;

$('#new-game').click(function() {

	$('#word').html("Word:  ");

	var randomNum =  Math.floor(Math.random()*10);

	var difficulty = $('#difficulty').val();

	if (difficulty == 'easy') {
		answer = easyWords[randomNum];
	} 

	if (difficulty == 'hard') {
		answer = hardWords[randomNum];
	}

	answer_length = answer.length;

	for(var i=1;i<=answer_length;i++)
	{
		var wordSpace = $('#word').html();
		var dash = "__  "

		var dashes = wordSpace.concat(dash);

		$('#word').html(dashes);

	}

	var newWordSpace = dashes.concat("  " + answer_length + " letters long.");

	$('#word').html(newWordSpace);

	$('#game-progress').css('display','block');
	$('#keyboard').css('display','block');

	$('#hanging-man').html("<img src='hangman2.png' alt='hangman'>");

});

$('.alphabet').click(function() {

	$(this).css('background-color','white');
	$(this).css('cursor','auto');
	$(this).attr('disabled','disabled');

	//var clicked_letter_id = $(this).attr('id');
	var clicked_letter = $(this).html();

	$('#guess').html("Guess:  ");
	var guessSpace = $('#guess').html();
	var guess = $(this).html();
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


	} 

	if (location_in_string >= 0) {
		var newGuessSpace = guesses.concat(" - <span class='correct'>correct!</span>");
		$('#guess').html(newGuessSpace);

		$('#word').html("Word: ");
/*
		for(var i=0;i<=answer_length-1;i++)
		{

			if (i != location_in_string) {
				var wordSpace = $('#word').html();
				var dash = "__  "
				var dashes = wordSpace.concat(dash);
				$('#word').html(dashes);
			}

			if (i = location_in_string) {
				var wordSpace = $('#word').html();
				var letter = $(this).html() + "  ";
				var dashes = wordSpace.concat(dash);
				$('#word').html(dashes);
			}

		}
*/
	}

});


