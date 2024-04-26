// Function to animate counting
function animateCount(element, target, duration) {
    let start = 0;
    const step = Math.ceil(target / (duration / 16)); // Update every 16ms (roughly 60fps)

    function updateCount() {
        start += step;
        element.textContent = start.toLocaleString(); // Format number with commas
        if (start < target) {
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = target.toLocaleString();
        }
    }

    updateCount();
}

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    const customerCount = document.getElementById('customerCount');
    const projectCount = document.getElementById('projectCount');
    const issueCount = document.getElementById('issueCount');

    if (isInViewport(customerCount) && !customerCount.classList.contains('animated-number')) {
        animateCount(customerCount, 632, 1500);
        customerCount.classList.add('animated-number');
    }

    if (isInViewport(projectCount) && !projectCount.classList.contains('animated-number')) {
        animateCount(projectCount, 104, 1500);
        projectCount.classList.add('animated-number');
    }

    if (isInViewport(issueCount) && !issueCount.classList.contains('animated-number')) {
        animateCount(issueCount, 1800, 1500);
        issueCount.classList.add('animated-number');
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Trigger scroll event handler once initially to check if elements are in viewport
handleScroll();
