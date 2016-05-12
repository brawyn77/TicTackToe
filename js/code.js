// setup global variables we need: player1Name, player2Name, player1Wins, player2Wins, gamesToGo, gamesNos, row1Array, row2Array, row3Array, column1Array, column2Array, column3Array, diagonal1Array, diagonal2Array, tiedGames, displayNoneSwitch
// set playernames to simplifying troubleshooting the game play
var player1Name = "";
var player2Name = "";
var player1Wins = 0;
var player2Wins = 0;
var gamesToGo = 0;
var nosOfGames = 0;
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
var moves = 0;

//setup function developed to set the initial variables to pass into the gameplay and switch into game mode
function setupVariables() {
    player1Name = document.getElementById('player1Name').value;
    player2Name = document.getElementById('player2Name').value;
    nosOfGames = document.getElementById('nosOfGames').value;
    $('#setupScreen').css({"display": "none"});
    $('#wrapper').css({"display": "initial"});
    intialiseMatch();
}

//start game function
// put players names into the game board
// put games in games to go
// put in initial scores into Player1, Player2 and Tied games
function intialiseMatch() {
    $('#gToG').text("Games to go: " + nosOfGames);
    $('#p1W').text(player1Name + " wins: " + player1Wins);
    $('#p2W').text(player2Name + " wins: " + player2Wins);
    $('#tG').text("Tied games: " + tiedGames);
    gameStart();
}

// reset game values
function resetGame ()  {
  $("#board img:last-child").remove();
  turn = 1;
  moves = 0;
  win = 0;
  gameStart();
}

// click off the buttons so that only the game play can occur
// function buttonClickOff () {
//   $("button").off("click");
// }


// gameplay function which alternates moves
// checks that 9 moves havent been completed
// check for an existing move in the square
//if existing then prompt for another move else place image
// also needs to put each move into an array representing the board
function gameStart ()  {
  if (nosOfGames > 0) {
    ticTacToeArray = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

  $('.column').on('click', function () {
          var rowIndex = $(this).parent().index('.row');
          var columnIndex = $(this).index();

          if (ticTacToeArray[rowIndex][columnIndex] == "0") {

          if (turn % 2 == 1) {
                  $(this).append('<img src="X.png" alt="">')
                      .css('border-color', 'black');
                  ticTacToeArray[rowIndex][columnIndex] = player1Token;
                  checkSuccess(rowIndex, columnIndex);
                  turn++;
              } else {
                  $(this).append('<img src="O.png" alt="">')
                      .css('border-color', 'black');
                  ticTacToeArray[rowIndex][columnIndex] = player2Token
                  checkSuccess(rowIndex, columnIndex);
                  turn++;
              }

          } else {
              console.log("Pick again");
          }
      });
      if (nosOfGames == 0 ) {
        resetValues();
        setupVariables();
      }
  }
  else {
    $('#message').text("Match completed. Please click the Reset button for a new match.")
  }
}
// function to check arrays for a winner after 5th move
// transform the array of three arrays of 3 elements each into a single array with 9 elements
// develop a winner template for each of the 8 win conditions using the element indexes to pull out the values
// player 1 uses a value of 1 for each square occupied and player 2 uses a value of 10
// the tests below look for the sum of a single lines being 3 for X or 30 for O
function checkSuccess(rowIndex, columnIndex) {
    var merged1 = [].concat.apply([], ticTacToeArray);
    var merged2 = [].concat.apply([], ticTacToeArray);
    var merged3 = [].concat.apply([], ticTacToeArray);
    var merged4 = [].concat.apply([], ticTacToeArray);
    var merged5 = [].concat.apply([], ticTacToeArray);
    var merged6 = [].concat.apply([], ticTacToeArray);
    var merged7 = [].concat.apply([], ticTacToeArray);
    var merged8 = [].concat.apply([], ticTacToeArray);
    var winner1 = merged1[0] + merged1[1] + merged1[2];
    var winner2 = merged2[3] + merged2[4] + merged2[5];
    var winner3 = merged3[6] + merged3[7] + merged3[8];
    var winner4 = merged4[0] + merged4[3] + merged4[6];
    var winner5 = merged5[1] + merged5[4] + merged5[7];
    var winner6 = merged6[2] + merged6[5] + merged6[8];
    var winner7 = merged7[0] + merged7[4] + merged7[8];
    var winner8 = merged8[2] + merged8[4] + merged8[6];
    var winner = [winner1, winner2, winner3, winner4, winner5, winner6, winner7, winner8];
    moves++;
    console.log(moves);

    for (var i = 0; i < winner.length; i++) {
      if (winner[i] == 3)  {
        win = 3;
        runWinner(win);
      }
      else if (winner[i] == 30)  {
        win = 5;
        runWinner(win);
      }
      else if (moves == 9)  {
        win = 11;
        runWinner(win);
      }
    }
  }

//winner function - scoring and games to go function
function runWinner(x)  {
  if (x == '3') {
    player1Wins++;
    nosOfGames--;
    $('#gToG').text("Games to go: " + nosOfGames);
    $('#p1W').text(player1Name + " wins: " + player1Wins);
    $('#message').text(player1Name +" won this game! Well Done!")
  }
  else if (x == 5) {
    player2Wins++;
    nosOfGames--;
    $('#gToG').text("Games to go: " + nosOfGames);
    $('#p2W').text(player2Name + " wins: " + player2Wins);
    $('#message').text(player2Name +" won this game! Well Done!")
  }
  else if (x == 11)  {
    tiedGames++;
    nosOfGames--;
    $('#gToG').text("Games to go: " + nosOfGames);
    $('#tG').text("Tied games: " + tiedGames);
    $('#message').text("This was a tied game. Better luck next time");
  }
    resetGame();
}

//reset match function
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
   resetValues();
