// JavaScript code can go here

// Example: Log a message when the webpage loads
window.onload = function() {
    console.log("Welcome to Discover Telangana!");
};
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector('.slides');
    let isPaused = false;

    slides.addEventListener('mouseover', function() {
        isPaused = true;
    });

    slides.addEventListener('mouseout', function() {
        isPaused = false;
    });

    setInterval(function() {
        if (!isPaused) {
            const firstSlide = slides.firstElementChild;
            slides.appendChild(firstSlide);
            slides.style.transition = "none";
            slides.style.transform = "translateX(0)";
            setTimeout(function() {
                slides.style.transition = "transform 1s ease";
            }, 0);
        }
    }, 3000);
});
