// Update active class on navbar links when scrolling

// Listen for the scroll event on the window
window.addEventListener('scroll', function () {
    // Get all the sections on the page
    let sections = document.querySelectorAll('section');
    // Get all the navigation links
    let navLinks = document.querySelectorAll('.nav-link');
    // Determine the scroll position where the active effect should trigger
    let scrollPosition = window.innerHeight / 2; // Adjust this value to change when the underline effect starts

    // Loop through each section
    sections.forEach((section, index) => {
        // Get the top position of the current section
        let top = section.offsetTop;
        // Get the height of the current section
        let height = section.offsetHeight;
        // Check if the window's scroll position is within the current section
        if (window.scrollY + scrollPosition >= top && window.scrollY < top + height) {
            // Remove the 'active' class from all navigation links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Add the 'active' class to the corresponding navigation link
            navLinks[index].classList.add('active');
        }
    });
});
