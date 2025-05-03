// get bonus button clicked and it will take you a add money interface.
document.getElementById('get-bonus-card').addEventListener('click', function() {
    window.location.href = '../get-bonus.html';
    // prevent page reload after form submit
    event.preventDefault();
})