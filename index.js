let firstCard = Math.floor((Math.random() * 10) + 2);
let secondCard = Math.floor((Math.random() * 10) + 2);
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");

console.log(`first card: ${firstCard}`);
console.log(`second card: ${secondCard}`);
console.log(`Sum: ${sum}`);

function startGame() {
    sumEl.textContent = "Sum: "+sum;
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
    return;
}
