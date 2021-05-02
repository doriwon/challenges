const nameForm = document.querySelector(".js-name"),
    nameInput = nameForm.querySelector("input"),
    nameButton = nameForm.querySelector("button");

const userLS = "currentUser";

function saveName(text){
    localStorage.setItem(userLS, text);
    location.href = "todo.html";
}

function handleSubmit(event){
    event.preventDefault();

    const currentValue = nameInput.value;
    
    if( currentValue == "" ){
        alert("Please write your name down !");
        nameInput.classList.add("notice");
    }else{
        saveName(currentValue);
    }
}

function loadName(){
    const currentUser = localStorage.getItem(userLS);
    if(currentUser === null){
        nameForm.addEventListener("submit", handleSubmit);
    }else{
        location.href = "todo.html";
    }
}

function init(){
    loadName();
}
init();