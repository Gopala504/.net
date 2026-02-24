let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email");

document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    if (localStorage.getItem("username") === username.value) {
        document.getElementById("error").textContent = "Username already exists. Please choose a different username.";
    } else {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
        localStorage.setItem("email", email.value);
        document.getElementById("error").textContent = "Signup successful! Redirecting to login page...";
        window.location.href = "login.html";
    }
    

});
