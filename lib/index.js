// selecting elements
const counter = document.getElementById("counter");
const counterBtns = document.querySelectorAll(".incrementer");
const payBtn = document.getElementById("submit");
const priceInput = document.getElementById("price-input");

// convert string into number
const strToNum = (string) => {
  return Number.parseInt(string, 10);
};

