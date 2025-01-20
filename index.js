let firstCard = Math.floor((Math.random() * 10) + 2);
let secondCard = Math.floor((Math.random() * 10) + 2);
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

console.log(`first card: ${firstCard}`);
console.log(`second card: ${secondCard}`);

function startGame() {
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true
    } else {
        message = "You're out of the game!";
        isAlive = false
    }
    messageEl.textContent = message;
}

function newCard() {
    console.log("Drawing a new card from the deck.");
    let card = Math.floor((Math.random() * 10) + 2);
    sum += card;
    console.log(`new card: ${card}`);
    renderGame();
};
