// Computer Select Randomly from three option
function getComputerChoice() {
    // get random number between 1-3
    let randomNum = Math.floor(Math.random() * 3) + 1;
   
    // convert number into rock-paper-scissors (RPS) option
    switch (randomNum) {
        case 1:
            choice = "Rock";
            break;
        case 2:
            choice = "Paper";
            break;
        case 3:
            choice = "Scissors";
            break;
    }
    
    // return the computer's RPS choice
    return choice;
        
}


// play the game based on player and computer selection
function playRound(playerSelection, computerSelection) {

    // convert selection to lowercase
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // text message for the result
    textWin = "Congratulations. You won!";
    textLose = "You lost. Too bad.";
    textTie = "It's a draw. Lets rematch.";

    // results based on the user and computer selection
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'rock') {
                return textTie;
            } else if (computerSelection === 'paper') {
                return textLose;
            } else { //scissors
                return textWin;
            }
            break;

        case 'paper':
            if (computerSelection === 'rock') {
                return textWin;
            } else if (computerSelection === 'paper') {
                return textTie;
            } else { //scissors
                return textLose;
            }
            break;

        case 'scissors':
            if (computerSelection === 'rock') {
                return textLose;
            } else if (computerSelection === 'paper') {
                return textWin;
            } else { //scissors
                return textTie;
            }
            break;

    }

}

// create a best-of-five game
function game() {
    // declare and initialized score variable
    let score = 0;
    let game = 1;

    // play game times
    playerSelection = prompt(`Please select rock, paper or scissors for game #${game}.`)
    computerSelection = getComputerChoice();                    // update computer selection
    textResult = playRound(playerSelection, computerSelection); // play the game
    checkResult = textResult.includes('won');                   // check if player had won
    
    if (checkResult) {score = score + 1};                       // update score if won

    console.log(`Game #${game}: Player select: ${playerSelection}; Computer select: ${computerSelection}. Score: ${score} out of 5.`);

    game = game + 1;

    // play game four more times (not using loop at this stage of lesson.)
    // game #2 ------------------------------------------------------------------------------
    playerSelection = prompt(`Please select rock, paper or scissors for game #${game}.`)
    computerSelection = getComputerChoice();                    // update computer selection
    textResult = playRound(playerSelection, computerSelection); // play the game
    checkResult = textResult.includes('won');                   // check if player had won
    
    if (checkResult) {score = score + 1};                       // update score if won

    console.log(`Game #${game}: Player select: ${playerSelection}; Computer select: ${computerSelection}. Score: ${score} out of 5.`);

    game = game + 1;

    // game #3 ------------------------------------------------------------------------------
    playerSelection = prompt(`Please select rock, paper or scissors for game #${game}.`)
    computerSelection = getComputerChoice();                    // update computer selection
    textResult = playRound(playerSelection, computerSelection); // play the game
    checkResult = textResult.includes('won');                   // check if player had won
    
    if (checkResult) {score = score + 1};                       // update score if won

    console.log(`Game #${game}: Player select: ${playerSelection}; Computer select: ${computerSelection}. Score: ${score} out of 5.`);

    game = game + 1;

    // game #4 ------------------------------------------------------------------------------
    playerSelection = prompt(`Please select rock, paper or scissors for game #${game}.`)
    computerSelection = getComputerChoice();                    // update computer selection
    textResult = playRound(playerSelection, computerSelection); // play the game
    checkResult = textResult.includes('won');                   // check if player had won
    
    if (checkResult) {score = score + 1};                       // update score if won

    console.log(`Game #${game}: Player select: ${playerSelection}; Computer select: ${computerSelection}. Score: ${score} out of 5.`);

    game = game + 1;

    // game #5 ------------------------------------------------------------------------------
    playerSelection = prompt(`Please select rock, paper or scissors for game #${game}.`)
    computerSelection = getComputerChoice();                    // update computer selection
    textResult = playRound(playerSelection, computerSelection); // play the game
    checkResult = textResult.includes('won');                   // check if player had won
    
    if (checkResult) {score = score + 1};                       // update score if won

    console.log(`Game #${game}: Player select: ${playerSelection}; Computer select: ${computerSelection}. Score: ${score} out of 5.`);

    game = game + 1;

}

// run the game function
game();
