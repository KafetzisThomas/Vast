// Smooth scroll to section when clicking on navbar links & buttons
document.querySelectorAll('.scroll-btn').forEach(btn => {
    // Add event listener to each button
    btn.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Extract the id of the target section from the button's data attribute
        const targetId = this.getAttribute('data-target').substring(1);

        // Get the target section element by its id
        const targetSection = document.getElementById(targetId);

        // Define the height of the navbar (adjust if necessary)
        const navbarHeight = 30;

        // Calculate the offset from the top to scroll to, considering navbar height
        const offsetTop = targetSection.offsetTop - navbarHeight;

        // Scroll to the target section with smooth behavior
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});
