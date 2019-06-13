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

function displayDeck() {
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
displayDeck()
    
let openCards = [];
let matchedCards = [];

let moves = document.querySelector('.moves');
let count = 0;

// Create event listener function for when cards are clicked
function showCard(e) {
    let card = e.target;
    count++;
    moves.innerText = count;
    openCards.push(card);
    
    // check if card already has classes open and show or match
    if (!card.classList.contains('open') && !card.classList.contains('show') || !card.classList.contains('match')){
        // if none of those classes then add open and show
        card.classList.add('open', 'show');
    }
    const card1 = openCards[0];
    const card2 = openCards[1];
    if(card1 === card2){
        console.log('double clicked');
        alert("You clicked the same card twice!");
    }
    if (openCards.length === 2) {
        
        if(card1.dataset.icon == card2.dataset.icon){
            card1.classList.add('match');
            card2.classList.add('match');
            card1.classList.remove('open', 'show');
            card2.classList.remove('open', 'show');
            matchedCards.push(card1);
            matchedCards.push(card2);

            if(matchedCards.length >= 16){
                alert("Winner Winner Chicken Dinner!");
            }
            console.log('matchedCards: ', matchedCards);
            openCards = [];
            console.log(card1.classList);
        } else {
            setTimeout(function noMatch(){
                console.log('not a match');
                card1.classList.remove('open', 'show');
                card2.classList.remove('open', 'show');
                openCards = [];
            }, 1000);
            
        }
    }
    
};

// function cardOpen() {
//     openedCards.push(this);
//     var len = openedCards.length;
//     if(len === 2){
//         //moveCounter();
//         if(openedCards[0].type === openedCards[1].type){
//             console.log('matched();');
//         } else {
//             console.log('unmatched();');
//         }
//     }
// };

// function compareCards() {

//         let card1 = openCards[0].dataset.icon;
//         let card2 = openCards[1].dataset.icon;
//         console.log('card1 card2 :', card1, card2);
//         if (card1 == card2) {
//             card1.classList.add('match');
//             card2.classList.add('match');
//             matchedCards.push(card1);
//             matchedCars.push(card2);
//         }
// };

// Delegate event listener duties to deck element.
deck.addEventListener('click', showCard);


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



// if the card doesn't have open and show or match,
//     add show and open
//     check for a match
//         if there's a match
//             add match class
//             push cards to matched array
//             clear openCards array