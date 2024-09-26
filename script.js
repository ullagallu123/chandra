// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simple login check (replace with your logic)
    if (username === "admin" && password === "password123") {
        errorMessage.style.color = "green";
        errorMessage.textContent = "Login successful!";
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
});
