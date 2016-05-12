// setup global variables we need: player1Name, player2Name, player1Wins, player2Wins, gamesToGo, gamesNos, row1Array, row2Array, row3Array, column1Array, column2Array, column3Array, diagonal1Array, diagonal2Array, tiedGames, displayNoneSwitch
// set playernames to simplifying troubleshooting the game play
var player1Name = "Bad";
var player2Name = "Bob";
var player1Wins = 0;
var player2Wins = 0;
var gamesToGo = 0;
var nosOfGames = 3;
var tiedGames = 0;
var turn = 1;
var ticTacToeArray = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
var player1Token = 1;
var player2Token = 10;
var win = 0;

//setup function developed to set the initial variables to pass into the gameplay and switch into game mode
function setupVariables() {
    player1Name = document.getElementById('player1Name').value;
    player2Name = document.getElementById('player2Name').value;
    nosOfGames = document.getElementById('nosOfGames').value;
    $('#setupScreen').css({"display": "none"});
    $('#wrapper').css({"display": "initial"});
}

//start game function
function startGame() {
    // put players names into the game board
    // put games in games to go
    // put in initial scores into Player1, Player2 and Tied games
    $('#gToG').text("Games to go: " + nosOfGames);
    $('#p1W').text(player1Name + " wins: " + player1Wins);
    $('#p2W').text(player2Name + " wins: " + player2Wins);
    $('#tG').text("Tied games: " + tiedGames);
    gameStart();
}

// gameplay function which alternates moves
// checks that 9 moves havent been completed
// check for an existing move in the square
//if existing then prompt for another move else place image
// also needs to put them into the array representing the board
function gameStart()  {
$('.column').on('click', function () {
    var rowIndex = $(this).parent().index('.row');
    var columnIndex = $(this).index();

    if (ticTacToeArray[rowIndex][columnIndex] == "0") {

        if (turn % 2 === 1) {
            $(this).append('<img src="X.png" alt="">')
                .css('border-color', 'black');
            ticTacToeArray[rowIndex][columnIndex] = player1Token;
            console.table(ticTacToeArray);
            checkSuccess(rowIndex, columnIndex);
            turn++;
          } else {
            $(this).append('<img src="O.png" alt="">')
                .css('border-color', 'black');
            ticTacToeArray[rowIndex][columnIndex] = player2Token;
            console.table(ticTacToeArray);
            checkSuccess(rowIndex, columnIndex);
            turn++;
          }
      } else {
          console.log("Pick again");
      }
  });
}
// function to load winner arrays after each move alternating between X and O
// function to check arrays for a winner after 5th move

function checkSuccess(rowIndex, columnIndex) {
  var merged = [].concat.apply([], ticTacToeArray);
  var winner1 = merged[0] + merged[1] + merged[2];
  var winner2 = merged[3] + merged[4] + merged[5];
  var winner3 = merged[6] + merged[7] + merged[8];
  var winner4 = merged[0] + merged[3] + merged[6];
  var winner5 = merged[1] + merged[4] + merged[7];
  var winner6 = merged[2] + merged[5] + merged[8];
  var winner7 = merged[0] + merged[4] + merged[8];
  var winner8 = merged[6] + merged[5] + merged[2];
  var winner = [winner1, winner2, winner3, winner4, winner5, winner6, winner7, winner8];

  for (var i = 0; i < winner.length; i++) {
    console.log(winner[i]);
    if (winner[i] == 3)  {
      console.log("X wins");
      runWinner();
    }
    else if (winner[i] == 30)  {
      console.log("O wins")
      runWinner();
    }
    else  {
      return("no wins")
    }
  }
}

//winner function
//scoring and games to go function
function runWinner(x)  {
  console.log("run winner")
  $(this).off('click');
  if (x = 3) {
    player1Wins++;
    gamesToGo--;
    gameStart();
  }
  else  {
    player2Wins++;
    gamesToGo--;
    gameStart();
  }
}

//reset game function
function resetValues() {
    player1Name = "";
    player2Name = "";
    player1Wins = 0;
    player2Wins = 0;
    gamesToGo = 0;
    nosOfGames = 0;
    tiedGames = 0;
    $('#setupScreen').css({"display": "initial"});
    $('#wrapper').css({"display": "none"});
}
  startGame();
// resetValues();

// To dos-: fix update readme.md, put it all together
// bonus: put in three games Tic Tac Toe, Tic Tacky Toes, Ticky Tacky Election
