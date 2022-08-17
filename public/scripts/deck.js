class Deck {
    constructor(deckOwner, cardSuits, cardValues, cardImageSrcs) {
        this.deck = [];
        this.discardPile = [];
        this.deckOwner = deckOwner;
        this.cardSuits = cardSuits;
        this.cardValues = cardValues;
        this.cardImageSrcs = cardImageSrcs
        this.id = ''

        this.generateDeckId();
    }
    
    generateDeck() {
        this.cardSuits.forEach(suit => {
            this.cardValues.forEach(value => {
                this.deck.push(new Card(suit, value, this.cardImageSrcs, this.id));
            })
        })

        console.log(`Deck Generated : `, {deck: this.deck, suits: this.cardSuits, values: this.cardValues})
        
        this.shuffle();
    }
    
    generateDeckId() {
        this.id = `${this.deckOwner}${randomNumber(500)}`
        console.log(`Id Created : ${this.id}`)
        this.generateDeck();
    }
    
    
    shuffle() {
        let arrLength = this.deck.length;

        while (arrLength > 0) {
            let index = randomNumber(arrLength);

            arrLength --;

            [[this.deck[arrLength], this.deck[index]]] = [[this.deck[index], this.deck[arrLength]]]
        }

        console.log(`Deck shuffled : `, {deck: this.deck})
    }

    reShuffle() {
        const combinedDeckAndDiscard = [...this.deck, ...this.discardPile]
        this.deck = combinedDeckAndDiscard;
        this.shuffle();
    }

    addCardToDispile(cardIndex) {
        this.discardPile.push(this.deck[cardIndex]);
        this.deck.splice(cardIndex, 1);
    }

    distributeCards() {

    }
}