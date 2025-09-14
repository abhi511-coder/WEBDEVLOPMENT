const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote-btn");

const localQuotes = [
  {
    content: "Most expensive word SILENCE",
    author: "Abhishek",
  },
  {
    content: "Everyone has same eyes, but not the same view",
    author: "Abhishek",
  },
  {
    content: "Life hurts...  Machine heals",
    author: "Abhishek",
  },
  {
    content: "It's better to walk your journey alone.. than to have false hope from others",
    author: "Abhisehk",
  },
  {
    content: "Never Twist the Throttle With Ego",
    author: "Abhsihek",
  },
  {
    content: "Where divinity echoes through the deodars – Mahasu Devta reigns.",
    author: "Abhishek",
  },
];

const getQuote = () => {
  const random = Math.floor(Math.random() * localQuotes.length);
  quoteEl.textContent = `"${localQuotes[random].content}"`;
  authorEl.textContent = `— ${localQuotes[random].author}`;
};

newQuoteBtn.addEventListener("click", getQuote);

// Show a quote immediately on page load
getQuote();
