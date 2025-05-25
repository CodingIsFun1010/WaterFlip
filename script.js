let coins = 0;
let bottle = document.getElementById("bottle");
let flipBtn = document.getElementById("flipBtn");
let coinsDisplay = document.getElementById("coins");
let resultDisplay = document.getElementById("result");

let bottleType = {
  type: "default",
  chance: 0.5, // 50%
};

flipBtn.addEventListener("click", () => {
  bottle.style.transform = "rotateX(360deg)";
  setTimeout(() => {
    bottle.style.transform = "rotateX(0deg)";
  }, 600);

  const landed = Math.random() < bottleType.chance;

  if (landed) {
    resultDisplay.textContent = "Landed! +50 coins!";
    coins += 50;
  } else {
    resultDisplay.textContent = "Missed!";
  }
  coinsDisplay.textContent = coins;
});

// Upgrade Bottles
document.getElementById("buyGreen").addEventListener("click", () => {
  if (coins >= 250) {
    coins -= 250;
    bottle.className = "bottle green";
    bottleType = {
      type: "green",
      chance: 0.7, // 70%
    };
    coinsDisplay.textContent = coins;
    resultDisplay.textContent = "Upgraded to Green Bottle!";
  } else {
    resultDisplay.textContent = "Not enough coins!";
  }
});

document.getElementById("buyNeon").addEventListener("click", () => {
  if (coins >= 500) {
    coins -= 500;
    bottle.className = "bottle neon";
    bottleType = {
      type: "neon",
      chance: 0.9, // 90%
    };
    coinsDisplay.textContent = coins;
    resultDisplay.textContent = "Upgraded to Neon Blue Bottle!";
  } else {
    resultDisplay.textContent = "Not enough coins!";
  }
});
