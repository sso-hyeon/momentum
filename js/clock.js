const clock = document.querySelector("#clock");
const nowHours = document.querySelector(".hour");
const nowMinutes = document.querySelector(".min");
const nowSeconds = document.querySelector(".sec");

const nowDate = new Date().getDate();
const nowMonth = new Intl.DateTimeFormat("en-US", { month: "long" }).format(new Date());
const date = document.querySelector(".date");
const month = document.querySelector(".month");

window.addEventListener("load", function () {
    printDate();
    getClock();
    setInterval(getClock, 1000);
});

function printDate() {
    date.innerText = nowDate;
    month.innerText = nowMonth;
}

function getClock() {
    const date = new Date();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    nowHours.innerText = hours;
    nowMinutes.innerText = minutes;
    nowSeconds.innerText = seconds;
}
