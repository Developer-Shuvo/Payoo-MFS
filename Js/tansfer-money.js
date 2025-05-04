// // Transactions card clicked and it will take you a add money interface.
// document.getElementById('transfer-money-card').addEventListener('click', function(event) {
//     window.location.href = '../transfer-money.html';
//     // prevent page reload after form submit
//     event.preventDefault();
// })


// _______________________________________________________________________________________
document.getElementById('btn-transfer-money').addEventListener('click', function(event) {
    event.preventDefault();


    // user account number value 
    const userAccountNumber = document.getElementById('input-account-number').value;
    console.log(userAccountNumber);

    // how much amount add   $$$$$   $$$$$$$
    const amount = document.getElementById('input-amount').value;
    console.log(amount);

    // pin number taken
    const pin = document.getElementById('input-pin').value;
    console.log(pin);

    // ______________________________________________________________________________

    // verify pin number

    if (pin === '1234') {
        console.log('Congratulations Your Transfer Money successfully Complete');
        // get the current balance
        const balance = document.getElementById('balance').innerText;
        console.log(balance);

        // subtract cashOut input from balance
        const amountNumber = parseFloat(amount);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - amountNumber;
        console.log(newBalance);

        // update balance
        document.getElementById('balance').innerText = newBalance;

    } else {
        alert('Something wrong !\nEnter Correct information');
    }


});