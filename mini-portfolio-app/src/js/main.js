// This is the main JavaScript file that initializes the application and handles overall functionality.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio app initialized successfully!');
    
    // Add smooth reveal animations for sections
    addScrollAnimations();
    
    // Set initial active nav link
    setInitialActiveLink();
});

// Function to add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Set the first nav link as active on page load
function setInitialActiveLink() {
    const firstNavLink = document.querySelector('.nav-link');
    if (firstNavLink) {
        firstNavLink.classList.add('active');
    }
}

// Utility function for smooth scrolling (can be used by other modules)
window.smoothScrollTo = function(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        const navbar = document.getElementById('navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = target.offsetTop - navbarHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
};