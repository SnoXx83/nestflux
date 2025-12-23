

// Display messages in the dedicated UI element
export function displayMessage(message, type = "error") {

    // Find the message container in the HTML
    const errorDisplay = document.getElementById('error-message');

    // Stop if the element doesn't exist on the current page
    if (!errorDisplay) return;

    // Set the text content
    errorDisplay.textContent = message;

    if(type=== "success"){
        // Green
        errorDisplay.style.color= "#46d369"; 
    }else{
        // Red
        errorDisplay.style.color= "#e50914";
    }
    
}

// Initialize video trailers on movie cards
export function initMovieCards() {

    // Select all elements with the class 'film-card'
    const allCards = document.querySelectorAll('.film-card');


    allCards.forEach(card => {

        // Find the video element inside each card
        const vdo = card.querySelector('.trailer');

        // Play the video when the mouse enters the card
        card.addEventListener('mouseenter', () => {

            // .catch is used because browsers often block auto-play
            if (vdo) vdo.play().catch(e => console.log("Playback blocked"));
        });

        // Pause and reset the video when the mouse leaves the card
        card.addEventListener('mouseleave', () => {
            if (vdo) {
                vdo.pause();

                // Reset to the beginning
                vdo.currentTime = 0;
            }
        });
    });
}