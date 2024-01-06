
// Funktion um über Button auf das Karusell zu gelangen
document.querySelector('.startButton').addEventListener('click', function () {
    window.location.href = 'karussell.html';
})


// Funktion rotation Kopf
function startSlideshow(sliderId) {
    const slider = document.getElementById(kopfReel);
    const images = slider.querySelectorAll('.kopf');
    let current = 0;

    function nextImage() {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
    }

    setInterval(nextImage, 3000); // Wechselt alle 3 Sekunden (3000 Millisekunden)
}

// Funktion rotation Körper
function startSlideshow(sliderId) {
    const slider = document.getElementById(koerperReel);
    const images = slider.querySelectorAll('.koerper');
    let current = 0;

    function nextImage() {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
    }

    setInterval(nextImage, 3000); // Wechselt alle 3 Sekunden (3000 Millisekunden)
}

// Funktion rotation Beine
function startSlideshow(sliderId) {
    const slider = document.getElementById(beineReel);
    const images = slider.querySelectorAll('.beine');
    let current = 0;

    function nextImage() {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
    }

    setInterval(nextImage, 3000); // Wechselt alle 3 Sekunden (3000 Millisekunden)
}


// ESP Knopf start rotation
function handleTouch12() {
    startSlideshow('kopfReel');
    startSlideshow('koerperReel');
    startSlideshow('beineReel')
}
// Starte die Slideshow für jeden Slider
startSlideshow('kopfReel');
