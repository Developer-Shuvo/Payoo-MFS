// Transactions card clicked and it will take you a add money interface.
document.getElementById('transfer-money-card').addEventListener('click', function() {
    window.location.href = '../transfer-money.html';
    // prevent page reload after form submit
    event.preventDefault();
})