//password validation

const validatePass = (password, password_two) => {
     // Check if the password is at least 8 characters long
    if (password !== password_two){
        return "Passwords do not match"
    }

    if(password.length < 8){
        return "Password must be at least 8 characters long"
    }

    if (!/[A-Z]/.test(password)) {
        return "Password should contain at least one uppercase letter.";
    }

      // Check if the password contains at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return "Password should contain at least one lowercase letter.";
    }

      // Check if the password contains at least one digit
    if (!/\d/.test(password)) {
        return "Password should contain at least one digit.";
    }

      // Check if the password contains at least one special character
    if (!/[!@#$%^&*]/.test(password)) {
        return "Password should contain at least one special character (!@#$%^&*).";
    }

    return "Password valid";
}

export default validatePass