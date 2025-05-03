// Add money page work + add money button work here              <-----------------

// / step: 1 Add money to the account
document.getElementById('btn-add-money').addEventListener('click', function() {
    event.preventDefault();

    // get Bank Name from the input field
    const selectBank = document.getElementById('input-select-bank').value;
    console.log(selectBank);






    //get Bank account number from the input field
    const accountNumber = document.getElementById('input-account-number').value;
    console.log(accountNumber);
    // function checkAccountNumber() {
    //     const accountNumber = document.getElementById('input-account-number').value.trim();

    //     // Check if input is exactly 11 digits (all numbers)
    //     const isValid = /^\d{11}$/.test(accountNumber);

    //     if (!isValid) {
    //         alert('Please enter a valid 11-digit bank account number.');
    //     } else {
    //         alert('Account number accepted!');
    //         // You can proceed with form submission or other logic here
    //     }
    // }

    // Call the checkAccountNumber function
    // checkAccountNumber();








    // get amount to add from the input field
    const amount = document.getElementById('input-amount').value;
    console.log(amount);

    // get pin number from the input field
    const pin = document.getElementById('input-pin').value;



    // verify pin number

    if (pin === '1234') {
        console.log('pin number is correct and you can add money now');
        // get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        // add addMoney input with balance
        const addMoneyNumber = parseFloat(amount);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        // update balance
        document.getElementById('account-balance').innerText = newBalance;

    } else {
        alert('Something wrong !\nEnter Correct information');
    }



});