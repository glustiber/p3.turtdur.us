<!DOCTYPE html>
<!--
Name: Gregory Lustiber
Date: December 6, 2013
Course: CSCI E-15: Dynamic Web Applications
Project: Project 3
-->
<html>
<head>
	<meta charset="UTF-8">
	<title>HANGMAN</title>
	
	<!--<link rel="stylesheet" href="css/main.css" type="text/css">-->
	<link rel="stylesheet" href="styles.css" type="text/css">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
	
</head>


<body>

	<div id='hangman'>

		<div id='inner-top'>
			<p class='title'>Hangman</p>
		</div>

		<div id='inner-left'>

			<div id='hanging-man'>
				<p class='instructions'>Choose a difficulty level and click 'New Game' to start playing.</p>
			</div>

		</div>

		<div id='inner-right'>
			<div id='game-menu'>
				Difficulty: 
				<select name='difficulty' id='difficulty'>
					<option value='easy'>Easy</option>
					<option value='medium'>Medium</option>
					<option value='hard'>Hard</option>
				</select>
				<button type='submit'>New Game</button><br><br>
				Word: <br><br>
				Guess: <br><br>
				Misses: <br><br>
			</div>

			<div id='keyboard'>
			<p>Choose a letter.</p><br>
				<button>A</button>
				<button>B</button>
				<button>C</button>
				<button>D</button>
				<button>E</button>
				<button>F</button>
				<button>G</button>
				<button>H</button>
				<button>I</button>
				<button>J</button>
				<button>K</button>
				<button>L</button>
				<button>M</button>
				<button>N</button>
				<button>O</button>
				<button>P</button>
				<button>Q</button>
				<button>R</button>
				<button>S</button>
				<button>T</button>
				<button>U</button>
				<button>V</button>
				<button>W</button>
				<button>X</button>
				<button>Y</button>
				<button>Z</button>



			</div>
		</div>

	</div>

<!--	Difficulty: 
	<select>
		<option name='difficulty' id='easy' value='easy'>Easy</option>
		<option name='difficulty' id='medium' value='medium'>Medium</option>
		<option name='difficulty' id='hard' value='hard'>Hard</option>
	</select><br>
	<input type='button' id='new-game' value='New Game'>
	<input type='button' id='show-solution' value='Show Solution'>
	-->
<!--<script src="js/"></script>-->
	
</body>

</html>