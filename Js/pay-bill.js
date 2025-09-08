// *** Pay Bill Card ***
document
  .getElementById("pay-bill-card")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // ask user pin
    const pin = prompt("Please enter your 4-digit PIN to continue:").trim();
    console.log(pin);

    // get saved pin from localStorage
    const savedPin = localStorage.getItem("userPin");

    if (pin === savedPin) {
      // redirect to pay-bill.html
      window.location.href = "../pay-bill.html";
    } else {
      alert("❌ Wrong PIN! Please enter the correct 4-digit PIN.");
    }
  });
