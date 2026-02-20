// This file manages the navigation functionality, including smooth scrolling and active link highlighting.

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navbar = document.getElementById("navbar");

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            
            // Close mobile menu if open
            if (navMenu.classList.contains("active")) {
                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");
            }
            
            // Scroll to section with offset for fixed navbar
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });
    });

    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            const isActive = navMenu.classList.toggle("active");
            menuToggle.classList.toggle("active");
            
            // Update ARIA attributes for accessibility
            menuToggle.setAttribute("aria-expanded", isActive);
            navMenu.setAttribute("aria-hidden", !isActive);
        });
    }

    // Highlight active link on scroll
    window.addEventListener("scroll", function() {
        let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const navbarHeight = navbar.offsetHeight;

        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(nav => nav.classList.remove("active"));
                link.classList.add("active");
            }
        });

        // Add shadow to navbar on scroll
        if (scrollPosition > 50) {
            navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
        } else {
            navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function(e) {
        if (!navbar.contains(e.target) && navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
            menuToggle.classList.remove("active");
        }
    });
});