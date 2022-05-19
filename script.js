// Rock Paper Scissors Game

let userScore = 0;
let cpuScore = 0;

// Call a Function to Start Game

function game() {
    for (let i = 1; i < 6; i++) {
        console.log(`Round: ${i}.`);
        playRound(userInput(), computerPlay());
        console.log(`Score: User:${userScore} - CPU:${cpuScore}`)
        console.log('');
        if (userScore > cpuScore && i == 5) {
            console.log(`You won ${userScore} - ${cpuScore}.`)
        } else if (userScore < cpuScore && i == 5) {
            console.log(`You lost ${userScore} - ${cpuScore}.`)
        } else if (userScore == cpuScore && i == 5) {
            console.log(`You tied ${userScore} - ${cpuScore}.`)
        } else if (i == 5) {
            console.log('Something went wrong.')
        }
    }

}

// function userInput() {
//     let userAnswer = prompt('Rock, Paper, or Scissors?');
//     let sensitiveAnswer = userAnswer.charAt(0).toUpperCase() + userAnswer.slice(1).toLowerCase();
//     console.log(`User: ${sensitiveAnswer}`);
//     return sensitiveAnswer;
// }




// Computer Randomizes own Answer
function computerPlay() {
  const choice = ["Rock", "Paper", "Scissors"];
  let computerSelection = choice[Math.floor(Math.random() * choice.length)];
  console.log(`CPU: ${computerSelection}`);
  return computerSelection;
}


// Change function arguments to take event buttons to pass through comparison checks.

function playRound(userChoice, computerSelection) {
  if (userChoice == "Rock" && computerSelection == "Paper") {
    console.log("You lose, paper beats rock!");
    cpuScore++;
  } else if (userChoice == "Paper" && computerSelection == "Scissors") {
    console.log("You lose, scissors beat paper!");
    cpuScore++;
  } else if (userChoice == "Scissors" && computerSelection == "Rock") {
    console.log("You lose, rock beats scissors!");
    cpuScore++;
  } else if (userChoice == "Rock" && computerSelection == "Scissors") {
    console.log("You win, rock beats scissors!");
    userScore++;
  } else if (userChoice == "Paper" && computerSelection == "Rock") {
    console.log("You win, paper beats rock!");
    userScore++;
  } else if (userChoice == "Scissors" && computerSelection == "Paper") {
    console.log("You win, scissors beat paper!");
    userScore++;
  } else if (userChoice == computerSelection) {
    console.log("It's a tie!");
  } else {
    console.log("Check again.");
  }
}

