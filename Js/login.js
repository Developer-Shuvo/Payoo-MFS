document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("phone-number").value.trim();
    const pinNumber = document.getElementById("pin-number").value.trim();

    console.log(phoneNumber, pinNumber);

    // Regular Expression for Bangladeshi phone number: 11 digits only
    const phonePattern = /^01[0-9]{9}$/; // Starts with 01 and total 11 digits

    // Regular Expression for PIN: exactly 4 digits
    const pinPattern = /^[0-9]{4}$/;

    // Validation check
    if (!phonePattern.test(phoneNumber)) {
      alert("Please enter a valid 11-digit Bangladeshi phone number.");
      return;
    }

    if (!pinPattern.test(pinNumber)) {
      alert("Please enter a valid 4-digit PIN.");
      return;
    }

    // প্রথমবার লগইন হলে phone & pin localStorage এ সেভ করা হবে
    const savedPhone = localStorage.getItem("userPhone");
    const savedPin = localStorage.getItem("userPin");

    if (!savedPhone && !savedPin) {
      // যদি প্রথমবার হয় → ডাটা সেভ করো
      localStorage.setItem("userPhone", phoneNumber);
      localStorage.setItem("userPin", pinNumber);
      alert("Account created successfully! Now you are logged in.");
      window.location.href = "home.html";
    } else {
      // যদি আগের ডাটা থাকে → সেটার সাথে মিলাও
      if (phoneNumber === savedPhone && pinNumber === savedPin) {
        console.log("You are successfully logged in!");
        window.location.href = "home.html";
      } else {
        alert("Phone number or PIN does not match. Try again!");
      }
    }
  });
