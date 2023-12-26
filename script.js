var users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    // Add more user objects as needed
];

function validateLogin() {
    // Reset error message
    document.getElementById("loginError").innerHTML = "";

    // Get form values
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    // Validate login dynamically
    var isValidUser = users.some(function (user) {
        return user.username === username && user.password === password;
    });

    if (isValidUser) {
        alert("Login successful!");
    } else {
        document.getElementById("loginError").innerHTML = "Invalid username or password";
    }

    // Prevent form submission for demonstration purposes
    return false;
}


function validateRegister() {
    // Reset error messages
    document.getElementById("registerError").innerHTML = "";

    // Get form values
    var name = document.getElementById("regName").value;
    var rollNumber = document.getElementById("regRollNumber").value;
    var dob = document.getElementById("regDob").value;
    var gender = document.getElementById("regGender").value;
    var email = document.getElementById("regEmail").value;
    var password = document.getElementById("regPassword").value;
    var college = document.getElementById("regCollege").value;
    var department = document.getElementById("regDepartment").value;

    // Validate registration (you can replace this with your registration logic)
    if (password.length < 8) {
        document.getElementById("registerError").innerHTML = "Password must be at least 8 characters";
        return false;
    }

    // Additional validations based on your requirements

    alert("Registration successful!");
    // Prevent form submission for demonstration purposes
    window.location.href = "login.html";
    return false;
}

