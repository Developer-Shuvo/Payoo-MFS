// Pay Bill card clicked → redirect to pay-bill.html
document.getElementById('pay-bill-card').addEventListener('click', function (event) {
    event.preventDefault(); // reload আটকানো হলো

    // user login pin localStorage থেকে নাও
    const savedPin = localStorage.getItem("userPin");

    // এখন pin চাইবে
    const enteredPin = prompt("Please enter your 4-digit PIN to continue:");

    if (enteredPin === savedPin) {
        // সঠিক হলে redirect
        window.location.href = '../pay-bill.html';
    } else {
        alert("❌ Wrong PIN! Access denied.");
    }
});
