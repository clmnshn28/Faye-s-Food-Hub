// password requirements
const passwordInput = document.getElementById("password"); 
const lengthRequirement = document.getElementById("lengthRequirement");
const caseRequirement = document.getElementById("caseRequirement");
const specialRequirement = document.getElementById("specialRequirement");

passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;

    const isLengthValid = password.length >= 8 && password.length <= 100;
    const isCaseValid = /[A-Z]/.test(password) && /[a-z]/.test(password);
    const isSpecialValid = /\d/.test(password) || /[!@#$%^&*(),.?":{}|<>]/.test(password);

    updateRequirement(lengthRequirement, isLengthValid);
    updateRequirement(caseRequirement, isCaseValid);
    updateRequirement(specialRequirement, isSpecialValid);
});

function updateRequirement(element, isValid) {
    const text = element.textContent.trim().slice(1); // remove existing icon sa HTML 
    element.innerHTML = isValid
        ? `<span class="check">&#10004;</span> ${text}`
        : `<span class="wrong">&#10005;</span> ${text}`;
}


// register button
const registerBtn = document.getElementsByClassName("SignUp__home-button")[0];


registerBtn.addEventListener("click", ()=>{
    window.location.href = "login.html";
})