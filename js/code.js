// setup global variables we need: player1Name, player2Name, player1Wins, player2Wins, gamesToGo, gamesNos, row1Array, row2Array, row3Array, column1Array, column2Array, column3Array, diagonal1Array, diagonal2Array, tiedGames, displayNoneSwitch
// set playernames to simplifying troubleshooting the game play
var player1Name = "Brad";
var player2Name = "Bob";
var player1Wins = 0;
var player2Wins = 0;
var gamesToGo = 10;
var nosOfGames = 10;
var tiedGames = 0;
var turn = 1;
var ticTacToeArray = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
var player1Token = 1;
var player2Token = 10;

//setup function developed to set the initial variables to pass into the gameplay and switch into game mode
function setupVariables() {
    player1Name = document.getElementById('player1Name').value;
    player2Name = document.getElementById('player2Name').value;
    nosOfGames = document.getElementById('nosOfGames').value;
    // $('#setupScreen').css({"display": "none"});
    // $('#wrapper').css({"display": "initial"});
}

// gameplay function which alternates moves and checks that a move has not already been made or that 9 moves havent been completed
// also needs to set squares and read squares and then put them into the array representing the board
// // function to load winner arrays after each move alternating between X and O
$('.column').on('click', function () {
    var rowIndex = $(this).parent().index('.row');
    var columnIndex = $(this).index();

    if (ticTacToeArray[rowIndex][columnIndex] = '0') {
        if (turn % 2 === 1) {
            $(this).append('<img src="X.png" alt="">')
                .css('border-color', 'black');
            ticTacToeArray[rowIndex][columnIndex] = player1Token;
            // console.table(ticTacToeArray);
            turn++;
        } else {
            $(this).append('<img src="O.png" alt="">')
                .css('border-color', 'black');
            ticTacToeArray[rowIndex][columnIndex] = player2Token;
            // console.table(ticTacToeArray);
            turn++;
        }
    } else {
        console.log("Pick again");
    }
});

// function to check for an existing move in the square
function checkForExistingMove() {
    // read the contents of the squares
    var coordinates = $('.column');
    // var coordinates = $(this).parent().index('.row');
    console.log(coordinates);

    //if existing then prompt for another move else place image
}



// function to check arrays for a winner after 5th move

function checkArrays(a) {
    var count = 0;
    for (var i = 0, n = 3; i < n; i++) {
        count += a[i];
    }
    checkSuccess(count);
}

function checkSuccess(count) {
    if (count != 3) {
        console.log("You didnt win");
    } else {
        console.log("You win");
    }
}

//winner function

//scoring and games to go function

//start game function
function startGame() {
    // put players names into the game board
    // put games in games to go
    //put in initial scores into Player1, Player2 and Tied games
    // $('#gToG').text("Games to go: " + nosOfGames);
    // $('#p1W').text(player1Name + " wins: " + player1Wins);
    // $('#p2W').text(player2Name + " wins: " + player2Wins);
    // $('#tG').text("Tied games: " + tiedGames);
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
    // $('#setupScreen').css({"display": "initial"});
    // $('#wrapper').css({"display": "none"});
}

// put in hard start to troubleshoot the gameplay
// startGame();


// To dos-: fix non-repeat moves, update readme.md, update comments, fix indenting, check for win, put it all together
// bonus: put in three games Tic Tac Toe, Tic Tacky Toes, Ticky Tacky Election
