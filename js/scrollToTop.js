// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Function to toggle scroll-to-top button visibility based on scroll position
function toggleScrollToTopButton() {
    var scrollToTopButton = document.getElementById('scrollToTopButton');
    if (window.scrollY > 300) {  // Adjust 300 to your preferred threshold
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
}

// Add event listener to scroll-to-top button visibility on scroll
window.addEventListener('scroll', toggleScrollToTopButton);

toggleScrollToTopButton();
