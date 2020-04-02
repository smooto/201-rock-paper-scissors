// --- import functions
import getRandomThrow from './src/getRandomThrow.js';
import checkResult from './src/checkResult.js';

// --- get elements from DOM

// results section to toggle visibility

const sectionResults = document.getElementById('results');

// computer image to toggle src/visibility

const computerImage = document.getElementById('computer-choice');

// text sections to change

const textWinLose = document.getElementById('win-lose');
const textTally = document.getElementById('tally');

// buttons

const buttonSubmit = document.getElementById('submit');
const buttonReset = document.getElementById('reset');

// --- initialize states

// set default message to player
const defaultTally = `Choose an option, then click submit!`;
textTally.textContent = defaultTally;

const defaultWinLose = ``;
textWinLose.textContent = defaultWinLose;

// set counters
let numberOfRounds = 0;
let numberOfWins = 0;
let numberOfLosses = 0;
let numberOfDraws = 0;

// --- function soup

function getPlayerChoice() {    
    // get selected radio button
    const selected = document.querySelector('input[type=radio]:checked');

    // set value of choice to appropriate string
    const playerChoice = selected.id; // 'rock', 'paper', 'scissors'
    return playerChoice;
}

function updateStates(outcome) {
    // increment number of game rounds
    numberOfRounds++;

    // increment counters based on outcome
    if (outcome === 'draw') { numberOfDraws++; }
    if (outcome === 'win') { numberOfWins++; }
    if (outcome === 'lose') { numberOfLosses++; }
}

function writeText(outcome) {
    // update tally text
    textTally.textContent = `You've played ${numberOfRounds} rounds, and won ${numberOfWins} times. You've also lost ${numberOfLosses} times, and drawn ${numberOfDraws} times.`;

    // write win/lose state
    if (outcome === 'draw') {
        textWinLose.textContent = `It's a draw!`;
    } else {
        textWinLose.textContent = `You ${outcome} this round!`;
    }
}

function changeImage(choice) {
    if (choice === 'rock') { computerImage.src = './assets/images/rock.png'; }
    if (choice === 'paper') { computerImage.src = './assets/images/paper.png'; }
    if (choice === 'scissors') { computerImage.src = './assets/images/scissors.png'; }
}

const runGame = () => {
    // get player and computer choices
    const playerChoice = getPlayerChoice();
    const computerChoice = getRandomThrow();

    // set and unhide computer throw image based on computer choice
    changeImage(computerChoice);
    computerImage.style.visibility = 'visible';

    // determine outcome of the round
    const outcome = checkResult(playerChoice, computerChoice);
    // update counters to reflect outcome
    updateStates(outcome);

    // update text content to reflect outcome
    writeText(outcome);

    // unhide results section
    sectionResults.style.visibility = 'visible';
};

const resetGame = () => {
    // clear states
    textTally.textContent = defaultTally;
    textWinLose.textContent = defaultWinLose;
    numberOfRounds = 0;
    numberOfDraws = 0;
    numberOfWins = 0;
    numberOfLosses = 0;

    // hide results and computer throw image
    sectionResults.style.visibility = 'hidden';
    computerImage.style.visibility = 'hidden';
};

buttonSubmit.addEventListener('click', runGame);
buttonReset.addEventListener('click', resetGame);

// potential upgrades:
// show "submit" button only if a radio is selected