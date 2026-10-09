// =============================
// Mobile Menu
// =============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    if(navLinks.style.display === "flex"){

        navLinks.style.display = "none";

    }else{

        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "75px";
        navLinks.style.right = "20px";
        navLinks.style.background = "#ffffff";
        navLinks.style.padding = "20px";
        navLinks.style.borderRadius = "10px";
        navLinks.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";

    }

});

// =============================
// Sticky Navbar Shadow
// =============================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 8px 25px rgba(0,0,0,.15)";

}

else{

header.style.boxShadow="0 2px 15px rgba(0,0,0,.08)";

}

});

// =============================
// Smooth Scroll
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// =============================
// Contact Form
// =============================

const form=document.querySelector("form");

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank You! Your message has been submitted successfully.");

form.reset();

});