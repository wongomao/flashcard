cards = [
    { front: "Lick 1", back: "images/Lick01.PNG" },
    { front: "Lick 2", back: "images/Lick02.PNG" },
    { front: "Lick 3", back: "images/Lick03.PNG" },
    { front: "Lick 4", back: "images/Lick04.PNG" },
    { front: "Lick 5", back: "images/Lick05.PNG" },
    { front: "Lick 6", back: "images/Lick06.PNG" },
    { front: "Lick 7", back: "images/Lick07.PNG" },
    { front: "Lick 8", back: "images/Lick08.PNG" },
    { front: "Lick 9", back: "images/Lick09.PNG" },
    { front: "Lick 10", back: "images/Lick10.PNG" }
];

const WAITTIME = 1000;

function shuffleCards(cards) {
    for (i = cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * i)
        k = cards[i];
        cards[i] = cards[j];
        cards[j] = k;
    }
    return cards;
}

function playCards() {
    cards = shuffleCards(cards);
    cards.forEach(card => {
        console.log("card " + card.front)
        document.getElementById("main").innerHTML = '<h1 class="display-1">' + card.front + '</h1>';
        window.setTimeout(swapMainContent, WAITTIME, card);
    });
}


function echoImageStrs() {
    cards = shuffleCards(cards);
    cards.forEach(echoImage);
}

function echoImage(card) {
    console.log(card.front + " " + card.back);
}

function swapMainContent(card) {
    document.getElementById("main").innerHTML = '<img src="' + card.back + '">';
}
