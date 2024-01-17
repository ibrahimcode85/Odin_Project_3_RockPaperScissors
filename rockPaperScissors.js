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
function game(playerSelection) {
    
    computerSelection = getComputerChoice();                    // update computer selection
    textResult = playRound(playerSelection, computerSelection); // play the game
    
    return arrayResult = [playerSelection, computerSelection, textResult]
}

// run the game
const clickChoices = document.querySelector('#buttons');
const divResult = document.querySelector('#result');

var gameNumber = 0;
var score = 0;

const clickHandler = (e) => {
    gameNumber = gameNumber + 1;

    let playerSelection = e.target.getAttribute('id').toUpperCase();
    let arrayResult = game(playerSelection);        // arrayResult = [playerSelection, computerSelection, textResult]
    let computerSelect = arrayResult[1].toUpperCase();
    let textResult = arrayResult[2];

    // calculate score
    checkResult = textResult.includes('won');       // check if player had won
    if (checkResult) {score = score + 1};           // update score if won

    // print result text
    printResult = `Game number ${gameNumber}: Player selected ${playerSelection} while computer selected ${computerSelect}. "${textResult}". Current score is ${score} out of ${gameNumber}`;
    const pResult = document.createElement('p');
    pResult.textContent = printResult;
    divResult.appendChild(pResult);

   // process end of game
   if (gameNumber >= 5) {
    const finalResult = document.createElement('h3');

    if (score >= 3) {
        finalResult.textContent = `Congratulation you have won! You have won ${score} out of 5 games played.`
    } else{
        finalResult.textContent = `You have lost! You have only won ${score} out of 5 games played.`
    };

    finalResult.setAttribute('id', 'finalResult');
    document.body.appendChild(finalResult);
    endGame();
    };
};

clickChoices.addEventListener('click', clickHandler);

function endGame() {
    clickChoices.removeEventListener('click', clickHandler);
    setTimeout(() => { alert('This is the end of Game. Please reload the page to play the game again.'); }, 1000);
    
}