/* eslint-disable max-lines-per-function */
const readline = require('readline-sync');

function createRock() {
  return {
    name: 'rock',
    beats: ["scissors"],
  };
}

function createPaper() {
  return {
    name: 'paper',
    beats: ["rock"],
  };
}

function createScissors() {
  return {
    name: 'scissors',
    beats: ["paper"],
  };
}

function createMove(move) {
  switch (move) {
    case 'r':
    case 'rock':
      return createRock();
    case 'p':
    case 'paper':
      return createPaper();
    case 's':
    case 'scissors':
      return createScissors();
  }

  return undefined;
}

function createPlayer() {
  return {
    move: null,
    wins: 0,
  };
}

function createComputer() {
  let playerObj = createPlayer();

  let computerObj = {
    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIdx = Math.floor(Math.random() * choices.length);
      let choice = choices[randomIdx];
      this.move = createMove(choice);
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

      this.move = createMove(choice);
    },
  };

  return Object.assign(playerObj, humanObj);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  round: 1,
  winner: null,
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
    let round = this.round;
    let humanWins = this.human.wins;
    let computerWins = this.computer.wins;
    console.log(`\n ----- Round: ${round} ----- Your wins: ${humanWins} Computer Wins: ${computerWins} -----\n`);
  },

  resetScores() {
    this.round = 1;
    this.winner = null;
    this.human = createHuman();
    this.computer = createComputer();
  },

  maxScore() {
    let humanWins = this.human.wins;
    let computerWins = this.computer.wins;
    let winScore = this.winningScore;
    return (humanWins === winScore || computerWins === winScore);
  },

  updateScores() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if (humanMove.beats.includes(computerMove.name)) {
      this.winner = 'human';
      this.human.wins += 1;
    } else if (computerMove.beats.includes(humanMove.name)) {
      this.winner = 'computer';
      this.computer.wins += 1;
    } else {
      this.winner = 'tie';
    }

    this.round += 1;
  },

  displayRoundWinner() {
    console.clear();
    let humanMove = this.human.move.name;
    let computerMove = this.computer.move.name;
    let winner = this.winner;

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
    let humanWins = this.human.wins;
    let computerWins = this.computer.wins;

    console.log(`\n Your wins: ${humanWins} Computer Wins: ${computerWins}\n`);
    this.winner = humanWins > computerWins ? 'human' : 'computer';
    let grandWinner = this.winner;
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
    let answer;

    while (true) {
      console.log('\nWould you like to play again? (y/n)');
      answer = readline.question().toLowerCase();
      if (['y', 'n', 'yes', 'no'].includes(answer)) break;
      console.log('Sorry, invalid choice.');
    }

    return answer[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();

    while (true) {
      while (true) {
        this.displayRoundScore();
        this.human.choose();
        this.computer.choose();
        this.updateScores();
        this.displayRoundWinner();
        if (this.maxScore()) break;
      }

      this.displayGrandWinnerScore();
      this.resetScores();
      if (!this.playAgain()) break;
      console.clear();
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();