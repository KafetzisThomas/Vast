// Select the spinner wrapper element from the DOM
const spinnerWrapperE1 = document.querySelector('.spinner-wrapper');

// Add an event listener for when the window has finished loading
window.addEventListener('load', () => {
    // Fade out the spinner wrapper
    spinnerWrapperE1.style.opacity = '0';

    // After a delay of 1 second, hide the spinner wrapper
    setTimeout(() => {
        spinnerWrapperE1.style.display = 'none';  // Change display property to 'none'
    }, 1000);  // 1000 milliseconds = 1 second
});
