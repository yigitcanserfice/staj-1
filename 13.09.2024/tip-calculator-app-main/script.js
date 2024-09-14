const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const tipButtons = document.querySelectorAll(".tip-button");
const customTipInput = document.getElementById("customTip");
const tipAmountDisplay = document.getElementById("tipAmount");
const totalAmountDisplay = document.getElementById("totalAmount");
const resetButton = document.getElementById("reset");
const peopleContainer = document.getElementById("people-container");
const zeroError = document.getElementById("zero-error");

let tipPercentage = 0;

// Handle Tip Button Clicks and Change Active State
tipButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (button !== customTipInput) {
      tipButtons.forEach(btn => btn.classList.remove("active")); // Remove active class from all buttons
      button.classList.add("active"); // Add active class to the clicked button
      tipPercentage = parseFloat(button.dataset.value);
      customTipInput.value = ""; // Clear custom input value
      calculateTip();
    }
  });
});

// Custom Tip Input (Direct Input)
customTipInput.addEventListener("input", () => {
  tipButtons.forEach(btn => btn.classList.remove("active")); // Remove active class from all buttons
  tipPercentage = parseFloat(customTipInput.value) || 0;
  calculateTip();
});

// Inputs for Bill and People
billInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input", calculateTip);

function calculateTip() {
  const bill = parseFloat(billInput.value);
  const people = parseInt(peopleInput.value);

  if (!people || people <= 0) {
    peopleContainer.classList.add("error");
    return;
  } else {
    peopleContainer.classList.remove("error");
  }

  if (!bill || bill <= 0) {
    // Bill input hatası gösterme
    return;
  }

  const tipAmount = (bill * (tipPercentage / 100)) / people;
  const totalAmount = (bill / people) + tipAmount;

  tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
  totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
}

// Reset button functionality
resetButton.addEventListener("click", () => {
  billInput.value = "";
  peopleInput.value = "";
  customTipInput.value = "";
  tipAmountDisplay.textContent = "$0.00";
  totalAmountDisplay.textContent = "$0.00";
  tipButtons.forEach(btn => btn.classList.remove("active"));
  peopleContainer.classList.remove("error");
});
