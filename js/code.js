// setup global variables we need: player1Name, player2Name, xOro, playerStartOrder, player1Wins, player2Wins, gamesToGo, gamesNos, row1Array, row2Array, row3Array, column1Array, column2Array, column3Array, diagonal1Array, diagonal2Array, tiedGames, displayNoneSwitch
var player1Name = "";
var player2Name = "";
var player1Wins = 0;
var player2Wins = 0;
var gamesToGo = 0;
var nosOfGames = 0;
var tiedGames = 0;
var row1Array = [null, null, null];
var row2Array = [null, null, null];
var row3Array = [null, null, null];
var column1Array = [null, null, null];
var column2Array = [null, null, null];
var column3Array = [null, null, null];
var diagonal1Array = [null, null, null];
var diagonal2Array = [null, null, null];
var displayNoneSwitch = "display: none"

//setup function developed to set the initial variables to pass into the gameplay and switch into game mode
function setupVariables()  {
  player1Name = document.getElementById('player1Name').value;
  player2Name = document.getElementById('player2Name').value;
  nosOfGames = document.getElementById('nosOfGames').value;
}
console.log(player1Name, player2Name, nosOfGames);


//start game function

// gameplay function

// function to load winner arrays

// function to check arrays for a winner after 5th move

//winner function

//scoring and games to go function

//reset game function
