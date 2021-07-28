/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
const readline = require('readline-sync');

function createPlayer() {
  return {
    move: null,
  };
}

function createComputer() {
  let playerObj = createPlayer();

  let computerObj = {
    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIdx = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIdx];
    },
  };

  return Object.assign(playerObj, computerObj);
}

function createHuman() {
  let playerObj = createPlayer();

  let humanObj = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = readline.question().toLowerCase();
        if (['r', 'p', 's', 'rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObj, humanObj);
}

function createScoreBoard() {
  return {
    humanWins: 0,
    computerWins: 0,
    round: 1,
    winner: null,
  };
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  scoreBoard: createScoreBoard(),
  winningScore: 5,

  displayWelcomeMessage() {
    console.clear();
    console.log('Welcome to Rock, Paper, Scissors!');
    console.log(`Whoever wins ${this.winningScore} points first is the grand champion!`);
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  displayRoundScore() {
    let round = this.scoreBoard.round;
    let humanWins = this.scoreBoard.humanWins;
    let computerWins = this.scoreBoard.computerWins;
    console.log(`\n ----- Round: ${round} ----- Your wins: ${humanWins} Computer Wins: ${computerWins} -----\n`);
  },

  resetScoreBoard() {
    this.scoreBoard = createScoreBoard();
  },

  maxScore() {
    let humanWins = this.scoreBoard.humanWins;
    let computerWins = this.scoreBoard.computerWins;
    let winScore = this.winningScore;
    return (humanWins === winScore || computerWins === winScore);
  },

  winningMoves: {
    r: ['p', 'paper'],
    rock: ['p', 'paper'],
    p: ['s', 'scissors'],
    paper: ['s', 'scissors'],
    s: ['r', 'rock'],
    scissors: ['r', 'rock'],
  },

  updateScoreBoard() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    let humanWinArr = this.winningMoves[computerMove];
    let computerWinArr = this.winningMoves[humanMove];

    if (humanWinArr.includes(humanMove)) {
      this.scoreBoard.winner = 'human';
      this.scoreBoard.humanWins += 1;
    } else if (computerWinArr.includes(computerMove)) {
      this.scoreBoard.winner = 'computer';
      this.scoreBoard.computerWins += 1;
    } else {
      this.scoreBoard.winner = 'tie';
    }

    this.scoreBoard.round += 1;
  },

  displayRoundWinner() {
    console.clear();
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    let winner = this.scoreBoard.winner;

    console.log(`You chose: ${humanMove}`);
    console.log(`The computer chose: ${computerMove}`);

    switch (winner) {
      case 'human':
        console.log('You win this round!');
        break;
      case 'computer':
        console.log('Computer wins this round!');
        break;
      case 'tie':
        console.log("It's a tie this round.");
        break;
    }
  },

  displayGrandWinnerScore() {
    let humanWins = this.scoreBoard.humanWins;
    let computerWins = this.scoreBoard.computerWins;

    console.log(`\n Your wins: ${humanWins} Computer Wins: ${computerWins}\n`);
    this.scoreBoard.winner = humanWins > computerWins ? 'human' : 'computer';
    let grandWinner = this.scoreBoard.winner;
    switch (grandWinner) {
      case 'human':
        console.log('*** You are the grand champion! ***');
        break;
      case 'computer':
        console.log('*** The computer is the grand champion! ***');
        break;
    }
  },

  playAgain() {
    console.log('\nWould you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();

    while (true) {
      while (true) {
        this.displayRoundScore();
        this.human.choose();
        this.computer.choose();
        this.updateScoreBoard();
        this.displayRoundWinner();
        if (this.maxScore()) break;
      }

      this.displayGrandWinnerScore();
      this.resetScoreBoard();
      if (!this.playAgain()) break;
      console.clear();
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();