// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-active');
    });
}

// RSVP Notification
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('rsvp-form');
    const toast = document.getElementById('toast');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Show toast
            toast.textContent = "Thank you! Your RSVP has been received. We can’t wait to see you!";
            toast.classList.add('show');

            // Hide after 3 seconds
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);

            // Clear form
            form.reset();
        });
    }
});


let slideIndex = 0;
showSlides(slideIndex);

// Next/Prev controls
document.addEventListener("DOMContentLoaded", () => {

    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const dots = document.querySelectorAll(".dot");

    if (prev && next && dots.length > 0) {
        prev.addEventListener("click", () => {
            showSlides(slideIndex -= 1);
        });

        next.addEventListener("click", () => {
            showSlides(slideIndex += 1);
        });

        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                showSlides(slideIndex = index);
            });
        });
    }
});

function showSlides(n) {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    if (slides.length === 0) return;

    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}

