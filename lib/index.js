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

// set the pay button enable / disabled and update its amount
const updatePayBtn = () => {
  const currentValue = strToNum(counter.dataset.count);
  const price = currentValue * 150;
  payBtn.value = `Pay ${price}€`;
  if (currentValue < 2) {
    payBtn.classList.add("disabled");
  } else {
    payBtn.classList.remove("disabled");
  }
};

// update price input to show the amount in cents
const updatePriceInput = () => {
  const currentValue = strToNum(counter.dataset.count);
  priceInput.value = currentValue * 150 * 100;
};

// set behavior for the counter buttons
counterBtns.forEach((button) => {
  const offset = Number.parseInt(button.dataset.offset, 10);
  button.addEventListener("click", (event) => {
    event.preventDefault();
    updateCounter(offset);
    updatePayBtn();
    updatePriceInput();
  });
});
