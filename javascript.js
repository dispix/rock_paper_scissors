function computerPlay() {

    let items = ['rock', 'paper', 'scissors'];
    let choice = items[Math.floor(Math.random() * items.length)];
    return choice;
}

function playRound(computerSelection, userSelection) {
    
    let winningMessage = 'You won :)';
    let losingMessage = 'You lost mazza fackaaa ^^';
    
    if (computerSelection === 'rock' && userSelection === 'scissors')
    {
        console.log(`   ${losingMessage} ${computerSelection} beats ${userSelection}`);
        return 0;
    }
    else if (computerSelection === 'rock' && userSelection === 'paper')
    {
        console.log(`   ${winningMessage} ${userSelection} beats ${computerSelection}`);
        return 1;
    }
    else if (computerSelection === 'paper' && userSelection === 'rock')
    {
        console.log(`   ${losingMessage} ${computerSelection} beats ${userSelection}`);
        return 0;
    }
    else if (computerSelection === 'paper' && userSelection === 'scissors')
    {
        console.log(`   ${winningMessage} ${userSelection} beats ${computerSelection}`);
        return 1;
    }
    else if (computerSelection === 'scissors' && userSelection === 'paper')
    {
        console.log(`   ${losingMessage} ${computerSelection} beats ${userSelection}`);
        return 0;
    }
    else if (computerSelection === 'scissors' && userSelection === 'rock')
    {
        console.log(`   ${winningMessage} ${userSelection} beats ${computerSelection}`);
        return 1;
    }
    else
    {
        console.log("   It's a tie !");
        return (-1);
    }
}

function checkWinner(cScore, pScore) /* function to use if we want to include the ties in the rounds count,
                                        which can lead to an equalty, or to a victory with just one or two rounds won. */
{
    if (cScore < pScore)
    {
        return 'Human wins !'
    }
    else if (pScore < cScore)
    {
        return 'Computer beats human !'
    }
    else
    {
        return "No one wins --> Replay";
    }
}

function game()
{
    let round = 1;
    let pScore = 0; // user score
    let cScore = 0; // computer score
    while (round < 5)
    {
        let userChoice = prompt("Choose between Rock, Paper and Scissors :");
        // const userChoice = document.querySelectorAll('[data-name]');
        // userChoice.forEach(element => {
        //     element.addEventListener('click', e => {
        //         console.log(element.dataset.name);
                // userChoiceName = e.element.dataset.name;
        //     })
        // });
        if (userChoice === null) {
                return 0;
        };
        // userChoice.toLowerCase();
        while (userChoice !== 'rock' && userChoice !=='paper' && userChoice!== 'scissors') {
            alert('Enter valid choice');
            userChoice = prompt("Choose between Rock, Paper and Scissors :");
        }
        const computerChoice = computerPlay();
        console.log(`User chose ${userChoice}`);
        console.log(`Computer chose ${computerChoice}`);

        let singleRoundScore = playRound(computerChoice, userChoice);
        // if (playRound(computerChoice, userChoice) === 1)
        if (singleRoundScore === 1)
        {
            pScore++;
            console.log(`       Player score ${pScore}`);
            console.log(`       Computer score ${cScore}`);
        }
        // else if (playRound(computerChoice, userChoice) === 0)
        else if (singleRoundScore === 0)
        {
            cScore++;
            console.log(`       Player score ${pScore}`);
            console.log(`       Computer score ${cScore}`);
        }
        else 
        {
            continue;
        }
        if (pScore === 3)
        {
            console.log("Human wins !");
            return 1;
        }
        else if (cScore === 3)
        {
            console.log("Computer wins !");
            return 0;
        }
        round++;
    }
    // checkWinner(cScore, pScore);
    return 0;

    // console.log(winner);
}

function main() {
    let startGame = prompt('Play Game ? Y/N');
        if (startGame === 'Y') {
            let gameCount = 1;
            while (gameCount <= 3){
                game();
                // if (game === 0){
                //     let playerVicory;
                //     let computerVictory;
                // }
                gameCount++;
                startGame = prompt("Play again ? Y/N");
                if(startGame !== 'Y')
                    return 0;
            };
        }
        return 0;
    }
    main();

