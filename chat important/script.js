function checkPassword() {
    var password = document.getElementById("password").value;

    // Type your password here (e.g., 'mySecurePassword')
    if (password === 'lucky') {
        window.location.href = "home.html";
    } else {
        alert("Incorrect password. Please try again.");
    }
}
