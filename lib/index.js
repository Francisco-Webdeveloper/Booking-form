// selecting elements
const counter = document.getElementById("counter");
const counterBtns = document.querySelectorAll(".incrementer");
const payBtn = document.getElementById("submit");
const priceInput = document.getElementById("price-input");

// convert string into number
const strToNum = (string) => {
  return Number.parseInt(string, 10);
};

// update the counter of participants
const updateCounter = (value) => {
  const currentValue = strToNum(counter.dataset.count);
  if (value === 1) {
    counter.dataset.count = currentValue + 1
    counter.innerText = counter.dataset.count;
  } else if (value === -1 && currentValue > 1) {
    counter.dataset.count = currentValue - 1
    counter.innerText = counter.dataset.count;
  }
};
