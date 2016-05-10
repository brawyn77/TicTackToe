var body = $('body');
​
var welcome = $('<h1>').text("Welcome to Battleships");
body.append(welcome);
var place = $('<h3>').text("Place your ship!");
body.append(place);
​
var board = $('<div>').attr('id','board');
body.append(board);
​
var row1 = $('<div>').addClass('row 1');
var row2 = $('<div>').addClass('row 2');
var row3 = $('<div>').addClass('row 3');
var row4 = $('<div>').addClass('row 4');
var row5 = $('<div>').addClass('row 5');
board.append(row1, row2, row3, row4, row5);
​
var column1 = $('<div>').addClass('column 1');
var column2 = $('<div>').addClass('column 2');
var column3 = $('<div>').addClass('column 3');
var column4 = $('<div>').addClass('column 4');
var column5 = $('<div>').addClass('column 5');
row1.append(column1, column2, column3, column4, column5);
​
var column1 = $('<div>').addClass('column 1');
var column2 = $('<div>').addClass('column 2');
var column3 = $('<div>').addClass('column 3');
var column4 = $('<div>').addClass('column 4');
var column5 = $('<div>').addClass('column 5');
row2.append(column1, column2, column3, column4, column5);
​
var column1 = $('<div>').addClass('column 1');
var column2 = $('<div>').addClass('column 2');
var column3 = $('<div>').addClass('column 3');
var column4 = $('<div>').addClass('column 4');
var column5 = $('<div>').addClass('column 5');
row3.append(column1, column2, column3, column4, column5);
​
var column1 = $('<div>').addClass('column 1');
var column2 = $('<div>').addClass('column 2');
var column3 = $('<div>').addClass('column 3');
var column4 = $('<div>').addClass('column 4');
var column5 = $('<div>').addClass('column 5');
row4.append(column1, column2, column3, column4, column5);
​
var column1 = $('<div>').addClass('column 1');
var column2 = $('<div>').addClass('column 2');
var column3 = $('<div>').addClass('column 3');
var column4 = $('<div>').addClass('column 4');
var column5 = $('<div>').addClass('column 5');
row5.append(column1, column2, column3, column4, column5);
​
var winner = $('<div>').attr('id', 'winner');
var winnerText = $('<h1>').text("WINNER !!");
winner.append(winnerText);
body.append(winner);
​
body.css({
  'text-align': 'center'
})
board.css({
  'width': '1000px',
  'height':'1000px',
  'border-style': 'double',
  'border-color': 'black',
  'margin': '0 auto'
})
​
$('.row').css({
  'display':'flex',
  'width':'1000px',
  'height':'200px'
})
​
$('.column').css({
  'width':'200px',
  'height':'200px',
  'border-style': 'solid',
  'border-color':'black',
  'transition':'.2s ease-in-out'
})
​
$('.column').mouseover(function() {
  $(this).css({
    'background-color':'red',
    'transform': 'scale(1.25)'
  })
})
$('.column').mouseout(function() {
  $(this).css({
    'background-color':'transparent',
    'transform':'none'
  })
})
​
console.log("I'm working!");
​
$('img').css({
  'width':'150px',
  'height':'150px'
})
​
winner.css({
  'display':'none'
})
​
$('.column').on('click', function(){
  $(this).append('<img src="http://icons.iconarchive.com/icons/icons8/windows-8/128/Military-Battleship-icon.png" alt="">')
    .css('border-color', 'red');
});
