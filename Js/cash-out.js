document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // agent number value
    const agentNumber = document
      .getElementById("input-agent-number")
      .value.trim();
    console.log(agentNumber);

    // amount value
    const amount = document.getElementById("input-amount").value.trim();
    console.log(amount);

    // pin number taken
    const pin = document.getElementById("input-pin-number").value.trim();
    console.log(pin);

    // Get saved pin from localStorage (যেটা লগইন এর সময় সেভ হয়েছিলো)
    const savedPin = localStorage.getItem("userPin");

    // Verify PIN
    if (pin === savedPin) {
      console.log("✅ Congratulations! Cash out successfully completed.");

      // get the current balance
      const balance = document.getElementById("balance").innerText;
      console.log(balance);

      // subtract cashOut input from balance
      const amountNumber = parseFloat(amount);
      const balanceNumber = parseFloat(balance);

      // Check if enough balance
      if (amountNumber > balanceNumber) {
        alert("❌ Insufficient balance!");
        return;
      }

      const newBalance = balanceNumber - amountNumber;
      console.log(newBalance);

      // update balance
      document.getElementById("balance").innerText = newBalance;
      alert("✅ Cash Out successful!");
    } else {
      alert("❌ Wrong PIN! Please enter the correct 4-digit PIN.");
    }
  });
