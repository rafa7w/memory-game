const FRONT = "card-front";
const BACK = "card-back";
const CARD = "card";
const ICON = "icon";
 
startGame();

function startGame() {
        initializeCards(game.createCardsFromIcons());
}

function initializeCards(cards) {

        let gameBoard = document.getElementById("game-board");

        game.cards.forEach(card => {
                let cardElement = document.createElement("div");
                cardElement.id = card.id;
                cardElement.classList.add(CARD);
                cardElement.dataset.icon = card.icon;

                createCardContent(card, cardElement);

                cardElement.addEventListener("click", flipCard);
                gameBoard.appendChild(cardElement);
        })
}


function createCardContent(card, cardElement) {
        
        createCardFace(FRONT, card, cardElement);
        createCardFace(BACK, card, cardElement);

}


function createCardFace(face, card, element) {

        let cardElementFace = document.createElement("div");
        cardElementFace.classList.add(face);

        if (face === FRONT) {
                let iconElement = document.createElement("img");
                iconElement.classList.add(ICON);
                iconElement.src = "./assets/images/" + card.icon + ".svg";
                cardElementFace.appendChild(iconElement); 
        } else {
                cardElementFace.innerHTML = "&lt/&gt";
        }

        element.appendChild(cardElementFace);
        
}

function flipCard() {
        this.classList.add("flip");
}
