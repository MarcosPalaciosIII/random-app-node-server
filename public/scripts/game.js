class Game {
    constructor(numberOfDecks, playersNameArray) {
        this.players = [];
        this.playersNameArray = playersNameArray;
        this.whichPlayersTurn;
        // this.decks = [];
        this.numberOfDecks = numberOfDecks;
        this.media = new Promotionals();
    }

    startGame() {
        this.playersNameArray.forEach(playerName => {
            this.players.push(new GeneralPlayer(playerName));
        })

        console.log({players: this.players, numberOfDecks: this.numberOfDecks})
        this.players.forEach(player => {
            let randomIndex = randomNumber(6);
            for(let i = 0; i < this.numberOfDecks; i++) {
                // this.decks.push(new Deck(player.name, cardSuitesOptions[0], cardValuesOptions[0], `public/assets/images/card_back_${randomIndex}.${randomIndex > 0 ? 'jpeg' : 'png'}`))
                
                // player.addPlayerDeck(new Deck(player.name, cardSuitesOptions[0], cardValuesOptions[0], `/assets/images/card_back_${randomIndex}.${randomIndex > 0 ? 'jpeg' : 'png'}`))
                player.addPlayerDeck(new Deck(player.name, cardSuitesOptions[0], cardValuesOptions[0],randomIndex))
            }
        })

        this.whichPlayersTurn = this.players[randomNumber(this.players.length)]
    }
}