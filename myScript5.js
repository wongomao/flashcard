cards = [
    { front: "Lick 1", back: "images/Lick01.PNG", weight: 4 },
    { front: "Lick 2", back: "images/Lick02.PNG", weight: 4 },
    { front: "Lick 3", back: "images/Lick03.PNG", weight: 4 },
    { front: "Lick 4", back: "images/Lick04.PNG", weight: 4 },
    { front: "Lick 5", back: "images/Lick05.PNG", weight: 4 },
    { front: "Lick 6", back: "images/Lick06.PNG", weight: 4 },
    { front: "Lick 7", back: "images/Lick07.PNG", weight: 4 },
    { front: "Lick 8", back: "images/Lick08.PNG", weight: 4 },
    { front: "Lick 9", back: "images/Lick09.PNG", weight: 4 },
    { front: "Lick 10", back: "images/Lick10.PNG", weight: 4 }
];

const WAITTIME = 5000;

class Timer {
    constructor(playFunction) {
        this._playFunction = playFunction;
        this._intervalObj = undefined;
    }

    set buttonElement(x) {
        this._buttonElement = x;
    }

    playIsStopped() {
        return this._intervalObj === undefined;
    }

    startPlay() {
        this._buttonElement.innerHTML = "Stop";
        this._intervalObj = setInterval(this._playFunction, WAITTIME);
    }

    stopPlay() {
        this._buttonElement.innerHTML = "Start";
        clearInterval(this._intervalObj);
        this._intervalObj = undefined;
    }

}


class CardFlasher {
    constructor(cards) {
        this._cards = cards;
        this._currentCard = undefined;
        this._stack = [];
    }

    darkenBackground() {
        document.getElementById("main").style.backgroundColor = "blue";
    }

    lightenBackground() {
        document.getElementById("main").style.backgroundColor = "initial"
    }

    displayFront(card) {
        document.getElementById("main").innerHTML = '<h1 class="display-1">' + card.front + '</h1>';
    }

    displayBack(card) {
        document.getElementById("main").innerHTML = '<img src="' + card.back + '">';
        this.lightenBackground();
    }

    showCard() {
        // if we have a current card, just display the back and then toss the current card
        if (this._currentCard != undefined) {
            this.displayBack(this._currentCard);
            this._currentCard = undefined;
            return;
        }
        // current card is undefined, so get next card from stack
        if (this._stack.length === 0) {
            this.darkenBackground();
            this._stack = this.buildStack();
        }
        if (this._stack.length === 0) {
            return;
        }
        this._currentCard = this._stack.pop();
        this.displayFront(this._currentCard);
    }

    shuffleStack(stack) {
        for (var i = stack.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * i)
            var k = stack[i]
            stack[i] = stack[j]
            stack[j] = k
        }
        return stack;
    }

    buildStack() {
        var stack = [];
        this._cards.forEach(card => {
            for (var i = 0; i < card.weight; i++) {
                stack.push({ front: card.front, back: card.back });
            }
        });
        stack = this.shuffleStack(stack);
        return stack;
    }

    logStack(stack) {
        if (stack.length > 0) {
            stack.forEach(card => {
                console.log("card.front=" + card.front + " card.back=" + card.back)
            });
        }
        else {
            console.log(" 0 elements, stack is empty ");
        }
    }
}

// ======================================================================================

var cardFlasher = new CardFlasher(cards);

function showRandomCard() {
    cardFlasher.showCard();
}

var myTimer = new Timer(showRandomCard);

function togglePlay() {

    myTimer.buttonElement = document.getElementById("togglePlayBtn");
    if (myTimer.playIsStopped()) {
        myTimer.startPlay();
    }
    else {
        myTimer.stopPlay();
    }
}

