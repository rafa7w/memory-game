let game = {

        lockMode: false,
        firstCard: null,
        secondCard: null,

        setCard: function (id) {

                let card = this.cards.filter(card => card.id === id)[0];

                if (card.flipped || this.lockMode) {
                        return false;
                } 

                if (!this.firstCard) {
                        this.firstCard = card;
                        this.firstCard.flipped = true;
                        return true;
                } else {
                        this.secondCard = card;
                        this.secondCard.flipped = true;
                        this.lockMode = true;
                        return true;
                }
        },

        checkMatch: function () {
                if (!this.firstCard  || !this.secondCard){
                        return false;
                } 
                return this.firstCard.icon === this.secondCard.icon;
        },

        clearCards: function () {
                this.firstCard = null;
                this.secondCard = null;
                this.lockMode = false;
        },

        unflipCards: function () {
                this.firstCard.flipped = false;
                this.secondCard.flipped = false;
                this.clearCards();
        },

        icons: [
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
        ],

        cards: null,

        createCardsFromIcons: function () {

                this.cards = [];
        
                this.icons.forEach((icon) => {
                        this.cards.push(this.createPairFromIcon(icon));
                })
        
                this.cards = this.cards.flatMap(pair => pair);
                this.shuffleCards();
                return this.cards;
        },
        
        createPairFromIcon: function (icon) {
        
                return [
                        {
                                id: this.createIdWithIcon(icon),
                                icon: icon,
                                flipped: false
                        },
        
                        {
                                id: this.createIdWithIcon(icon),
                                icon: icon,
                                flipped: false
                        }
                ];
        },
        
        createIdWithIcon: function (icon) {
        
                return icon + parseInt(Math.random() * 1000);
        
        },

        shuffleCards: function (cards) {
        
                let currentIndex = this.cards.length;
                let randomIndex = 0;
        
                while (currentIndex !== 0) {
        
                        randomIndex = Math.floor(Math.random() * currentIndex);
                        currentIndex--;
        
                        [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]];
                }       
        },


}