// Add money button clicked and it will take you a add money interface.
document.getElementById('add-money-card').addEventListener('click', function() {
    window.location.href = '../addMoney.html';
    // prevent page reload after form submit
    event.preventDefault();
})