import checkResult from '../src/checkResult.js';

const test = QUnit.test;

// test draw cases

test('draw: rock, rock', function(assert) {
    const player = 'rock';
    const computer = 'rock';

    const outcome = checkResult(player, computer);    

    assert.equal(outcome, 'draw');
});

test('draw: paper, paper', function(assert) {
    const player = 'paper';
    const computer = 'paper';

    const outcome = checkResult(player, computer);    

    assert.equal(outcome, 'draw');
});

test('draw: scissors, scissors', function(assert) {
    const player = 'scissors';
    const computer = 'scissors';

    const outcome = checkResult(player, computer);    

    assert.equal(outcome, 'draw');
});

// test win cases

test('win: rock, scissors', function(assert) {
    const player = 'rock';
    const computer = 'scissors';

    const outcome = checkResult(player, computer);    

    assert.equal(outcome, 'win');
});

test('win: paper, rock', function(assert) {
    const player = 'paper';
    const computer = 'rock';

    const outcome = checkResult(player, computer);    

    assert.equal(outcome, 'win');
});

test('win: scissors, paper', function(assert) {
    const player = 'scissors';
    const computer = 'paper';

    const outcome = checkResult(player, computer);    

    assert.equal(outcome, 'win');
});

// test lose cases

test('lose: rock, paper', function(assert) {
    const player = 'rock';
    const computer = 'paper';

    const outcome = checkResult(player, computer);    

    assert.equal(outcome, 'lose');
});

test('lose: paper, scissors', function(assert) {
    const player = 'paper';
    const computer = 'scissors';

    const outcome = checkResult(player, computer);    

    assert.equal(outcome, 'lose');
});

test('lose: scissors, rock', function(assert) {
    const player = 'scissors';
    const computer = 'rock';

    const outcome = checkResult(player, computer);    

    assert.equal(outcome, 'lose');
});