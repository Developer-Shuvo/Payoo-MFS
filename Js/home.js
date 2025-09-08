// Add money button clicked → Go to add-money.html
document
  .getElementById("add-money-card")
  .addEventListener("click", function () {
    window.location.href = "./addMoney.html"; // 
  });

// Cash out button clicked → Go to cash-out.html
document.getElementById("cash-out-card").addEventListener("click", function () {
  window.location.href = "./cash-out.html";
});

// Transfer money button clicked → Go to transfer-money.html
document
  .getElementById("transfer-money-card")
  .addEventListener("click", function () {
    window.location.href = "./transfer-money.html";
  });

// Get bonus button clicked → Go to get-bonus.html
document
  .getElementById("get-bonus-card")
  .addEventListener("click", function () {
    window.location.href = "./get-bonus.html";
  });

// Pay bill button clicked → Go to pay-bill.html
document.getElementById("pay-bill-card").addEventListener("click", function () {
  window.location.href = "./pay-bill.html";
});

// Transaction history button clicked → Go to transaction-history.html
document
  .getElementById("transactions-card")
  .addEventListener("click", function () {
    window.location.href = "./transaction-history.html";
  });
