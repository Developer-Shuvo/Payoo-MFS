// Cash out button clicked and it will take you a add money interface.
document.getElementById('cash-out-card').addEventListener('click', function() {
    window.location.href = '../cash-out.html';
    // prevent page reload after form submit
    event.preventDefault();
})