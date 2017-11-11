var board=document.querySelector('.board-js');
var allCells = document.querySelectorAll('td');
var BOMB = '*';
var show = 'X';
var matrixOrigin= [1, 1, 1, ''],
                  [1, BOMB, 1, ''],
                  [1, 1, 2, 1],
                  ['', '', 1, BOMB]];

board.addEventListener('click', displayCell);
function displayCell(event){
    if(event.target.matches('td')){
       var value = displayCell(event)
       event.target.textContent = value;
 
 if (value === BOMB){
 showMatrix('red');
    }
  }
}
function displayCell(event){
  var row = event.target.parentElement.daset.row;
  var column = parseInt(event.target.daset.column);
  return matrixOrigin [row-1] [column-1]
}

function showMatrix(color){
    if(var i = 0;  i<matrixORigin.length; )
}




