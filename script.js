// Game data with all water bottles and their chances
const bottles = [
  {
    name: "Basic",
    cost: 0,
    chanceToLand: 0.5,  // 50/50
    color: "gray"
  },
  {
    name: "Neon Green",
    cost: 250,
    chanceToLand: 0.7,  // 70/30
    color: "lime"
  },
  {
    name: "Neon Blue",
    cost: 500,
    chanceToLand: 0.9,  // 90/10
    color: "deepskyblue"
  },
  {
    name: "Rainbow Neon",
    cost: 2500,
    chanceToLand: 0.95,  // 95/5
    color: "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)" // For visual you can use rainbow CSS or something else
  }
];

let coins = 0;
let currentBottleIndex = 0;

const coinsDisplay = document.getElementById("coins");
const bottleDisplay = document.getElementById("bottle");
const messageDisplay = document.getElementById("message");
const flipBtn = document.g
