const coinsDisplay = document.getElementById("coinsDisplay");
const bottleIcon = document.getElementById("bottleIcon");
const bottleName = document.getElementById("bottleName");
const flipBtn = document.getElementById("flipBtn");
const buyBtn = document.getElementById("buyBtn");
const result = document.getElementById("result");

let coins = 0;
let currentBottleIndex = 0;

const bottles = [
  {
    name: "Basic",
    cost: 0,
    colorClass: "", // no neon
    chance: 0.5,
  },
  {
    name: "Neon Green",
    cost: 250,
    colorClass: "neon-green",
    chance: 0.7,
  },
  {
    name: "Neon Blue",
    cost: 500,
    colorClass: "neon-blue",
    chance: 0.9,
  },
  {
    name: "Rainbow Neon",
    cost: 2500,
    colorClass: "rainbow-neon",
    chance: 0.95,
  },
];

function updateDisplay() {
  coinsDisplay.textContent = `Coins: ${coins}`;
  bottleName.textContent = `Current Bottle: ${bottles[currentBottleIndex].name}`;

  // Remove all neon classes first
  bottleIcon.className = "";
  if (bottles[currentBottleIndex].colorClass) {
    bottleIcon.classList.add(bottles[currentBottleIndex].colorClass);
  }

  if (bottles[currentBottleIndex + 1]) {
    buyBtn.textContent = `Buy Next Bottle (${bottles[currentBottleIndex + 1].cost} coins)`;
    buyBtn.disabled = coins < bottles[currentBottleIndex + 1].cost;
  } else {
    buyBtn.textContent = "No More Bottles";
    buyBtn.disabled = true;
  }
}

flipBtn.addEventListener("click", () => {
  const bottle = bottles[currentBottleIndex];
  const landed = Math.random() < bottle.chance;

  if (landed) {
    coins += 50;
    result.textContent = "You landed the bottle! +50 coins 🎉";
  } else {
    result.textContent = "You missed! Try again!";
  }
  updateDisplay();
});

buyBtn.addEventListener("click", () => {
  if (
    bottles[currentBottleIndex + 1] &&
    coins >= bottles[currentBottleIndex + 1].cost
  ) {
    coins -= bottles[currentBottleIndex + 1].cost;
    currentBottleIndex++;
    result.textContent = `You bought the ${bottles[currentBottleIndex].name} bottle!`;
    updateDisplay();
  }
});

updateDisplay();
