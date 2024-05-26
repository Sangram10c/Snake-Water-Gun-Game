// Selecting HTML elements for buttons and result display
let snakeBtn = document.getElementById('snake');
let waterBtn = document.getElementById('water');
let gunBtn = document.getElementById('gun');
let computerReply = document.getElementById('computerReply');
let result = document.getElementById('result');
let winScore = document.getElementById('win');
let loseScore = document.getElementById('lose');
let totalScore = document.getElementById('total');

// Variables to keep track of scores
let total = 0;
let won = 0;
let lose = 0;

// Event listener for the Snake button

    snakeBtn.addEventListener('click', () => {
    // Generating a random number to check the computer's choice
    let randomNum = Math.floor(Math.random() * 3);
    // Array of all possible values: Water, Gun, Snake
    let allValue = ['Water', 'Gun', 'Snake'];

    // Computer's choice based on the random number
    compAns = allValue[randomNum];
    computerReply.innerText = compAns;

    // Game logic based on user and computer choices
    if (compAns == 'Snake') {
        result.innerText = "It's a tie!";
        return;
    } else if (compAns == 'Water') {
        result.innerText = 'You win!';
        won++;
        winScore.innerText = won;
    } else {
        result.innerText = 'Computer wins!';
        lose++;
        loseScore.innerText = lose;
    }
    // Updating the total games played counter
    total++;
    totalScore.innerText = total;
});

// Event listener for the Water button
waterBtn.addEventListener('click', () => {
    // Generating a random number to check the computer's choice
    let randomNum = Math.floor(Math.random() * 3);
    // Array of all possible values: Snake, Water, Gun
    let allValue = ['Snake', 'Water', 'Gun'];

    // Computer's choice based on the random number
    compAns = allValue[randomNum];
    computerReply.innerText = compAns;

    // Game logic based on user and computer choices
    if (compAns == 'Water') {
        result.innerText = "It's a tie!";
        return;
    } else if (compAns == 'Gun') {
        result.innerText = 'You win!';
        won++;
        winScore.innerText = won;
    } else {
        result.innerText = 'Computer wins!';
        lose++;
        loseScore.innerText = lose;
    }
    // Updating the total games played counter
    total++;
    totalScore.innerText = total;
});

// Event listener for the Gun button
gunBtn.addEventListener('click', () => {
    // Generating a random number to check the computer's choice
    let randomNum = Math.floor(Math.random() * 3);
    // Array of all possible values: Snake, Gun, Water
    let allValue = ['Snake', 'Gun', 'Water'];

    // Computer's choice based on the random number
    compAns = allValue[randomNum];
    computerReply.innerText = compAns;

    // Game logic based on user and computer choices
    if (compAns == 'Gun') {
        result.innerText = "It's a tie!";
        return;
    } else if (compAns == 'Snake') {
        result.innerText = 'You win!';
        won++;
        winScore.innerText = won;
    } else {
        result.innerText = 'Computer wins!';
        lose++;
        loseScore.innerText = lose;
    }
    // Updating the total games played counter
    total++;
    totalScore.innerText = total;
});


