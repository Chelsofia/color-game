const colorBox = document.getElementById("color-box");
const colorButtonsContainer = document.getElementById(
  "color-buttons-container"
);
const messageDisplay = document.getElementById("message");
const scoreDisplay = document.getElementById("score");
const newGameButtonHomepage = document.getElementById("new-game-homepage");

let targetColor;
let score = 0;

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function setNewGame() {
  // Reset message display and clear previous buttons
  messageDisplay.textContent = "";
  colorButtonsContainer.innerHTML = "";

  // Generate new random colors for the game
  const colors = [];
  for (let i = 0; i < 6; i++) {
    const randomColor = generateRandomColor();
    colors.push(randomColor);
  }

  targetColor = colors[Math.floor(Math.random() * colors.length)];
  colorBox.style.backgroundColor = targetColor;

  // Add color buttons to the container
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
    score++; // Increment score on correct guess
    scoreDisplay.textContent = `Score: ${score}`;
    setNewGame(); // Set a new round after correct guess
  } else {
    messageDisplay.textContent = "Wrong guess! Try again.";
  }
}

function startGame() {
  score = 0; // Reset the score when starting a new game
  scoreDisplay.textContent = `Score: ${score}`;
  setNewGame(); // Start the first round
}

function goBackToHome() {
  window.location.href = "homepage.html"; // Redirect back to the homepage
}

newGameButtonHomepage.addEventListener("click", startGame);

// Start the game when the page loads
window.onload = startGame;
