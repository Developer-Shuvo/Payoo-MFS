document.getElementById('button-login').addEventListener('click', function(event) {
    event.preventDefault(); //  Not for beginners


    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value; // Corrected to fetch from 'pin-number'
    console.log(phoneNumber, pinNumber);

    if (phoneNumber === '018' && pinNumber === '12345') {
        console.log('Your are Loge in')
    } else {
        alert('wrong Phone number or Pin number');
    }

})