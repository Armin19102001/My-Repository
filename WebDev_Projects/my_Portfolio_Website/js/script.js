// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};




// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

//scroll reveal 

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, contact-form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'}); 



//typed js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Freelancer', 'Gamer' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 200;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 100);
        }
    };
    updateCounter();
});


function hideText() {

    const btn = document.querySelector('#btn');
    const infoHide = document.querySelector('.main-text');

    infoHide.style.display = "block"
    btn.style.display = 'none';
}


function myFunction() {
    const form = document.getElementById("form");
    const thanks = document.getElementById("thanks");
    const heading = document.getElementById("heading");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name == "") {
        swal(
        "Opps..!", 
        "Full name field has no value!", 
        "error"
        );
    } else if (email == "") {
        swal(
            "Opps..!", 
            "Email Address field has no value!", 
            "error"
        );
    } else if (message == "") {
        swal(
            "Opps..!", 
            "Your Message is missing!", 
            "error"
        );
    } else {
        swal(
            "Thanks for contacting us!",
            "We will reply ASAP", 
            "success"
        );
        setTimeout(() => {
            form.style.display = "none";
            heading.style.display = "none";
        }, 2000);

        setTimeout(() => {
            thanks.style.display = "block";
        }, 2000);
        
    }
    
    
    
    
    
     
}
