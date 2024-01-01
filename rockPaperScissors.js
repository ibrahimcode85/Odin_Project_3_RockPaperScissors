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


// get player selection
const playerSelection = "Rock";

// get computer selection
let computerSelection = getComputerChoice();


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

textResult = playRound(playerSelection, computerSelection);
checkResult = textResult.includes('won');
console.log(`Player select : ${playerSelection}`);
console.log(`Computer select : ${computerSelection}`);
console.log(`The result is : ${textResult}`);
console.log(checkResult);