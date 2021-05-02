const container = document.querySelector(".todo"),
    bgImage = container.querySelector(".bgImage"),
    imgNumber = 6;

function paintImg(randomNumber) {
    const img = new Image();
    img.src = `img/bg0${randomNumber + 1}.jpg`;
    container.prepend(img);
    img.classList.add("bgImage");
}
function genRandom() {
    const number = Math.floor(Math.random() * imgNumber);
    return number;
}
function init() {
    const rendomNumber = genRandom();
    paintImg(rendomNumber)
}
init();
