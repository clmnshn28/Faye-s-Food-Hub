const registerBtn = document.getElementById("register-btn");
const loginBtn = document.getElementById("login-home-btn");

loginBtn.addEventListener("click", ()=>{
    window.location.href = "Home.html";
})

registerBtn.addEventListener('click', ()=>{
    window.location.href = "SignUp.html";
});

