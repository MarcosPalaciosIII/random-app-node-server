class Deck {
    constructor(deckOwner, cardSuits, cardValues, cardImageSrcs) {
        this.deck = [];
        this.discardPile = [];
        this.deckOwner = deckOwner;
        this.cardSuits = cardSuits;
        this.cardValues = cardValues;
        this.cardImageSrcs = cardImageSrcs
        this.id = ''


        this.generateDeck();
    }
    
    generateDeck() {
        
        this.shuffle();
        this.generateDeckId();
    }
    
    generateDeckId() {
        
    }
    
    
    shuffle() {

    }

    reShuffle() {
        const combinedDeckAndDiscard = [...this.deck, ...this.discardPile]
        this.deck = combinedDeckAndDiscard;
        this.shuffle();
    }

    distributeCards() {

    }
}