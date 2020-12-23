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

console.log(createCardsFromIcons(icons));

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
