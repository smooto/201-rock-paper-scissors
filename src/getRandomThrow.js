export default function getRandomThrow() {
    // first, generate a random number between 1 and 3
    const randomNumber = Math.ceil(Math.random() * 3);

    // then, triage into returning choice
    return (randomNumber === 1) ? 'rock'
        : (randomNumber === 2) ? 'paper'
        : 'scissors';
}