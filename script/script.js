const choices = ['Bulbasaur', 'Charmander', 'Squirtle'];

const choiceButtons = document.querySelectorAll('.choices button');
const playButton = document.getElementById('playButton');
const resultOverlay = document.getElementById('resultOverlay');
const closeOverlay = document.getElementById('closeOverlay');
const resultDisplay = document.getElementById('resultDisplay');

let playerChoice = null;

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    }

    if (
        (playerChoice === 'Charmander' && computerChoice === 'Bulbasaur') ||
        (playerChoice === 'Bulbasaur' && computerChoice === 'Squirtle') ||
        (playerChoice === 'Squirtle' && computerChoice === 'Charmander')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function playGame() {
    if (!playerChoice) {
        alert('Please make a choice first!');
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const winner = getWinner(playerChoice, computerChoice);

    resultDisplay.innerHTML = `
        <p>You chose: ${playerChoice}</p>
        <p>Computer chose: ${computerChoice}</p>
        <p>${winner}</p>
    `;
    resultOverlay.style.display = 'flex';
}

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        choiceButtons.forEach(btn => btn.classList.remove('selected'));

        button.classList.add('selected');

        playerChoice = button.getAttribute('data-choice');
    });
});

playButton.addEventListener('click', playGame);


closeOverlay.addEventListener('click', () => {
    resultOverlay.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === resultOverlay) {
        resultOverlay.style.display = 'none';
    }
});