const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing",
        author: "Walt Disney"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine"
    },
    {
        quote: "I never dreamed about success, I worked for it",
        author: "Estee Lauder"
    },
    {
        quote: "Do not try to be original, just try to be good.",
        author: "Paul Rand"
    },
    {
        quote: "Do not be afraid to give up the good to go for the great.",
        author: "John D.Rockefeller"
    },
    {
        quote: "If you cannot fly then run. If you cannot run, then walk. And of you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
        author: "Martim Luther King Jr"
    },
    {
        quote: "Our greatest weakness lies in giving up. The most certain way to succed is always to try just one more time.",
        author: "Thomas Edison"
    },
    {
        quote: "The fastest way to change yourself is to hang out with people who are already the way you want to be",
        author: "REid Hoffman"
    },
    {
        quote: "The only thing worse than starting something and falling.. is not starting something",
        author: "SEth Godin"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
