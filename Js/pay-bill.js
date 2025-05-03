// Transfer money button clicked and it will take you a add money interface.
document.getElementById('pay-bill-card').addEventListener('click', function() {
    window.location.href = '../pay-bill.html';
    // prevent page reload after form submit
    event.preventDefault();
})