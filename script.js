// Select elements
let loginBtn = document.querySelector("nav a:last-child");
let popup = document.getElementById("loginPopup");
let closeBtn = document.getElementById("closePopup");
let submitBtn = document.getElementById("loginSubmit");

// Show popup when Login clicked
loginBtn.onclick = function () {
    popup.style.display = "flex";
};

// Close popup
closeBtn.onclick = function () {
    popup.style.display = "none";
};

// Close popup when clicking outside the box
window.onclick = function (event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
};

// SIMPLE VALIDATION
submitBtn.onclick = function () {

    let email = document.getElementById("emailInput").value;
    let pass = document.getElementById("passInput").value;

    // Check empty fields
    if (email === "" || pass === "") {
        alert("Please enter both email and password.");
        return;
    }

    // Basic email check
    if (email.indexOf("@") === -1) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check password length
    if (pass.length < 5) {
        alert("Password must be at least 5 characters.");
        return;
    }

    // SUCCESS message
    alert("Login Successful!");

    // Close popup after success
    popup.style.display = "none";
};


