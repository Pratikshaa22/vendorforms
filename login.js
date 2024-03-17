function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("All fields are required");
        return;
    }

    // Perform login functionality here
}
