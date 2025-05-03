document.getElementById('btn-cash-out').addEventListener('click', function(event) {
    event.preventDefault();

    // agent number value 
    const agentNumber = document.getElementById('input-agent-number').value;
    console.log(agentNumber);

    // how much amount add   $$$$$   $$$$$$$
    const amount = document.getElementById('input-amount').value;
    console.log(amount);

    // pin number taken
    const pin = document.getElementById('input-pin-number').value;
    console.log(pin);

    // ______________________________________________________________________________

    // verify pin number

    if (pin === '1234') {
        console.log('Congratulations Your Cash out successfully Complete');
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