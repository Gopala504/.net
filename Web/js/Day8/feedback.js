document.addEventListener("DOMContentLoaded", function () {

    const submitBtn = document.getElementById("submit");
    const message = document.getElementById("message");
    const themeToggle = document.getElementById("themeToggle");

    /* =========================
       FEEDBACK FORM FUNCTION
    ==========================*/

    function validateForm() {

        const username = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const feedback = document.getElementById("feedback").value.trim();

        if (username === "" || email === "" || feedback === "") {
            message.textContent = "Please fill all the fields.";
            message.style.color = "red";
        } else {
            message.textContent = "Thank you for your feedback!";
            message.style.color = "green";
        }
    }

    submitBtn.addEventListener("click", validateForm);


    /* =========================
       THEME TOGGLE FUNCTION
    ==========================*/

    function setTheme(theme) {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }

    function toggleTheme() {
        const currentTheme = document.body.classList.contains("dark")
            ? "light"
            : "dark";
        setTheme(currentTheme);
    }

    // Load saved theme
    function loadTheme() {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
    }

    themeToggle.addEventListener("click", toggleTheme);

    loadTheme(); // Apply theme on page load

});