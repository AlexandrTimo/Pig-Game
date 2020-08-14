/*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores, roundScore, activePlayer, gamePlaying;
var lastDice;
init();


// Roll Button
document.querySelector('.btn-roll').addEventListener('click', function(){
	if(gamePlaying){

		//1. Random number
		var dice1 = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;


		//CHALLENGE #3

		//Add another dice to the game

		//2. Display result (dice image)
		document.getElementById('dice-1').style.display = 'block';
		document.getElementById('dice-2').style.display = 'block';
		document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
		document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

		//3. Updating round score IF rolled number was NOT 1
		if (dice1 !== 1 && dice2 !== 1){
			//Add score
			roundScore += dice1 + dice2;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		}
		//4. Next player
		else{
			nextPlayer();
		}


		/* //5. Check IF equal lastDice = (6) player loose all scores and than next player


		//CHALLENGE #1

		//A player looses his ENTIRE score when he rolls two 6 in a row.

		if (dice === 6 && lastDice === 6){
			scores[activePlayer] = 0;
			document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
			nextPlayer();
		}
		//3. Updating round score IF rolled number was NOT 1
		else if (dice !== 1){
			//Add score
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		}
		//4. Next player
		else{
			nextPlayer();
		}

		lastDice = dice; */

	}
});

// Hold Button
document.querySelector('.btn-hold').addEventListener('click', function(){
	if(gamePlaying){

		//1. Add current score to Global score
		scores[activePlayer] += roundScore;

		//2. Update User Interface
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];




		//CHALLENGE #2

		//Add an input field to the HTML where players can set the winning score
		var input = document.querySelector('.final-score').value;
		var winningScore;

		// Undefined, 0, null or '' are coreced to false
		// Anything else is CORECED to true

		if (input){
			winningScore = input;
		}
		else {
			winningScore = 100;
		}



		//3. Check if the player Won the game
		if (scores[activePlayer] >= winningScore){
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			document.getElementById('dice-1').style.display = 'none';
			document.getElementById('dice-2').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		}
		//4. Next player
		else {
			nextPlayer();
		}
	}
});


// The function nextPlayer (rule DRY)
function nextPlayer(){
	sixDice = 0;

	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

		// Go back player result to 0
		roundScore = 0;

		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		// Change background color of activePlayer
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		// Remove dice and step to next player
		document.getElementById('dice-1').style.display = 'none';
		document.getElementById('dice-2').style.display = 'none';

}


// Refresh for "NEW game Button"
document.querySelector('.btn-new').addEventListener('click', init);

// Function INITIALIZATION parameters and Refresh all User Interface
function init(){

	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');

}

