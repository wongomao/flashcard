cards = [
    { front: "Lick 1", back: "images/Lick01.PNG" },
    { front: "Lick 1", back: "images/Lick01.PNG" },
    { front: "Lick 1", back: "images/Lick01.PNG" },
    { front: "Lick 1", back: "images/Lick01.PNG" },
    { front: "Lick 1", back: "images/Lick01.PNG" },
    { front: "Lick 1", back: "images/Lick01.PNG" },
    { front: "Lick 2", back: "images/Lick02.PNG" },
    { front: "Lick 2", back: "images/Lick02.PNG" },
    { front: "Lick 2", back: "images/Lick02.PNG" },
    { front: "Lick 2", back: "images/Lick02.PNG" },
    { front: "Lick 2", back: "images/Lick02.PNG" },
    { front: "Lick 2", back: "images/Lick02.PNG" },
    { front: "Lick 3", back: "images/Lick03.PNG" },
    { front: "Lick 3", back: "images/Lick03.PNG" },
    { front: "Lick 3", back: "images/Lick03.PNG" },
    { front: "Lick 3", back: "images/Lick03.PNG" },
    { front: "Lick 3", back: "images/Lick03.PNG" },
    { front: "Lick 4", back: "images/Lick04.PNG" },
    { front: "Lick 4", back: "images/Lick04.PNG" },
    { front: "Lick 4", back: "images/Lick04.PNG" },
    { front: "Lick 4", back: "images/Lick04.PNG" },
    { front: "Lick 4", back: "images/Lick04.PNG" },
    { front: "Lick 4", back: "images/Lick04.PNG" },
    { front: "Lick 4", back: "images/Lick04.PNG" },
    { front: "Lick 5", back: "images/Lick05.PNG" },
    { front: "Lick 5", back: "images/Lick05.PNG" },
    { front: "Lick 5", back: "images/Lick05.PNG" },
    { front: "Lick 5", back: "images/Lick05.PNG" },
    { front: "Lick 5", back: "images/Lick05.PNG" },
    { front: "Lick 5", back: "images/Lick05.PNG" },
    { front: "Lick 5", back: "images/Lick05.PNG" }
];

/*
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
 */

const WAITTIME = 5000;


var intervalObj;

function playCards() {
    if (intervalObj === undefined) {
        document.getElementById("startstop").innerHTML = "Stop";
        intervalObj = setInterval(showRandomCard, WAITTIME);
    } else {
        document.getElementById("startstop").innerHTML = "Start";
        clearInterval(intervalObj)
        intervalObj = undefined;
    }
}

var isFront = false;
var currentCard = 0;

function showRandomCard() {
    if (isFront) {
        displayBack(currentCard);
        isFront = false;
    } else {
        currentCard = getNewCardIndex();
        displayFront(currentCard);
        isFront = true;
    }
}

function displayFront(cardIndex) {
    document.getElementById("main").innerHTML = '<h1 class="display-1">' + cards[cardIndex].front + '</h1>';
}

function displayBack(cardIndex) {
    document.getElementById("main").innerHTML = '<img src="' + cards[cardIndex].back + '">';
}


function getNewCardIndex() {
    return Math.floor(Math.random() * cards.length);
}
