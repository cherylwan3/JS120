/* eslint-disable max-lines-per-function */
/**
 * STEP 1: Write a textual description of the problem or exercise.
 *  - RPS is a 2-player game where each player chooses 1 of 3 possible moves:
 *    - rock, paper, or scissors.
 *  - The winner is chosen by comparing their moves with the following rules:
 *    - rock beats scissors
 *    - scissors beats paper
 *    - paper beats rock
 *    - if players chose same move, game is a tie
 *
 * STEP 2: Extract the significant nouns and verbs from the description.
 * Nouns: player, move, rule
 * Verbs: choose, compare
 *
 * STEP 3: Organize and associate the verbs with the nouns.
 * Player
 * - choose
 * Move
 * Rule
 * ???
 * - compare
 * */

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
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObj, humanObj);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${humanMove}`);
    console.log(`The computer chose: ${computerMove}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
                 (humanMove === 'paper' && computerMove === 'scissors') ||
                 (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie");
    }
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();