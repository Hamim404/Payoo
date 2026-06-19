// To get Input Value
function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}
// To get Input Value to Number
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
}

// To get Inner Text Number
function getInnerTextNumber(id) {
  const element = document.getElementById(id);
  const elementInnerText = element.innerText;
  const elementInnerTextNumber = parseInt(elementInnerText);
  return elementInnerTextNumber;
}
// To set Inner Text
function setInnerText(value) {
  const balanceElement = document.getElementById("main-balance");
  balanceElement.innerText = value;
}
// All Section
const addSection = document.getElementById("add-money-section");
const cashoutSection = document.getElementById("cashout-section");

// Toggling Feature

// add-money
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    console.log("Add Clicked");
    addSection.style.display = "block";
    cashoutSection.style.display = "none";
  });

// withdraw-money
document.getElementById("cashout-btn").addEventListener("click", function (e) {
  console.log("Cashout Clicked");
  document
    .getElementById("add-money-btn")
    .classList.add(
      "text-sky-500",
      "border-sky-500",
      "border-solid",
      "border",
      "font-bold",
    );
  cashoutSection.style.display = "block";
  addSection.style.display = "none";
});

// Add Money Function
document.getElementById("add-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const pin = 5959;
  const pinNumber = getInputValueNumber("pin-number");
  const bankNumber = getInputValue("bank-number");
  const amount = getInputValueNumber("amount-number");
  let balance = getInnerTextNumber("main-balance");
  if (bankNumber.length < 11) {
    alert("Invalid Bank Number!");
    return;
  }
  if (pin !== pinNumber) {
    alert("Invalid Pin Number!");
    return;
  }

  balance = balance + amount;
  setInnerText(balance);
});

// Withdraw Money Function
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const pin = 5959;
  const pinNumber = getInputValueNumber("withdraw-pin-number");
  const agentNumber = getInputValue("agent-number");
  const amount = getInputValueNumber("withdraw-amount-number");

  let balance = getInnerTextNumber("main-balance");
  if (agentNumber.length < 11) {
    alert("Invalid Agent Number!");
    return;
  }
  if (pin !== pinNumber) {
    alert("Invalid Pin Number!");
    return;
  }

  balance = balance - amount;
  setInnerText(balance);
});
