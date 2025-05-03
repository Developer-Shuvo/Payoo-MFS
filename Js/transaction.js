// Transactions card clicked and it will take you a add money interface.
document.getElementById('transactions-card').addEventListener('click', function() {
    window.location.href = '../transaction-history.html';
    // prevent page reload after form submit
    event.preventDefault();
})