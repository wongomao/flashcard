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


function echoImageStrs() {
    // cards.array.forEach(element => {
    //     console.log(element.back);
    // });
    cards.forEach(echoImageStr)
}

function echoImageStr(item) {
    console.log(item.back);
}