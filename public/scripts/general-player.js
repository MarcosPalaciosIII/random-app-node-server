class GeneralPlayer {
    constructor(name) {
        this.name = name
        this.decks = [];
    }

    addPlayerDeck(newDeck) {
        this.decks.push(newDeck);
    }
}