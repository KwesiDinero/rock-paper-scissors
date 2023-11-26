document.addEventListener('DOMContentLoaded', function() {
    const rockButton = document.querySelector('.btnRock');
    const paperButton = document.querySelector('.btnPaper');
    const scissorButton = document.querySelector('.btnScissor');
    const userScoreElement = document.getElementById('userScore');
    const computerScoreElement = document.getElementById('computerScore');
    const roundResultsElement = document.getElementById('roundResults');

    let userScore = 0;
    let computerScore = 0;
    let gamesPlayed = 0;
    
    //ComputerChoice
    function ComputerChoice() {
        const choice_num = Math.floor(Math.random() * 3) + 1;
        let choice;
        switch (choice_num) {
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

    function rounds(computerChoice, userChoice) {
        let results;
        if (computerChoice.toUpperCase() === userChoice.toUpperCase()) {
            results = "DRAW";
        } else if (computerChoice.toUpperCase() === "PAPER" && userChoice.toUpperCase() === "ROCK") {
            results = "I WIN";
            computerScore++;
        } else if (computerChoice.toUpperCase() === "ROCK" && userChoice.toUpperCase() === "PAPER") {
            results = "YOU WIN";
            userScore++;
        } else if (computerChoice.toUpperCase() === "SCISSORS" && userChoice.toUpperCase() === "ROCK") {
            results = "YOU WIN";
            userScore++;
        } else if (computerChoice.toUpperCase() === "ROCK" && userChoice.toUpperCase() === "SCISSORS") {
            results = "I WIN";
            computerScore++;
        } else if (computerChoice.toUpperCase() === "PAPER" && userChoice.toUpperCase() === "SCISSORS") {
            results = "YOU WIN";
            userScore++;
        } else if (computerChoice.toUpperCase() === "SCISSORS" && userChoice.toUpperCase() === "PAPER") {
            results = "I WIN";
            computerScore++;
        }

        // Display the results after each game
        roundResultsElement.textContent = `Game ${gamesPlayed + 1}: Computer chose ${computerChoice}, User chose ${userChoice}, Result: ${results}`;

        
        userScoreElement.textContent = userScore;
        computerScoreElement.textContent = computerScore;

        
        if (++gamesPlayed === 5) {
            announceWinner();
            //userScore =0;
            //computerScore =0;

            
        }
        
    }

    function announceWinner() {
        if (userScore > computerScore) {
            roundResultsElement.textContent = `User wins the round! User: ${userScore}, Computer: ${computerScore}`;
        } else if (computerScore > userScore) {
            roundResultsElement.textContent = `Computer wins the round! User: ${userScore}, Computer: ${computerScore}`;
        } else {
            roundResultsElement.textContent = `It's a draw! User: ${userScore}, Computer: ${computerScore}`;
        }

        
         userScore = 0;
         computerScore = 0;
         gamesPlayed =0;
        
    }

    function playGame(userChoice) {
        const computerChoice = ComputerChoice();
        rounds(computerChoice, userChoice);
    }

    rockButton.addEventListener('click', function() {
        playGame("ROCK");
    });

    paperButton.addEventListener('click', function() {
        playGame("PAPER");
    });

    scissorButton.addEventListener('click', function() {
        playGame("SCISSORS");
    });
});
