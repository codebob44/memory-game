/*
 * Create a list that holds all of your cards
 */
const cardList = [
    "fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-anchor", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb", "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube"
];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
const deck = document.querySelector(".deck")

function createCards() {
    shuffle(cardList);
  for (let i = 0; i < 16; i++) {
    let cardLi = document.createElement("li");
    cardLi.className = "card";
    cardLi.setAttribute("data-icon", cardList[i]);

    let cardIcon = document.createElement('i');
    cardIcon.className = cardList[i];
    cardLi.appendChild(cardIcon);
    deck.appendChild(cardLi);

    console.log("cardList: ", cardList);
    }

}
createCards()
    
// Shuffle function from http://stackoverflow.com/a/2450976
// Returns a shuffled array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */