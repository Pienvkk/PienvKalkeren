// Hamburger-menu functionaliteit
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

// Voeg een klik-event toe aan het hamburger-icoon
if (hamburger) {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}
// Carousel functionaliteit
let currentSlide = 0; // De huidige actieve slide
const slides = document.querySelectorAll('.carousel img'); // Alle afbeeldingen in de carousel
const totalSlides = slides.length; // Totaal aantal slides

// Functie om de carousel te verplaatsen
function moveSlide(step) {
    // Update de huidige slide-index
    currentSlide += step;

    // Zorg ervoor dat de index niet buiten de grenzen komt
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Ga naar de laatste afbeelding
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Ga terug naar de eerste afbeelding
    }

    updateCarousel(); // Update de carousel
}

// Functie om de carouselpositie bij te werken
function updateCarousel() {
    const carousel = document.querySelector('.carousel'); // Carousel-container
    const slideWidth = slides[0].offsetWidth; // Breedte van de eerste afbeelding, gebruik hetzelfde voor alle afbeeldingen

    // Bereken de nieuwe verschuiving per afbeelding
    carousel.style.transition = "transform 0.5s ease-in-out"; // Vloeiende overgang
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`; // Beweeg de carousel naar de juiste slide
}

// Event listeners voor de navigatieknoppen
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => moveSlide(-1));
    nextButton.addEventListener('click', () => moveSlide(1));
}

// Zorg ervoor dat de carousel goed werkt bij venstergrootte wijzigingen
window.addEventListener('resize', updateCarousel);

// Zorg ervoor dat de carousel goed werkt bij het laden van de pagina
window.addEventListener('load', updateCarousel);



if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "jouw-email@example.com";
    $subject = "Nieuw bericht van contactformulier";
    $body = "Naam: $name\nE-mail: $email\nBericht: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo = "Bericht succesvol verstuurd!";
    } else {
        echo = "Er is iets misgegaan bij het versturen van je bericht.";
    }
}



