function fun() {

    // Get value AFTER button click
    let username = document.getElementById("name").value;

    // Store data only once (for demo purpose)
    localStorage.setItem("name", "sai");
    localStorage.setItem("email", "sai@gmail.com");

    let storedName = localStorage.getItem("name");
    let storedEmail = localStorage.getItem("email");

    if (storedName === username) {
        alert("Welcome back, " + username + "!");
    } else {
        alert("User not found!");
    }

    document.getElementById("Output").innerHTML = `
        <h3>User Information:</h3>
        <p>Name: ${storedName}</p>
        <p>Email: ${storedEmail}</p>
    `;
}

// localStorage.clear(); // Clear local storage for testing purposes
// localStorage.setItem("name", "sai");
// localStorage.getItem("name"); // Returns "sai"
// localStorage.removeItem("name");
// localStorage.getItem("name"); // Returns null



















