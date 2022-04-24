const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const quoteWrap = document.querySelector(".quote-wrap");

quoteWrap.style.background = `url(./img/${chosenImage}) no-repeat top center / cover`;
