document.getElementById('button-login').addEventListener('click', function(event) {
    event.preventDefault(); //  Not for beginners


    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value; // Corrected to fetch from 'pin-number'
    console.log(phoneNumber, pinNumber);

    if (phoneNumber === '01817422784' && pinNumber === 'Password@7188') {
        console.log('Your are Loge in');

        window.location.href = '../home.html'; // Home page Connect with js file

    } else {
        alert('wrong Phone number or Pin number');
    }

})