// Elements
const adviceNum = document.getElementById("advice-number");
const adviceQuote = document.getElementById("quote");
const rollDice = document.querySelector("button");

// Get JSON data
async function loadAdviceSlip() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  if (data) {
    let randomNum = data.slip.id;
    let randomQuote = data.slip.advice;

    adviceNum.textContent = randomNum;
    adviceQuote.textContent = `"${randomQuote}"`;
  }
}

// Event listener(s)
rollDice.addEventListener("click", loadAdviceSlip);
