// Navigation hamburger menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks?.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navLinks?.classList.remove('active');
        });
    });

    // Smooth scroll functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Add scroll animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections and skill cards
    document.querySelectorAll('section, .skill-card').forEach(el => {
        observer.observe(el);
    });
});

// Form validation for contact page
const validateForm = () => {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = form.querySelector('#name')?.value;
        const email = form.querySelector('#email')?.value;
        const message = form.querySelector('#message')?.value;
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, message });
        form.reset();
        alert('Thank you for your message! I will get back to you soon.');
    });
};

const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Initialize form validation
validateForm();