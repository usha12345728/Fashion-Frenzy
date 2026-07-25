// ===============================
// Fashion Frenzy Boutique
// script.js
// ===============================

// Navbar Shadow

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ===============================
// Fade Animation
// ===============================

const cards = document.querySelectorAll(

".category-card,.product-card,.why-card,.testimonial-card"

);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

});

cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition=".6s";

    observer.observe(card);

});

// ===============================
// Newsletter
// ===============================

const form = document.querySelector(".newsletter-form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you for subscribing!");

form.reset();

});

}

// ===============================
// Back To Top Button
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";

topBtn.style.right="25px";

topBtn.style.bottom="100px";

topBtn.style.width="50px";

topBtn.style.height="50px";

topBtn.style.borderRadius="50%";

topBtn.style.border="none";

topBtn.style.background="#d4af37";

topBtn.style.color="#fff";

topBtn.style.cursor="pointer";

topBtn.style.display="none";

topBtn.style.fontSize="20px";

topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===============================
// End
// ===============================