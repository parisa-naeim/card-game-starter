
// / 1. Declare variables (arrays) for two decks of cards.
let deck1 = [];
let deck2 = [];
let previousCard;

// 3. Create cached element references for each of the card decks.
const deck1Element = document.querySelector('#deck-1');
const deck2Element = document.querySelector('#deck-2');

// 4. Add an event listener for the "Flip" button.
document.querySelector('#btn').addEventListener('click', handleClick);

// 5. Write an initialization function that assigns 52 cards" to deck 1, then invoke it.
const init = () => {
    deck1 = []; // empty the deck

    // combinations
    const suits = ['d', 'h', 'c', 's'];
    const ranks = ['A', 'Q', 'K', 'J', '10', '09', '08', '07', '06', '05', '04', '03', '02']

    suits.forEach((suit) => {
        ranks.forEach((rank) => {
            deck1.push(suit + rank)
        });
    });
}

init();

// 6. Declare a render() function to display a card after it is flipped.
function displayCard(card) {
    deck2Element.classList.remove('outline');
    if (deck2.length > 1) {
        deck2Element.classList.remove(previousCard)
    }

    // Remember this card to remove it next click
    previousCard = card;

    deck2Element.classList.add(card);

    if (deck2.length >= 26) {
        deck2Element.classList.add('shadow');
        deck1Element.classList.remove('shadow');
    }

    if (deck1.length === 0) {
        deck1Element.classList.add('outline');
        deck1Element.classList.remove('back-blue');
    }
}

// 7. Stub up a handleClick() function for the event listener to call.
function handleClick () {
    // TODO: Leave early
    if (deck1.length > 0) {
        // TODO: maybe shuffle the deck?
        const randomIndex = Math.floor(Math.random() * deck1.length);
        let selectedCard = deck1.splice(randomIndex, 1)[0];
        deck2.push(selectedCard);
        displayCard(selectedCard);
    }
}
// 8. Within the render() function (situated above handleClick()):

