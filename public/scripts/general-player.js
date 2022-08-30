class GeneralPlayer {
    constructor(name) {
        this.name = name
        this.decks = [];
        this.hand = [];
    }

    addPlayerDeck(newDeck) {
        this.decks.push(newDeck);
    }
}