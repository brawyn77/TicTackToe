
var columns = ['column1', 'column2', 'column3'];
var rows = ['row1', 'row2', 'row3'];

var makeTable = function()  {
  for (var i = 0; i < rows.length; i++){
    var rowBuilder = $('<div>').addClass('row');
      for (var i = 0; i < columns.length; i++){
        var columnBuilder = $('<div>').addClass('column');
          // board.append(column);
    // board.append(row);
    console.log("column");
    console.log("row");

    }
  }
}

var board = 4;
$('body').append(board);
$('#board').append(columns);
$('#board').append(rows);

$('.board').css({'position': 'absolute', 'width': '600px', 'height': '600px', 'border-style': 'double', 'border-color': 'black', 'margin-left': '200px'});
$('.row').css({'display': 'flex', 'width': '100px', 'height': '100px'});
$('.column').css({'width': '100px', 'height': '100px', 'border-style': 'double', 'border-color': 'black'});
