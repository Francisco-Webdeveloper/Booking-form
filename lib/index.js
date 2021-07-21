// selecting elements
const counter = document.getElementById("counter");
const counterBtns = document.querySelectorAll(".incrementer");
const payBtn = document.getElementById("submit");
const priceInput = document.getElementById("price-input");


// convert string into number
const strToNum = (string) => {
  return Number.parseInt(string, 10);
};

const currentValue = strToNum(counter.dataset.count);

// update the counter of participants
const updateCounter = (value) => {
  if (value === 1) {
    counter.dataset.count = currentValue + 1
    counter.innerText = counter.dataset.count;
  } else if (value === -1 && currentValue > 1) {
    counter.dataset.count = currentValue - 1
    counter.innerText = counter.dataset.count;
  }
};

// set the pay button enable / disabled and update its amount
const updatePayBtn = () => {
  const price = currentValue * 150;
  payBtn.value = `Pay ${price}€`;
  if (currentValue < 2) {
    payBtn.classList.add("disabled");
  } else {
    payBtn.classList.remove("disabled");
  }
};
