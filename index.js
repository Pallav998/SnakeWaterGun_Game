let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");
const ruleContainer = document.querySelector("#rulesContainer");
const showRulesBtn = document.querySelector("#showRulesBtn");

const genCompChoice = () => {
  const options = ["snake", "water", "gun"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} kills ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} kills your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  // Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (
      (userChoice === "snake" && compChoice === "water") ||
      (userChoice === "water" && compChoice === "gun") ||
      (userChoice === "gun" && compChoice === "snake")
    ) {
      userWin = true;
    } else {
      userWin = false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

showRulesBtn.addEventListener("click", () => {
  // Toggle the display of rules container
  ruleContainer.style.display =
    ruleContainer.style.display === "none" ? "block" : "none";
});
