var imageNum = 0;

function myFunction() {
    document.getElementById("lick-image").src = "images/Lick02.PNG";
}

function changeToNextImage() {
    document.getElementById("lick-image").src = "images/Lick02.PNG"
}

function echoImageStr(imageNum) {
    console.log(imageNum);
    imageNum = imageNum + 1;
}