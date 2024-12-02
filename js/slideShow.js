// SLIDER 1
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide-1');
    const carouselContenedor = document.querySelector('.carousel-contenedor-1');
    const prevBtn = document.querySelector('.carousel-btn.prev-1');
    const nextBtn = document.querySelector('.carousel-btn.next-1');
    
    let index = 0; // Índice actual del slide

    function actualizarCarousel() {
        // Calcula el desplazamiento en función del índice
        const offset = -index * slides[0].clientWidth;
        carouselContenedor.style.transform = `translateX(${offset}px)`;
    }

    nextBtn.addEventListener('click', function () {
        if (index < slides.length - 1) {
            index++;
        } 
        else {
            index = 0; // Volver al inicio
        }
        actualizarCarousel();
    });

    prevBtn.addEventListener('click', function () {
        if (index > 0) {
            index--;
        } 
        else {
            index = slides.length - 1; // Ir al último slide
        }
        actualizarCarousel();
    });
});


// SLIDER 2
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide-2');
    const carouselContenedor = document.querySelector('.carousel-contenedor-2');
    const prevBtn = document.querySelector('.carousel-btn.prev-2');
    const nextBtn = document.querySelector('.carousel-btn.next-2');
    
    let index = 0; // Índice actual del slide

    function actualizarCarousel() {
        // Calcula el desplazamiento en función del índice
        const offset = -index * slides[0].clientWidth;
        carouselContenedor.style.transform = `translateX(${offset}px)`;
    }

    nextBtn.addEventListener('click', function () {
        if (index < slides.length - 1) {
            index++;
        } 
        else {
            index = 0; // Volver al inicio
        }
        actualizarCarousel();
    });

    prevBtn.addEventListener('click', function () {
        if (index > 0) {
            index--;
        } 
        else {
            index = slides.length - 1; // Ir al último slide
        }
        actualizarCarousel();
    });
});

