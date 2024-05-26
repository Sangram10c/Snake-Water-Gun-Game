const prompt = require("prompt-sync")();
let words = ["snake", "water", "gun"];
let random = words[Math.floor(Math.random() * words.length)];
let input;
let user_points = 0;
let computer_points = 0;
let chances = 0;
do {
    input = prompt("Enter any one (snake, water, gun) =").trim().toLowerCase();
    if (input == random) {
        console.log("Draw");
        chances++;
        random = words[Math.floor(Math.random() * words.length)];
    } else if (input == "snake" && random == "gun") {
        console.log("Computer wins!");
        chances++;
        computer_points++;
        random = words[Math.floor(Math.random() * words.length)];
    } else if (input == "snake" && random == "water") {
        console.log("You wins!");
        chances++;
        user_points++;
        random = words[Math.floor(Math.random() * words.length)];
    } else if (input == "water" && random == "snake") {
        console.log("Computer wins!");
        chances++;
        computer_points++;
        random = words[Math.floor(Math.random() * words.length)];
    } else if (input == "water" && random == "gun") {
        console.log("You wins!");
        chances++;
        user_points++;
    } else if (input == "gun" && random == "water") {
        console.log("Computer wins!");
        chances++;
        computer_points++;
    } else if (input == "gun" && random == "snake") {
        console.log("You wins!");
        chances++;
        user_points++;
    } else {
        console.log("this not a valid input");
    }
} while (chances < 5);
console.log(`Your points = ${user_points}`);
console.log(`Computer points = ${computer_points}`);
if (user_points < computer_points) {
    console.log("Sorry, but the final winner is computer.");
    console.log("Game ended");
} else if (user_points > computer_points) {
    console.log("Congrats!, You are the Final winner.");
    console.log("Game ended");
} else {
    console.log("The game is end and It's a draw.");
}
