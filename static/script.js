
function validateForm() {
    let valid = true;

    let name = document.forms["registrationForm"]["fname"].value.trim();
    let nameError = document.getElementById('nameError');
    if (name === "") {
        nameError.textContent = "Full Name must be filled out";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    let phone = document.forms["registrationForm"]["phone"].value.trim();
    let phoneError = document.getElementById('phoneError');
    const phonePattern = /^[0-9]{10}$/; 
    if (phone === "") {
        phoneError.textContent = "Phone number must be filled out";
        valid = false;
    } else if (!phonePattern.test(phone)) {
        phoneError.textContent = "Invalid phone number format it must be of 10 digits  ";
        valid = false;
    } else {
        phoneError.textContent = "";
    }

    let email = document.forms["registrationForm"]["email"].value.trim();
    let emailError = document.getElementById('emailError');
    if (email === "") {
        emailError.textContent = "Email must be filled out";
        valid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = "Invalid email format";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    let zip = document.forms["registrationForm"]["zip"].value.trim();
    let zipError = document.getElementById('zipError');
    const zipPattern = /^[1-9]{5,6}$/; 
    if (zip === "") {
        zipError.textContent = "Zip Code must be filled out";
        valid = false;
    } else if (!zipPattern.test(zip)) {
        zipError.textContent = "Invalid Zip Code format";
        valid = false;
    } else {
        zipError.textContent = "";
    }
    const password = document.getElementById('password').value;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@])[A-Za-z\d&$#@]{7,}$/;
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 7 characters long, include one uppercase letter, one digit, and one special character (&, $, #, @).';
        isValid = false;
    }

    
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }
    /*let password = document.forms["registrationForm"]["password"].value;
    let passwordError = document.getElementById('passwordError');
    if (password === "") {
        passwordError.textContent = "Password must be filled out";
        valid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    let confirmPassword = document.forms["registrationForm"]["confirmPassword"].value;
    let confirmPasswordError = document.getElementById('confirmPasswordError');
    if (confirmPassword === "") {
        confirmPasswordError.textContent = "Please confirm your password";
        valid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match";
        valid = false;
    } else {
        confirmPasswordError.textContent = "";
    }*/

    let state = document.forms["registrationForm"]["States"].value;
    let stateError = document.getElementById('stateError');
    if (state === "" || state === null) {
        stateError.textContent = "Please select your state";
        valid = false;
    } else {
        stateError.textContent = "";
    }

    return valid;
}
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById('email').addEventListener('input', function() {
    const email = this.value.trim();
    const emailError = document.getElementById('emailError');
    if (email === "") {
        emailError.textContent = "Email must be filled out";
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Invalid email format';
    } else {
        emailError.textContent = '';
    }
});

document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
    } else {
        passwordError.textContent = '';
    }
});

document.getElementById('confirmPassword').addEventListener('input', function() {
    const password = document.getElementById('password').value;
    const confirmPassword = this.value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (confirmPassword === "") {
        confirmPasswordError.textContent = "Please confirm your password";
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match";
    } else {
        confirmPasswordError.textContent = "";
    }
});

document.getElementById('States').addEventListener('change', function() {
    const state = this.value;
    const stateError = document.getElementById('stateError');
    if (state === "" || state === null) {
        stateError.textContent = "Please select your state";
    } else {
        stateError.textContent = "";
    }
});