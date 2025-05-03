document.addEventListener('DOMContentLoaded', function() {
    var scrollArrow = document.querySelector('.scroll-arrow');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) { 
            scrollArrow.classList.add('show');
        } else {
            scrollArrow.classList.remove('show');
        }
    });

    scrollArrow.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
 let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-image');

    function showSlide(index) {
        slides.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Inițializare
    showSlide(currentSlide);