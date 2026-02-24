let username = document.getElementById("loginUsername");
let password = document.getElementById("loginPassword");

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    if (localStorage.getItem("username") === username.value && localStorage.getItem("password") === password.value) {
        document.getElementById("loginError").textContent = "Login successful! Redirecting to welcome page...";
        // window.location.href = "welcome.html";
    } else {
        document.getElementById("loginError").textContent = "Invalid username or password.";
    }
});