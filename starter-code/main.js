/*var cardOne = "queen";
var cardTwo = "king";
var cardThree= "queen";
var cardFour = "king";*/

//This is adding the array
var cards = ["queen", "king", "queen", "king"] ;
//variable with 
var gameBoard =  document.getElementById('game-board');
 
function createCards() { 
 
 for(var i = 0; i< cards.length; i++) {
 	var cardOne = document.createElement("div");
 	cardOne.classList.add("card");
 	gameBoard.appendChild(cardOne)
 }

 
}

 // var createCards = ;
 createCards();

/*if (cardTwo === cardFour){
alert("You’ve found a match!");
 } else(cardOne != cardTwo)
{
  alert("Sorry,try again.");
} */ 
             


