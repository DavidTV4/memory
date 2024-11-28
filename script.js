// script.js
const board = document.getElementById("game-board");
const cardsArray = [
  "✈️", "🌏", "❤️", "🥥", "🥬", "🫛", "🫘", "🥜", "🧆", "🍔", "🍆", "🏦", "🏝", "🌐",
  "✈️", "🌏", "❤️", "🥥", "🥬", "🫛", "🫘", "🥜", "🧆", "🍔", "🍆", "🏦", "🏝", "🌐"
];
let flippedCards = [];
let matchedCards = [];

// Shuffle cards
cardsArray.sort(() => 0.5 - Math.random());

// Create cards
cardsArray.forEach((symbol) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<span>${symbol}</span>`;
  card.addEventListener("click", handleCardClick);
  board.appendChild(card);
});

// Handle card click
function handleCardClick(event) {
  const clickedCard = event.target;

  if (
    flippedCards.length < 2 &&
    !flippedCards.includes(clickedCard) &&
    !clickedCard.classList.contains("matched")
  ) {
    clickedCard.classList.add("flipped");
    flippedCards.push(clickedCard);

    if (flippedCards.length === 2) {
      checkForMatch();
    }
  }
}

// Check for a match
function checkForMatch() {
  const [card1, card2] = flippedCards;
  const symbol1 = card1.querySelector("span").textContent;
  const symbol2 = card2.querySelector("span").textContent;

  if (symbol1 === symbol2) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    matchedCards.push(card1, card2);
    flippedCards = [];

    if (matchedCards.length === cardsArray.length) {
      setTimeout(() => alert("You won! 🎉"), 500);
    }
  } else {
    setTimeout(() => {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
      flippedCards = [];
    }, 1000);
  }
}