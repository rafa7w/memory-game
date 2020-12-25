const FRONT = "card-front";
const BACK = "card-back";
const CARD = "card";
const ICON = "icon";

let icons = [
        "book",
        "box",
        "car",
        "cloud",
        "desktop",
        "dog",
        "guitar",
        "hat",
        "pizza",
        "tree",
];
 
let cards = null;

startGame();

function startGame() {
        cards = createCardsFromIcons(icons);
        shuffleCards(cards);
        initializeCards(cards);
}

function initializeCards(cards) {

        let gameBoard = document.getElementById("game-board");

        cards.forEach(card => {
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
                iconElement.src = "../assets/images/" + card.icon + ".svg";
                cardElementFace.appendChild(iconElement); 
        } else {
                cardElementFace.innerHTML = "&lt/&gt";
        }

        element.appendChild(cardElementFace);
        
}


function shuffleCards(cards) {
        
        let currentIndex = cards.length;
        let randomIndex = 0;

        while (currentIndex !== 0) {

                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]];
        }       
}

function createCardsFromIcons(icons) {

        let cards = [];

        for (let icon of icons) {
                cards.push(createPairFromIcon(icon));
        }

        return cards.flatMap(pair => pair);
}

function createPairFromIcon(icon) {

        return [
                {
                        id: createIdWithIcon(icon),
                        icon: icon,
                        flipped: false
                },

                {
                        id: createIdWithIcon(icon),
                        icon: icon,
                        flipped: false
                }
        ];
}

function createIdWithIcon(icon) {

        return icon + parseInt(Math.random() * 1000);

}


function flipCard() {
        this.classList.add("flip");
}
