// ANIMACIÓN DEL TÍTULO
document.addEventListener("DOMContentLoaded", () => {
    const options = {
        strings: [
            "White Cat Games"
        ],  // Frases que se animarán
        typeSpeed: 50,          // Velocidad al escribir
        backSpeed: 100,         // Velocidad al borrar
        loop: true,             // Ciclo infinito de frases
        backDelay: 2000,        // Tiempo antes de empezar a borrar
        startDelay: 1000,       // Tiempo antes de empezar la animación
    };

    // Inicializa el código
    const typed = new Typed(".typed", options);
});