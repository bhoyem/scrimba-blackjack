// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = Math.floor((Math.random() * 10) + 2);
let secondCard = Math.floor((Math.random() * 10) + 2);

let sum = firstCard + secondCard;

console.log(`first card: ${firstCard}`);
console.log(`second card: ${secondCard}`);
console.log(`Sum: ${sum}`);