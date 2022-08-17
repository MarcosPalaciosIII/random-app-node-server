class Game {
    constructor(numberOfDecks, playersNameArray) {
        this.players = [];
        this.playersNameArray = playersNameArray;
        this.whichPlayersTurn;
        // this.decks = [];
        this.numberOfDecks = numberOfDecks;
    }

    startGame() {
        this.playersNameArray.forEach(playerName => {
            this.players.push(new GeneralPlayer(playerName));
        })

        console.log({players: this.players, numberOfDecks: this.numberOfDecks})
        this.players.forEach(player => {
            for(let i = 0; i < this.numberOfDecks; i++) {
                let randomIndex = randomNumber(6);
                // this.decks.push(new Deck(player.name, cardSuitesOptions[0], cardValuesOptions[0], `public/data/images/card_back_${randomIndex}.${randomIndex > 0 ? 'jpeg' : 'png'}`))
                player.addPlayerDeck(new Deck(player.name, cardSuitesOptions[0], cardValuesOptions[0], `public/data/images/card_back_${randomIndex}.${randomIndex > 0 ? 'jpeg' : 'png'}`))
            }
        })

        this.whichPlayersTurn = this.players[Math.floor(Math.random() * this.players.length)];
    }

    
}