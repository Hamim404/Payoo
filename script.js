document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 1742075959;
  const pinNumber = 5959;
  const inputNumber = document.getElementById("mobile-number").value;
  const convertedNumber = parseInt(inputNumber);
  const inputPin = document.getElementById("pin-number").value;
  const convertedPin = parseInt(inputPin);

  if (pinNumber === convertedPin && mobileNumber === convertedNumber) {
    window.location.href = "./home.html";
  } else {
    alert("Invalid Credentials...");
  }
});
