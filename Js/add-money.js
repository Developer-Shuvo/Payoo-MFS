// Add money page work + add money button work here              <-----------------

// / step: 1 Add money to the account
document.getElementById('btn-add-money').addEventListener('click', function() {
    event.preventDefault();

    // get value form the input field
    const selectBank = document.getElementById('input-select-bank').value;
    console.log(selectBank);

})