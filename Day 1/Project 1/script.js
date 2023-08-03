function validateForm() {
    var isValid = true;
    var Email = document.getElementById("Email").value;
    var Password = document.getElementById("Password").value;

    if (Email === "" || Password === "") {
        alert("Please fill in all fields.");
        isValid = false;
        return false;
    }

    else if (!isValidEmail(Email)) {
        alert("Please enter proper email ID.");
        isValid = false;
        return false;
    }


    alert("Sign-in successful!");
    return true;
}


function isValidEmail(Email) {
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return EmailRegex.test(Email);
  }