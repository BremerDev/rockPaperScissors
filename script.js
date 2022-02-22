// Rock Paper Scissors Game


// Call a Function to Start Game

function game() {
    for (let i = 1; i < 6; i++) {
        console.log(`Round: ${i}`);
        playRound(userInput(), computerPlay());
    }
    
}


// User Inputs Answer - Case Sensitive - Must be only one of the 3 options or else makes user try input again.


function userInput() {
    let userAnswer = prompt('Rock, Paper, or Scissors?');
    let sensitiveAnswer = userAnswer.charAt(0).toUpperCase() + userAnswer.slice(1).toLowerCase();
    console.log('User:');
    console.log(sensitiveAnswer);
    return sensitiveAnswer;
}



// Computer Randomizes own Answer
function computerPlay() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = choice[Math.floor(Math.random()*choice.length)];
    console.log('CPU:');
    console.log(computerSelection);
    return computerSelection;
}

// User and Computer compare Answer

function playRound(sensitiveAnswer, computerSelection) {
    if (sensitiveAnswer == 'Rock' && computerSelection == 'Paper') {
        console.log('You lose, paper beats rock!');
    } else if (sensitiveAnswer == 'Paper' && computerSelection == 'Scissors') {
        console.log('You lose, scissors beat paper!');
    } else if (sensitiveAnswer == "Scissors" && computerSelection == 'Rock') {
        console.log('You lose, rock beats scissors!');
    } else if (sensitiveAnswer == 'Rock' && computerSelection == "Scissors") {
        console.log('You win, rock beats scissors!');
    } else if (sensitiveAnswer == 'Paper' && computerSelection == 'Rock') {
        console.log('You win, paper beats rock!');
    } else if (sensitiveAnswer == 'Scissors' && computerSelection == 'Paper') {
        console.log('You win, scissors beat paper!');
    } else if (sensitiveAnswer == computerSelection) {
        console.log('It\'s a tie!');
    } else {
        console.log('Check your');
    }
}





// Rock > Scissors, Scissors > Paper, Paper > Rock.
// If User Input === Computer Answer - Results are a Tie.
// If User Input > Computer Answer - User Wins
// If User Input < Computer Answer - Computer Wins
// Play a Best of 5 Game. Loop.

