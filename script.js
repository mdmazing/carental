document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is working!");

    // Slideshow functionality
    const slides = document.querySelectorAll('#slideshow .slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 4000);

    // Smooth scrolling functionality
    const links = document.querySelectorAll('.header-center a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection observer for car cards
    const carCards = document.querySelectorAll('.car');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    carCards.forEach(card => {
        observer.observe(card);
    });

    // Book Now button functionality
    // Book Now button click event
    const bookNowButtons = document.querySelectorAll('.book-now');

    bookNowButtons.forEach(button => {
        button.addEventListener('click', function() {
            const btnGroup = this.parentElement;
            btnGroup.classList.toggle('active');
        });
    });

    // WhatsApp and Facebook button click events
    const whatsappButtons = document.querySelectorAll('.book-now-whatsapp');
    const facebookButtons = document.querySelectorAll('.book-now-facebook');
    const instagramButtons = document.querySelectorAll('.book-now-instagram');

    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = "https://wa.me/38970226632";
        });
    });

    facebookButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = "https://www.facebook.com/rentalmemo";
        });
    });
    instagramButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = "https://www.instagram.com/rentacarmemo/";
        });
    });
});