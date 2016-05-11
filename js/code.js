// setup global variables we need: player1Name, player2Name, player1Wins, player2Wins, gamesToGo, gamesNos, row1Array, row2Array, row3Array, column1Array, column2Array, column3Array, diagonal1Array, diagonal2Array, tiedGames, displayNoneSwitch
// set playernames to simplifying troubleshooting the game play
var player1Name = "Brad";
var player2Name = "Bob";
var player1Wins = 0;
var player2Wins = 0;
var gamesToGo = 10;
var nosOfGames = 10;
var tiedGames = 0;
// var successArray = [[0, 0, 0], [1, 1, 1], [0, 0, 0]]
var row1ArrayX = [null, null, null];
var row2ArrayX = [null, null, null];
var row3ArrayX = [null, null, null];
var column1ArrayX = [null, null, null];
var column2ArrayX = [null, null, null];
var column3ArrayX = [null, null, null];
var diagonal1ArrayX = [null, null, null];
var diagonal2ArrayX = [null, null, null];
var row1ArrayO = [null, null, null];
var row2ArrayO = [null, null, null];
var row3ArrayO = [null, null, null];
var column1ArrayO = [null, null, null];
var column2ArrayO = [null, null, null];
var column3ArrayO = [null, null, null];
var diagonal1ArrayO = [null, null, null];
var diagonal2ArrayO = [1, 1, 1];

//setup function developed to set the initial variables to pass into the gameplay and switch into game mode
function setupVariables()  {
  player1Name = document.getElementById('player1Name').value;
  player2Name = document.getElementById('player2Name').value;
  nosOfGames = document.getElementById('nosOfGames').value;
  // $('#setupScreen').css({"display": "none"});
  // $('#wrapper').css({"display": "initial"});
}

// gameplay function which alternates moves and checks that a move has not already been made or that 9 moves havent been completed
$('.column').on('click', function(){
        $(this).append('<img src="O.png" alt="">')
        .css('border-color', 'black');
});

// function to load winner arrays after each move alternating between X and O
// Use a hash to store index R1C1 for each div #id to know which arrays to load them into


// function to check arrays for a winner after 5th move

function checkArrays(a)  {
  var count = 0;
  for(var i=0, n=3; i < n; i++) {
      count += a[i];
    }
    checkSuccess(count);
  }

function checkSuccess(count) {
      if (count != 3)  {
        console.log("You didnt win");
      } else  {
        console.log("You win");
      }
   }

//winner function

//scoring and games to go function
// function updateScore()  {
//
// }

//start game function
function startGame()  {
// put players names into the game board
// put games in games to go
//put in initial scores into Player1, Player2 and Tied games
  // $('#gToG').text("Games to go: " + nosOfGames);
  // $('#p1W').text(player1Name + " wins: " + player1Wins);
  // $('#p2W').text(player2Name + " wins: " + player2Wins);
  // $('#tG').text("Tied games: " + tiedGames);

// should use a class function to cycle through these
  checkArrays(row1ArrayX);
  checkArrays(row2ArrayX);
  checkArrays(row3ArrayX);
  checkArrays(column1ArrayX);
  checkArrays(column2ArrayX);
  checkArrays(column3ArrayX);
  checkArrays(diagonal1ArrayX);
  checkArrays(diagonal2ArrayX);
  checkArrays(row1ArrayO);
  checkArrays(row2ArrayO);
  checkArrays(row3ArrayO);
  checkArrays(column1ArrayO);
  checkArrays(column2ArrayO);
  checkArrays(column3ArrayO);
  checkArrays(diagonal1ArrayO);
  checkArrays(diagonal2ArrayO);
}

//reset game function
function resetValues()  {
  player1Name = "";
  player2Name = "";
  player1Wins = 0;
  player2Wins = 0;
  gamesToGo = 0;
  nosOfGames = 0;
  tiedGames = 0;
  // $('#setupScreen').css({"display": "initial"});
  // $('#wrapper').css({"display": "none"});
}

// put in hard start to troubleshoot the gameplay
startGame();
