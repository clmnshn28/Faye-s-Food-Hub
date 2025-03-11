
// use neto is for reusable component sa vanilla codes (ex: Header.html, Footer.html) if ever ma uuse AHAHAHA

function includeHTMl(){

    const elements = document.querySelectorAll('[data-include]');

    elements.forEach( async el =>{
        const file = el.getAttribute("data-include");

        try {
            const res = await fetch(file);
            const content =  await res.text();
            el.innerHTML = content;

        } catch (error) {
            el.innerHTML = "<!-- Failed to load file -->"
        }
    })
} 


window.addEventListener("DOMContentLoaded", includeHTMl)