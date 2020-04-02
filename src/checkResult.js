export default function checkResult(player, computer) {    
    let result = '';

    // draw:
    // player === computer
    if (player === computer) { result = 'draw'; }
    // player wins:
    // (rock, scissors) (paper, rock) (scissors, paper)
    if (player === 'rock' && computer === 'scissors') { result = 'win'; }
    if (player === 'paper' && computer === 'rock') { result = 'win'; }
    if (player === 'scissors' && computer === 'paper') { result = 'win'; }
    // player loses:
    // (rock, paper) (paper, scissors) (scissors, rock)
    if (player === 'rock' && computer === 'paper') { result = 'lose'; }
    if (player === 'paper' && computer === 'scissors') { result = 'lose'; }
    if (player === 'scissors' && computer === 'rock') { result = 'lose'; }

    return result;
}