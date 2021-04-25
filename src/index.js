const cardDivs = document.getElementById("cards-div")

class Card {

    static allCards = []

    constructor(card){
        this.name = card.name;
        this.number = card.number;
        this.id = card.id;
        card.allCards.push(this)
    }
    
}