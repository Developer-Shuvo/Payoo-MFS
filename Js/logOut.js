// logout.js
document
  .getElementById("logout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // localStorage থেকে ডাটা remove করা
    localStorage.removeItem("userPhone");
    localStorage.removeItem("userPin");

    alert("You have been logged out successfully!");

    // login পেইজে পাঠানো
    window.location.href = "index.html";
  });
