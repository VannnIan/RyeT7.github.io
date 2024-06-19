function validate() {
    let input_email = document.getElementById("email");
    let input_password = document.getElementById("password");
    let input_confirm_password = document.getElementById("confirm_password");

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");

    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

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
    } else if (!isAlphaNum(input_password.value)) {
        passwordError.textContent = "Password must be alphanumeric.";
        valid = false;
    }

    if (input_confirm_password.value === "") {
        confirmPasswordError.textContent = "Confirmation Password is required.";
        valid = false;
    } else if (input_confirm_password.value !== input_password.value) {
        confirmPasswordError.textContent = "Password and Confirmation Password mismatch.";
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