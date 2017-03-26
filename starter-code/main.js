/*var cardOne = "queen";
var cardTwo = "king";
var cardThree= "queen";
var cardFour = "king";*/

//This is adding the array
var cardsInPlay  = [];

var cards = ["queen", "king", "queen", "king"] ;
//variable with 
var gameBoard =  document.getElementById('game-board');
 
function createCards() { 
 
	 for(var i = 0; i < cards.length; i++) {
	 	var cardOne = document.createElement("div");

	 	cardOne.setAttribute('data-card', cards[i]);
	 	cardOne.classList.add("card");
	 	cardOne.addEventListener('click',isTwoCards);
	 	//cardOne.innerHTML = '<img src="images/kingForGame.jpg" alt="King Picture">';
	 	gameBoard.appendChild(cardOne)
	 	
	 }
 }

function isTwoCards(){
 	// cardsInPlay.push(this.getAttribute('data-card'));
 	cardsInPlay.push(this);
 	if(this.getAttribute("data-card") === "queen"){
 		this.innerHTML = '<img src="images/queenForGame.jpg" alt="Queen Picture">';
 	} 
 	if(this.getAttribute("data-card") === "king") {
 		this.innerHTML = '<img src="images/kingForGame.jpg" alt="Queen Picture">';
 	}
 	
 	if (cardsInPlay.length === 2) {
    	isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch(cardsInPlay){
	console.log(cardsInPlay);

	if (cardsInPlay[0].getAttribute("data-card") === cardsInPlay[1].getAttribute("data-card")){
		alert("You’ve found a match!");
 	}
 	 else {
	  	alert("Sorry,try again.");
	} 

	cardsInPlay[0].innerHTML = "";
	cardsInPlay[1].innerHTML = "";
   // if (this.getAttribute('data-card') === "queen"){
   // 	this.innerHTML = '<img src="images/queenForGame.jpg" alt="Queen Picture">';
   // }


	//console.log(cardsInPlay);
  }

 createCards();