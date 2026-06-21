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
// Toggle Active Function
function btnActive(id) {
  const btns = document.getElementsByClassName("btns");
  for (const btn of btns) {
    btn.classList.remove("border-sky-500", "text-sky-500");
  }
  document.getElementById(id).classList.add("border-sky-500", "text-sky-500");
}
// All Section
const addSection = document.getElementById("add-money-section");
const cashoutSection = document.getElementById("cashout-section");
const transferMoneySection = document.getElementById("transfer-money-section");
const getBonusSection = document.getElementById("get-bonus-section");
const payBillSection = document.getElementById("pay-bill-section");
const transactionsSection = document.getElementById("transactions-section");

const transactionsForm = [];

// Toggling Feature
// add-money
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    const forms = document.getElementsByClassName("forms");
    for (const form of forms) {
      form.style.display = "none";
    }
    btnActive("add-money-btn");
    addSection.style.display = "block";
  });

//cashout-section
document.getElementById("cashout-btn").addEventListener("click", function (e) {
  const forms = document.getElementsByClassName("forms");
  for (const form of forms) {
    form.style.display = "none";
  }
  btnActive("cashout-btn");
  cashoutSection.style.display = "block";
});
// transfer-money-section
document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function (e) {
    const forms = document.getElementsByClassName("forms");
    for (const form of forms) {
      form.style.display = "none";
    }
    btnActive("transfer-money-btn");
    transferMoneySection.style.display = "block";
  });
// Get-Bonus
document
  .getElementById("get-bonus-btn")
  .addEventListener("click", function (e) {
    const forms = document.getElementsByClassName("forms");
    for (const form of forms) {
      form.style.display = "none";
    }
    btnActive("get-bonus-btn");
    getBonusSection.style.display = "block";
  });
// pay-bill
document.getElementById("pay-bill-btn").addEventListener("click", function (e) {
  const forms = document.getElementsByClassName("forms");
  for (const form of forms) {
    form.style.display = "none";
  }
  btnActive("pay-bill-btn");
  payBillSection.style.display = "block";
});
// transactions
document
  .getElementById("transactions-btn")
  .addEventListener("click", function (e) {
    const forms = document.getElementsByClassName("forms");
    for (const form of forms) {
      form.style.display = "none";
    }
    btnActive("transactions-btn");
    transactionsSection.style.display = "block";
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
  const data = {
    name: "Add Money",
    date: new Date().toLocaleTimeString(),
  };
  transactionsForm.push(data);
  console.log(transactionsForm);
});

// Cashout Function
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
  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };
  transactionsForm.push(data);
  console.log(transactionsForm);
});


// Transactions Function
