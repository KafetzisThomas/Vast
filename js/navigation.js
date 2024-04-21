// Smooth scroll to section when clicking on navbar links & buttons
document.querySelectorAll('.scroll-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('data-target').substring(1);
        const targetSection = document.getElementById(targetId);
        const navbarHeight = 100;
        const offsetTop = targetSection.offsetTop - navbarHeight;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});
