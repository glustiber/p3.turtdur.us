var easyWords = new Array("dog","art","bird","pig","paw","pint","poor","pain","fire","well");
var hardWords = new Array("needle","diaper","pencil","doctor","paint","laptop","paper","liver","brain","table");

$('#new-game').click(function() {

	$('#word').html("Word:  ");

	var randomNum =  Math.floor(Math.random()*10);

	var difficulty = $('#difficulty').val();

	if (difficulty == 'easy') {
		var answer = easyWords[randomNum];
	} 

	if (difficulty == 'hard') {
		var answer = hardWords[randomNum];
	}

	var answer_length = answer.length;

	for(var i=1;i<=answer_length;i++)
	{
		var wordSpace = $('#word').html();
		var dash = "__  "

		var dashes = wordSpace.concat(dash);

		$('#word').html(dashes);

	}

	var newWordSpace = dashes.concat("  " + answer_length + " letters long.");

	$('#word').html(newWordSpace);

	$('#keyboard').css('display','block');

	$('#hanging-man').html("<img src='hangman2.png' alt='hangman'>")

});