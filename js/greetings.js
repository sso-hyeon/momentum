const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const wrapper = document.getElementById("wrapper");
const greeting = document.querySelector(".userName");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

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
