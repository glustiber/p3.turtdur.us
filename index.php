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
	<title>Hangman</title>
	
	<!--<link rel="stylesheet" href="css/main.css" type="text/css">-->
	<link rel="stylesheet" href="styles.css" type="text/css">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
	
</head>


<body>

	<div id='hangman'>

		<div id='end-of-game'>
			<h1 class='result'></h1><br>
			<p>Click inside the box to play again.</p><br>

		</div>

		<div id='inner-top'>
			<p class='title'>Hangman</p>
		</div>

		<div id='inner-left'>

			<div id='hanging-man'>
				<p class='instructions'>Select a difficulty and click 'New Game' to start playing.</p>
			</div>

		</div>

		<div id='inner-right'>
			<div id='game-menu'>
				Difficulty: 
				<select name='difficulty' id='difficulty'>
					<option value='easy'>Easy</option>
					<option value='hard'>Hard</option>
				</select>
				<button type='submit' id="new-game">New Game</button><br><br>
			</div>	

			<div id='game-progress'>
				<p id="word">Word:  </p><br>
				<p id="guess">Guess: </p><br>
				<p id="miss">Misses: </p><br>
			</div>

			<div id='keyboard'>
			<p>Choose a letter.</p><br>
				<button id='a' class='alphabet'>A</button>
				<button id='b' class='alphabet'>B</button>
				<button id='c' class='alphabet'>C</button>
				<button id='d' class='alphabet'>D</button>
				<button id='e' class='alphabet'>E</button>
				<button id='f' class='alphabet'>F</button>
				<button id='g' class='alphabet'>G</button>
				<button id='h' class='alphabet'>H</button>
				<button id='i' class='alphabet'>I</button>
				<button id='j' class='alphabet'>J</button>
				<button id='k' class='alphabet'>K</button>
				<button id='l' class='alphabet'>L</button>
				<button id='m' class='alphabet'>M</button>
				<button id='n' class='alphabet'>N</button>
				<button id='o' class='alphabet'>O</button>
				<button id='p' class='alphabet'>P</button>
				<button id='q' class='alphabet'>Q</button>
				<button id='r' class='alphabet'>R</button>
				<button id='s' class='alphabet'>S</button>
				<button id='t' class='alphabet'>T</button>
				<button id='u' class='alphabet'>U</button>
				<button id='v' class='alphabet'>V</button>
				<button id='w' class='alphabet'>W</button>
				<button id='x' class='alphabet'>X</button>
				<button id='y' class='alphabet'>Y</button>
				<button id='z' class='alphabet'>Z</button>
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
<script src="javascript.js"></script>
	
</body>

</html>