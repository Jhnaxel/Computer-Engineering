const fadeInLogosOnScroll = () => {
    const logo = document.querySelector('.overlay-logo');
    const logo1 = document.querySelector('.overlay-logo1');
    const logo2 = document.querySelector('.overlay-logo2');
    const scrollY = window.scrollY;

    logo.style.opacity = (scrollY >= 200) ? '1' : '0';
    logo1.style.opacity = (scrollY >= 600) ? '1' : '0';
    logo2.style.opacity = (scrollY >= 1000) ? '1' : '0';
};

const fadeInImagesOnScroll = () => {
    const images = document.querySelectorAll('.image-section');
    const scrollY = window.scrollY;

    images.forEach((img, index) => {
        img.style.opacity = (scrollY > (index + 1) * (window.innerHeight / (images.length + 1))) ? '1' : '0';
    });
};

window.addEventListener('scroll', () => {
    fadeInLogosOnScroll();
    fadeInImagesOnScroll();
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex - 1].classList.add("active");
}

document.getElementById("character-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.body.classList.add("transitioning");
    setTimeout(function() {
        window.location.href = "character.html";
    }, 500);
});


document.addEventListener("DOMContentLoaded", function () {
    
    const loadingScreen = document.getElementById('loading-screen');

    
    setTimeout(function () {
        window.location.href = "Home.html"; 
    }, 4500); 
});
