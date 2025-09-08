// / step: 1 Add money to the account
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    // Get Input Values
    const selectBank = document.getElementById('input-select-bank').value.trim();
    const accountNumber = document.getElementById('input-account-number').value.trim();
    const amount = document.getElementById('input-amount').value.trim();
    const pin = document.getElementById('input-pin').value.trim();

    // Get saved PIN from localStorage (যেটা লগইন এর সময় সেভ হয়েছিলো)
    const savedPin = localStorage.getItem("userPin");

    // Validation
    if (selectBank === "" || accountNumber === "" || amount === "" || pin === "") {
        alert("Please fill all fields!");
        return;
    }

    if (pin === savedPin) {
        // Get the current balance
        const balanceElement = document.getElementById('account-balance');
        const balance = parseFloat(balanceElement.innerText);

        // Update balance
        const addMoneyNumber = parseFloat(amount);
        const newBalance = balance + addMoneyNumber;

        balanceElement.innerText = newBalance;
        alert("✅ Money added successfully!");
    } else {
        alert("❌ Wrong PIN! Please enter the correct 4-digit PIN.");
    }
});
