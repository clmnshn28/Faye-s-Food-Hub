const registerBtn = document.getElementsByClassName("Login__register-button")[0];
const loginBtn = document.getElementsByClassName("Login__home-button")[0];

if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        window.location.href = "Home.html";
    });
}

if (registerBtn) {
    registerBtn.addEventListener("click", () => {
        window.location.href = "SignUp.html";
    });
}



// password Toggle
const passwordInput = document.querySelector('input[type="password"]');
const eyeIcon = document.querySelector(".Login__eye-icon");

let isPasswordVisible = false;

eyeIcon.addEventListener("click",  () => {
    isPasswordVisible = !isPasswordVisible;

    if (isPasswordVisible) {
        // Show password
        passwordInput.type = "text";
        eyeIcon.src = "../assets/images/eye-open-icon.svg"; 
    } else {
        // Hide password
        passwordInput.type = "password";
        eyeIcon.src = "../assets/images/eye-close-icon.svg";
    }
});

