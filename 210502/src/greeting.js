const greeting = document.querySelector(".js-greeting");
const currentUser = localStorage.getItem("currentUser");

function paintingGreeting() {
    greeting.innerHTML = `Hello, ${currentUser}!`;
}

function loadName() {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser === null) {
        location.href = "index.html";
    } else {
        paintingGreeting(currentUser)
    }
}


function init() {
    loadName();
}
init();