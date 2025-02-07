const colorBox = document.getElementById("color-box");
const colorButtonsContainer = document.getElementById(
  "color-buttons-container"
);
const messageDisplay = document.getElementById("message");
const scoreDisplay = document.getElementById("score");
const newGameButtonHomepage = document.getElementById("new-game-homepage");

const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");

let targetColor;
let score = 0;

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function setNewGame() {
  messageDisplay.textContent = "";
  colorButtonsContainer.innerHTML = "";

  const colors = [];
  for (let i = 0; i < 6; i++) {
    const randomColor = generateRandomColor();
    colors.push(randomColor);
  }

  targetColor = colors[Math.floor(Math.random() * colors.length)];
  colorBox.style.backgroundColor = targetColor;

  colors.forEach((color) => {
    const button = document.createElement("button");
    button.classList.add("color-button");
    button.style.backgroundColor = color;
    button.addEventListener("click", () => checkGuess(color));
    colorButtonsContainer.appendChild(button);
  });
}

function checkGuess(color) {
  if (color === targetColor) {
    messageDisplay.textContent = "Correct!";
    score++;
    scoreDisplay.textContent = `Score: ${score}`;

    // Play correct sound
    correctSound.play();

    // Delay starting a new game so the "Correct!" message can be seen
    setTimeout(() => {
      setNewGame();
    }, 1000); // 1 second delay before starting a new round
  } else {
    messageDisplay.textContent = "Wrong guess! Try again.";

    // Play wrong sound
    wrongSound.play();
  }
}

function startGame() {
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
  setNewGame();
}

function goBackToHome() {
  window.location.href = "homepage.html";
}

newGameButtonHomepage.addEventListener("click", startGame);

window.onload = startGame;
