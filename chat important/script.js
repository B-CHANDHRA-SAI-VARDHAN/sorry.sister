function checkPassword() {
    var password = document.getElementById("password").value;

    // Type your password here (e.g., 'mySecurePassword')
    if (password === '7341926851') {
        window.location.href = "home.html";
    } else {
        alert("Incorrect password. Please try again.");
    }
}
