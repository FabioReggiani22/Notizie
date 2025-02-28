let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.notizia');
    const totalSlides = slides.length;
    
    // Calcolare il nuovo indice
    slideIndex = (slideIndex + step + totalSlides) % totalSlides;
    
    // Aggiornare la posizione del carosello
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
}
