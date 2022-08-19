class Card {
    constructor(suit, value, cardBackIndex, deckId) {
        this.suit = suit;
        this.value = value;
        this.imageBackSrc = '';
        this.imageFrontSrc = '';
        this.deckId = deckId;
        this.cardBackIndex = cardBackIndex;
    }

    setCardImageSouce() {
        this.imageBackSrc = `/assets/images/card-backs/card_back_${this.cardBackIndex}.${this.cardBackIndex > 0 ? 'jpeg' : 'png'}`

        this.imageFrontSrc = `/assets/images/card_fronts/card_front_${this.suit}_${this.value}.png`
    }
}