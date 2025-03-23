const viewRecipesBtn = document.getElementById("view-recipes-btn");
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");

// login 
loginBtn.addEventListener('click', ()=>{
    window.location.href = "pages/login.html";
});

// signup
signupBtn.addEventListener('click', ()=>{
    window.location.href = "pages/signup.html";
});

// view recipe
viewRecipesBtn.addEventListener('click', ()=>{
    window.location.href = "pages/login.html";
});