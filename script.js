


console.log('randomword');
var nextTurn = 'X';
function changeTurn(){
   if(nextTurn == 'X'){
		nextTurn = 'O';
      } else {
		nextTurn = 'X';
      }
 } 



//passes html into function
function clickThings(element) {
	console.log(element);
	element.innerHTML = nextTurn;
	changeTurn();
	console.log(nextTurn);
}

function count()
{
var x = 0;
x += 1;
document.getElementById( "counting" ).value = x;
}