// Deck of cards ---------> my practice

function makeDeck() {
  const deck = [];
  const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
  const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';

  for (let value of values.split(',')) {
    for (let suit of suits) {
      deck.push({
        value,
        suit
      })
    }
  }
  return deck;
}

// console.log(makeDeck());

const myDeck = makeDeck();

// console.log(myDeck);

function drawCard(deck) {
  return deck.pop();
};

// console.log(makeDeck().pop());

const card1 = drawCard(myDeck);
const card2 = drawCard(myDeck);
const card3 = drawCard(myDeck);
const card4 = drawCard(myDeck);

console.log(card1); //value: 'A', suit: 'clubs'
console.log(card2); //value: 'A', suit: 'spades'
console.log(card3); //value: 'A', suit: 'diamonds'
console.log(card4); //value: 'A', suit: 'hearts'


// Example

const myDeck = {
  deck: [],
  drawnCards: [],
  suits: ['hearts', 'diamonds', 'spades', 'clubs'],
  values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
  initializeDeck() {
    const { suits, values, deck } = this;
    for (let value of values.split(',')) {
      for (let suit of suits) {
        deck.push({
          value,
          suit
        })
      }
    }
  },

  // console.log(myDeck);
  // console.log(myDeck.initializeDeck()); ------- >undefined
  // console.log(myDeck.deck); ------> 52 cards

  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },
  drawMultiple(numCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  },
  shuffle() {
    const { deck } = this;
    // loop over array backwards
    for (let i = deck.length - 1; i > 0; i--) {
      // pick random index before current element
      let j = Math.floor(Math.random() * (i + 1));
      // Swap  
      [deck[i], deck[j]] = [deck[j], deck[i]]

      /*
      function shuffle(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [deck[i], deck[j]] = [deck[j], deck[i]]    
        }
      }
      */
    }
  }
};

// console.log(myDeck.initializeDeck()); 
// console.log(myDeck.drawCard()); ------> same as line no 36 to 39
// console.log(myDeck.drawCard());
// console.log(myDeck.drawCard());

/*-----------------------------------------------------------------------------------------------------------------------------------------*/

// Example

// **********************************
// WRITING EVERYTHING USING FUNCTIONS
// **********************************

function initializeDeck() {
  const deck = [];
  const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
  const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
  for (let value of values.split(',')) {
    for (let suit of suits) {
      deck.push({
        value,
        suit
      })
    }
  }
  return deck;
};

function drawCard(deck, drawnCards) {
  const card = deck.pop();
  drawnCards.push(card);
  return card;
};

function drawMultiple(numCards, deck, drawnCards) {
  const cards = [];
  for (let i = 0; i < numCards; i++) {
    cards.push(drawCard(deck, drawnCards));
  }
  return cards;
};

function shuffle(deck) {
  // loop over array backwards
  for (let i = deck.length - 1; i > 0; i--) {
    //pick random index before current element
    let j = Math.floor(Math.random() * (i + 1));
    //swap
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};

// We have to create a bunch of variables:
const firstDeck = initializeDeck();
const drawnCards = [];
shuffle(firstDeck);

// We have to pass a ton of arguments around:
const hand1 = drawMultiple(2, firstDeck, drawnCards);
const hand2 = drawMultiple(2, firstDeck, drawnCards);
const pokerHand = drawMultiple(5, firstDeck, drawnCards);


// Example

// **********************************
// USING AN OBJECT + METHODS INSTEAD:
// **********************************

const myDeck = {
  deck: [],
  drawnCards: [],
  suits: ['hearts', 'diamonds', 'spades', 'clubs'],
  values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
  initializeDeck() {
    const {
      suits,
      values,
      deck
    } = this;
    for (let value of values.split(',')) {
      for (let suit of suits) {
        deck.push({
          value,
          suit
        })
      }
    }
    // return deck;
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },
  drawMultiple(numCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  },
  shuffle() {
    const {
      deck
    } = this;
    // loop over array backwards
    for (let i = deck.length - 1; i > 0; i--) {
      //pick random index before current element
      let j = Math.floor(Math.random() * (i + 1));
      //swap
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
};

// Much cleaner!!
myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);


// Example

// THIS FUNCTION RETURNS A NEW DECK EVERYTIME WE CALL IT!

const makeDeck = () => {
  return {
    deck: [],
    drawnCards: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck() {
      const {
        suits,
        values,
        deck
      } = this;
      for (let value of values.split(',')) {
        for (let suit of suits) {
          deck.push({
            value,
            suit
          })
        }
      }
      // return deck;
    },
    drawCard() {
      const card = this.deck.pop();
      this.drawnCards.push(card);
      return card;
    },
    drawMultiple(numCards) {
      const cards = [];
      for (let i = 0; i < numCards; i++) {
        cards.push(this.drawCard());
      }
      return cards;
    },
    shuffle() {
      const {
        deck
      } = this;
      // loop over array backwards
      for (let i = deck.length - 1; i > 0; i--) {
        //pick random index before current element
        let j = Math.floor(Math.random() * (i + 1));
        //swap
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    }
  }
};

// OUR FIRST DECK!
const myDeck = makeDeck();
myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);

// OUR SECOND DECK!
const deck2 = makeDeck();
deck2.initializeDeck();