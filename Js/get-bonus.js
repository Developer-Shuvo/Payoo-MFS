document.getElementById("btn-get-bonus").addEventListener("click", function (event) {
    event.preventDefault();

    // Coupon input value
    const coupon = document.getElementById("input-bonus-coupon").value.trim();
    console.log("Entered Coupon:", coupon);

    // Example: Valid coupon codes
    const validCoupons = {
        "BONUS100": 100,
        "BONUS200": 200,
        "WELCOME500": 500,
    };

    // Check if coupon is valid
    if (validCoupons[coupon]) {
        // get balance (remove $ sign if exists)
        let balanceText = document.getElementById("balance").innerText.replace("$", "").trim();
        let balanceNumber = parseFloat(balanceText);

        // update balance
        let newBalance = balanceNumber + validCoupons[coupon];
        document.getElementById("balance").innerText = newBalance + "$";

        alert(`✅ Congratulations! You got ${validCoupons[coupon]}$ bonus!`);
    } else {
        alert("❌ Invalid coupon code! Please try again.");
    }

    // clear input
    document.getElementById("input-bonus-coupon").value = "";
});
