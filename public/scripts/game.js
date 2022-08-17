class Game {
    constructor(numberOfDecks, playersNameArray) {
        this.players = [];
        this.playersNameArray = playersNameArray;
        this.whichPlayersTurn;
        this.decks = [];
        this.numberOfDecks = numberOfDecks;
    }

    startGame() {
        for(let i = 0; i < this.numberOfDecks; i++) {
            this.decks.push(new Deck())
        }

        this.playersNameArray.forEach(playerName => {
            this.players.push(new GeneralPlayer(playerName));
        })

        this.whichPlayersTurn = this.players[Math.floor(Math.random() * this.players.length)];
    }

    
}