// Select all navigation links
const navLinks = document.querySelectorAll("nav a");

// Add scroll event listener to the window
window.addEventListener("scroll", () => {
    // Loop through each section
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute("href"));
        if (
            section.offsetTop <= window.scrollY + 60 &&
            section.offsetTop + section.offsetHeight > window.scrollY + 60
        ) {
            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove("active"));
            // Add 'active' class to the current link
            link.classList.add("active");
        }
    });
});

const typingText = document.getElementById("typing-text");

const phrases = ["I'm a YouTuber", "I'm a Web Developer"];
let phraseIndex = 0;
let currentText = "";
let typingSpeed = 150; // Speed of typing
let deletingSpeed = 100; // Speed of deleting
let pauseBetween = 2000; // Pause before deleting

function typeAndDelete() {
    function type() {
        if (currentText.length < phrases[phraseIndex].length) {
            currentText += phrases[phraseIndex].charAt(currentText.length);
            typingText.innerText = currentText;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(deleteText, pauseBetween); // Wait before deleting
        }
    }

    function deleteText() {
        if (currentText.length > 0) {
            currentText = currentText.slice(0, -1);
            typingText.innerText = currentText;
            setTimeout(deleteText, deletingSpeed);
        } else {
            phraseIndex = (phraseIndex + 1) % phrases.length; // Switch to next phrase
            setTimeout(type, 500); // Start typing again after deletion
        }
    }

    // Start typing
    type();
}

// Start the typing and deleting effect when the page loads
window.onload = typeAndDelete;
