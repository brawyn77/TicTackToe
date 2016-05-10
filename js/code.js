// setup global variables we need: player1Name, player2Name, xOro, playerStartOrder, player1Wins, player2Wins, gamesToGo, gamesNos, row1Array, row2Array, row3Array, column1Array, column2Array, column3Array, diagonal1Array, diagonal2Array, tiedGames, displayNoneSwitch
// set playernames to simplifying troubleshooting the game play
var player1Name = "Brad";
var player2Name = "Bob";
var player1Wins = 0;
var player2Wins = 0;
var gamesToGo = 10;
var nosOfGames = 10;
var tiedGames = 0;
var row1Array = [null, null, null];
var row2Array = [null, null, null];
var row3Array = [null, null, null];
var column1Array = [null, null, null];
var column2Array = [null, null, null];
var column3Array = [null, null, null];
var diagonal1Array = [null, null, null];
var diagonal2Array = [null, null, null];

//setup function developed to set the initial variables to pass into the gameplay and switch into game mode
function setupVariables()  {
  player1Name = document.getElementById('player1Name').value;
  player2Name = document.getElementById('player2Name').value;
  nosOfGames = document.getElementById('nosOfGames').value;
  // $('#setupScreen').css({"display": "none"});
  // $('#wrapper').css({"display": "initial"});
}

// gameplay function
function gamePlay()  {
  var addXorO = document.getElementById('contentBoxes');
  contentBoxes.style.cursor = 'pointer';
  contentBoxes.onclick = function() {
    console.log("put x in box");
  };
}

// function to load winner arrays

// function to check arrays for a winner after 5th move

//winner function

//scoring and games to go function

// put in hard start to troubleshoot the gameplay
startGame();

//start game function
function startGame()  {
// put players names into the game board
// put games in games to go
//put in initial scores into Player1, Player2 and Tied games
  $('#gToG').text("Games to go: " + nosOfGames);
  $('#p1W').text(player1Name + " wins: " + player1Wins);
  $('#p2W').text(player2Name + " wins: " + player2Wins);
  $('#tG').text("Tied games: " + tiedGames);
  gamePlay();
}

//reset game function
