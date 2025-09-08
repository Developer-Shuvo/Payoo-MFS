document
  .getElementById("btn-transfer-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // user account number
    const userAccountNumber = document
      .getElementById("input-account-number")
      .value.trim();
    console.log(userAccountNumber);

    // transfer amount
    const amount = document.getElementById("input-amount").value.trim();
    console.log(amount);

    // pin
    const pin = document.getElementById("input-pin").value.trim();
    console.log(pin);

    // get saved pin from localStorage
    const savedPin = localStorage.getItem("userPin");

    if (pin === savedPin) {
      // get current balance (remove $ sign if exists)
      let balanceText = document
        .getElementById("balance")
        .innerText.replace("$", "")
        .trim();
      let balanceNumber = parseFloat(balanceText);

      let amountNumber = parseFloat(amount);

      if (isNaN(balanceNumber) || isNaN(amountNumber)) {
        alert("❌ Invalid amount or balance!");
        return;
      }

      // check balance
      if (amountNumber > balanceNumber) {
        alert("❌ Insufficient balance!");
        return;
      }

      // update balance
      let newBalance = balanceNumber - amountNumber;
      document.getElementById("balance").innerText = newBalance + "$";

      alert("✅ Money transferred successfully!");
    } else {
      alert("❌ Wrong PIN! Please enter the correct 4-digit PIN.");
    }
  });
