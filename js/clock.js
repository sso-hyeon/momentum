const clock = document.querySelector("#clock");
const hours = document.querySelector(".hour");
const minutes = document.querySelector(".min");
const seconds = document.querySelector(".sec");

const date = document.querySelector(".date");
const month = document.querySelector(".month");
const currDate = document.querySelector(".current-date");

window.addEventListener("load", function () {
    printDate();
    getClock();
    setInterval(getClock, 1000);
});

function printDate() {
    const newDate = new Date();
    const y = newDate.getFullYear();
    const m = String(newDate.getMonth()).padStart(2, "0");
    const enMonth = new Intl.DateTimeFormat("en-US", { month: "long" }).format(newDate);
    const d = String(newDate.getDate()).padStart(2, "0");
    date.innerText = newDate.getDate();
    month.innerText = enMonth;
    currDate.innerText = `${y}.${m}.${d}`;
}

function getClock() {
    const date = new Date();

    const h = String(date.getHours()).padStart(2, "0");
    const m = String(date.getMinutes()).padStart(2, "0");
    const s = String(date.getSeconds()).padStart(2, "0");
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
}
