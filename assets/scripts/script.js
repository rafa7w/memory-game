const FRONT = "card-front";
const BACK = "card-back";

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
