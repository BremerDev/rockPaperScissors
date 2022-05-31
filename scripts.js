let userScore = 0;
let cpuScore = 0;
let round = 0;

const roundPara = document.querySelector('p.round');
const result = document.querySelector('p.result');
const score = document.querySelector('p.score');

const userSelectionNode = document.querySelectorAll('.btn');
const userSelectionArray = Array.from(userSelectionNode);

userSelectionArray.forEach(selection => selection.addEventListener('click', () => {
    let userSelection = selection.innerHTML;
    const choice = ["Rock", "Paper", "Scissors"];
    let computerSelection = choice[Math.floor(Math.random() * choice.length)];
    if (userSelection == "Rock" && computerSelection == "Paper") {
        result.innerHTML = "You lose, paper beats rock!";
        console.log("You lose, paper beats rock!");
        cpuScore++;
        score.innerHTML = `User: ${userScore} - CPU: ${cpuScore}`;
      } else if (userSelection == "Paper" && computerSelection == "Scissors") {
        result.innerHTML = "You lose, scissors beat paper!";
        console.log("You lose, scissors beat paper!");
        cpuScore++;
        score.innerHTML = `User: ${userScore} - CPU: ${cpuScore}`;
      } else if (userSelection == "Scissors" && computerSelection == "Rock") {
        result.innerHTML = "You lose, rock beats scissors!";
        console.log("You lose, rock beats scissors!");
        cpuScore++;
        score.innerHTML = `User: ${userScore} - CPU: ${cpuScore}`;
      } else if (userSelection == "Rock" && computerSelection == "Scissors") {
        result.innerHTML = "You win, rock beats scissors!";
        console.log("You win, rock beats scissors!");
        userScore++;
        score.innerHTML = `User: ${userScore} - CPU: ${cpuScore}`;
      } else if (userSelection == "Paper" && computerSelection == "Rock") {
        result.innerHTML = "You win, paper beats rock!";
        console.log("You win, paper beats rock!");
        userScore++;
        score.innerHTML = `User: ${userScore} - CPU: ${cpuScore}`;
      } else if (userSelection == "Scissors" && computerSelection == "Paper") {
        result.innerHTML = "You win, scissors beat paper!";
        console.log("You win, scissors beat paper!");
        userScore++;
        score.innerHTML = `User: ${userScore} - CPU: ${cpuScore}`;
      } else if (userSelection == computerSelection) {
        result.innerHTML = "It's a tie!";
        console.log("It's a tie!");
      } else {
        console.log("Check again.");
      }
      ++round;
      roundPara.innerHTML = `Round: ${round}`
      countRounds();
}));

function countRounds() {
    if (round == 5 && userScore > cpuScore) {
        alert("You won! Play Again?");
        window.location.reload();
    } else if (round == 5 && userScore < cpuScore) {
        alert("You lose! Play again?");
        window.location.reload();
    } else if (round == 5 && userScore == cpuScore) {
        alert("Tie Game! Play again?");
        window.location.reload();
    } else {
        return;
    }
};





