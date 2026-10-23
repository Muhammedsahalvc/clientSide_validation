
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;

    // Validate name
    if (name === "" || !/^[A-Za-z ]+$/.test(name)) {
        alert("Please enter a valid name using letters and spaces only.");
        return false;
    }

    // Validate email
    if (email === "" ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate mobile number
    if (!/^\d{10}$/.test(mobile)) {
        alert("Mobile number must contain exactly 10 digits.");
        return false;
    }

    // Validate username
    if (username === "") {
        alert("Username cannot be empty.");
        return false;
    }

    // Validate password
    let passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S{8,}$/;

    if (!passwordPattern.test(password)) {
        alert("Password must have at least 8 characters, including uppercase, lowercase, a digit, and a special character.");
        return false;
    }

    alert("Registration successful!");
    return false;
}
