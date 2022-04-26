const emoji = ["🎈", "😎", "🙌", "🤩", "😊", "💛", "💕", "✨", "🍀", "🌞", "🌈"];
const randomEmoji = document.querySelector(".random-emoji");
const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const editForm = document.getElementById("edit-form");
const editInput = document.querySelector("#edit-form input");
const wrapper = document.getElementById("wrapper");
const greeting = document.querySelector(".userName");
const editBtn = document.querySelector(".edit-btn");
const editPopup = document.querySelector(".edit-popup");
const editCancelBtn = document.querySelector(".cancel-btn");
const editAgreeBtn = document.querySelector(".agree-btn");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

editBtn.addEventListener("click", editUserName);
editForm.addEventListener("submit", onEditSubmit);

editCancelBtn.addEventListener("click", function () {
    editPopup.classList.add("hidden");
});
editAgreeBtn.addEventListener("click", onEditSubmit);

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    wrapper.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `${username}`;

    const url = "https://avatars.dicebear.com/api/croodles/" + username + ".svg";
    fetch(url).then(response => {
        const avatar = document.querySelector(".avatar");
        avatar.innerHTML = `<img src="${response.url}" />`;
    });

    randomEmoji.innerText = emoji[Math.floor(Math.random() * emoji.length)];
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}

function editUserName() {
    editPopup.classList.remove("hidden");
}

function onEditSubmit(e) {
    e.preventDefault();
    const username = editInput.value;
    if (username === "" || username.trim() === "") {
        alert("변경할 이름을 입력하세요.");
        return;
    }
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    editPopup.classList.add("hidden");
}
