
function ComputerChoice(){
    const choice_num= Math.floor(Math.random() * 3) + 1;
    let choice;
    switch(choice_num) {
        case 1:
            choice = "ROCK";
            break;
        case 2: 
            choice = "PAPER";
            break;
        case 3:
            choice = "SCISSORS";
            break;
    }
    return choice;
}

const computerChoice = ComputerChoice();
var userChoice = "ROCK";



function rounds(computerChoice, userChoice) {
    let results;
    if (computerChoice.toUpperCase() === userChoice.toUpperCase()) {
        results = "DRAW";
    } else if (computerChoice.toUpperCase() === "PAPER" && userChoice.toUpperCase() === "ROCK") {
        results = "I WIN";
    } else if (computerChoice.toUpperCase() === "ROCK" && userChoice.toUpperCase() === "PAPER") {
        results = "YOU WIN";
    }else if (computerChoice.toUpperCase() === "SCISSORS" && userChoice.toUpperCase() === "ROCK") {
        results = "YOU WIN";
    } else if (computerChoice.toUpperCase() === "ROCK" && userChoice.toUpperCase() === "SCISSORS") {
        results = "I WIN";
    }else if (computerChoice.toUpperCase() === "PAPER" && userChoice.toUpperCase() === "SCISSORS") {
        results = "YOU WIN";
    } else if (computerChoice.toUpperCase() === "SCISSORS" && userChoice.toUpperCase() === "PAPER") {
        results = "I WIN";
    }

    return results;
}


//Game function

function game() {
    
    let computerScore = 0;
    let userScore = 0;

    for (let round = 1; round <= 5; round++) {
     
        const computerChoice = ComputerChoice();
        let userChoice;
        do {
            userChoice = prompt("Choose ROCK, PAPER, or SCISSORS").toUpperCase();
        } while (!["ROCK", "PAPER", "SCISSORS"].includes(userChoice));

        const result = rounds(computerChoice, userChoice);

     
        if (result === "I WIN") {
            computerScore++;
        } else if (result === "YOU WIN") {
            userScore++;
        }

        console.log(`Round ${round}: Computer chose ${computerChoice}, User chose ${userChoice}, Result: ${result}`);
    }

   
    if (computerScore > userScore) {
        console.log("Computer wins the game!");
    } else if (userScore > computerScore) {
        console.log("User wins the game!");
    } else {
        console.log("It's a draw!");
    }
}


game();
