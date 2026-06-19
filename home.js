// All Section
const addSection = document.getElementById("add-money-section");
const cashoutSection = document.getElementById("cashout-section");


// Toggling Feature

// Add Money Function
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    console.log("Add Clicked");
    addSection.style.display = "block";
    cashoutSection.style.display = "none";
    document
      .getElementById("add-money-btn")
      .classList.add("text-sky-500", "border-sky-500","border-solid","border", "font-bold");
  });

document.getElementById("add-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const pin = 5959;
  const pinNumber = parseInt(document.getElementById("pin-number").value);
  const bankNumber = document.getElementById("bank-number").value;
  const amountNumber = document.getElementById("amount-number").value;
  const amount = parseInt(amountNumber);
  const mainBalance = document.getElementById("main-balance");
  let balance = parseInt(mainBalance.innerText);
  if (bankNumber.length < 11) {
    alert("Invalid Bank Number!");
    return;
  }
  if (pin !== pinNumber) {
    alert("Invalid Pin Number!");
    return;
  }

  balance = balance + amount;
  mainBalance.innerText = balance;
});

// Withdraw Money Function
document.getElementById("cashout-btn").addEventListener("click", function (e) {
  console.log("Cashout Clicked");
  cashoutSection.style.display = "block";
  addSection.style.display = "none";
});
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const pin = 5959;
  const pinNumber = parseInt(
    document.getElementById("withdraw-pin-number").value,
  );
  const agentNumber = document.getElementById("agent-number").value;
  const amountNumber = document.getElementById("withdraw-amount-number").value;
  const amount = parseInt(amountNumber);

  const mainBalance = document.getElementById("main-balance");
  let balance = parseInt(mainBalance.innerText);
  if (agentNumber.length < 11) {
    alert("Invalid Agent Number!");
    return;
  }
  if (pin !== pinNumber) {
    alert("Invalid Pin Number!");
    return;
  }

  balance = balance - amount;
  mainBalance.innerText = balance;
});
