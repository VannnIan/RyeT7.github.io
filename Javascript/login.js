function validate() {
    let input_email = document.getElementById("email");
    let input_password = document.getElementById("password");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    emailError.textContent = "";
    passwordError.textContent = "";

    let valid = true;

    if (input_email.value === "") {
        emailError.textContent = "Email is required.";
        valid = false;
    } else if (input_email.value.length <= 5) {
        emailError.textContent = "Email must be more than 5 characters.";
        valid = false;
    } else if (!input_email.value.endsWith("@gmail.com")) {
        emailError.textContent = "Email must end with @gmail.com.";
        valid = false;
    }

    if (input_password.value === "") {
        passwordError.textContent = "Password is required.";
        valid = false;
    } else if (input_password.value.length <= 5) {
        passwordError.textContent = "Password must be more than 5 characters.";
        valid = false;
    } else if (!isAlphaNum(input_password.value)) {
        passwordError.textContent = "Password must be alphanumeric.";
        valid = false;
    }

    return valid;
}

function isAlphaNum(element) {
    for (let i = 0; i < element.length; i++) {
        if ((element[i] >= 'a' && element[i] <= 'z') || 
            (element[i] >= 'A' && element[i] <= 'Z') || 
            (element[i] >= '0' && element[i] <= '9')) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}
