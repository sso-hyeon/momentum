const chosenImage = Math.floor(Math.random() * 8);

const quoteWrap = document.querySelector(".quote-wrap");

quoteWrap.style.background = `url(./img/${chosenImage}.jpg) no-repeat center / cover`;
