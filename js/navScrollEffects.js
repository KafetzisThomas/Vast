// Update active class on navbar links when scrolling
window.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.nav-link');
    let scrollPosition = window.innerHeight / 2; // Adjust this value to change when the underline effect starts

    sections.forEach((section, index) => {
        let top = section.offsetTop;
        let height = section.offsetHeight;
        if (window.scrollY + scrollPosition >= top && window.scrollY < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            navLinks[index].classList.add('active');
        }
    });
});
