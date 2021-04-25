const cardsDiv = document.getElementById("cards-div")
const URL = "http://localhost:3000"

const cardsURL = `${URL}/cards`


class Card {

    static allCards = []

    constructor(card){
        this.number = card.card_number;
        this.id = card.id;
        this.transactions = card.transactions
        this.user = card.user
        this.employer = card.employer
        Card.allCards.push(this)
    }   

    static renderCards(){
        for(let card of this.allCards){
            card.renderCard();
        }
    }

    renderCard(){     
        let p = document.createElement('a') 
        let button = document.createElement('button')
        let cardDetailsDiv = document.createElement('div')
        let cardDiv = document.createElement('div')
        button.innerHTML = "view details" 
        console.log(this)
        p.innerHTML = this.number      
        cardDiv.append(p, button)
        cardsDiv.append(cardDiv)
    }

    static fetchCards(){
        fetch(cardsURL)
        .then (rsp => rsp.json())
        .then(cards =>{
            for(let card of cards){
                 new Card(card)
            }
            this.renderCards()
        })
    }

}

Card.fetchCards()