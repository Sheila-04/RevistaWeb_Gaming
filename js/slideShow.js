// SLIDER
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide'); // Todas las imagenes
    const carouselContenedor = document.querySelector('.carousel-contenedor');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
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

    // Hacer que el carrusel pase automáticamente cada 5 segundos
    Intervalo(() => {
        nextBtn.click();
    }, 5000);
});
