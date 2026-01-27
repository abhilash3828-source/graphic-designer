// ===============================
// Mobile Navigation Toggle
// ===============================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===============================
// Navbar Scroll Effect
// ===============================
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
});

// ===============================
// Active Nav Link Highlighting
// ===============================
function highlightActiveLink() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// ===============================
// Portfolio Filter Functionality
// ===============================
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        // Filter portfolio items
        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');
            
            if (filterValue === 'all' || category === filterValue) {
                item.classList.remove('hidden');
                item.style.animation = 'none';
                setTimeout(() => {
                    item.style.animation = 'fadeIn 0.6s ease-out';
                }, 10);
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// ===============================
// Contact Form Validation
// ===============================
const contactForm = document.getElementById('contactForm');

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm() {
    let isValid = true;
    const inputs = contactForm.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        const errorMessage = input.parentElement.querySelector('.error-message');
        
        if (input.value.trim() === '') {
            errorMessage.textContent = `${input.placeholder} is required`;
            errorMessage.classList.add('show');
            isValid = false;
        } else if (input.id === 'email' && !validateEmail(input.value)) {
            errorMessage.textContent = 'Please enter a valid email address';
            errorMessage.classList.add('show');
            isValid = false;
        } else {
            errorMessage.classList.remove('show');
        }
    });

    return isValid;
}

// Real-time validation as user types
contactForm.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('blur', () => {
        const errorMessage = input.parentElement.querySelector('.error-message');
        
        if (input.value.trim() === '') {
            errorMessage.textContent = `${input.placeholder} is required`;
            errorMessage.classList.add('show');
        } else if (input.id === 'email' && !validateEmail(input.value)) {
            errorMessage.textContent = 'Please enter a valid email address';
            errorMessage.classList.add('show');
        } else {
            errorMessage.classList.remove('show');
        }
    });
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm()) {
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Here you would typically send this data to a server
        // For now, we'll just show a success message
        console.log('Form submitted:', data);
        
        // Show success message
        const submitBtn = contactForm.querySelector('.submit-button');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
        }, 3000);

        // Optional: Clear error messages
        contactForm.querySelectorAll('.error-message').forEach(msg => {
            msg.classList.remove('show');
        });
    }
});

// ===============================
// Intersection Observer for Animations
// ===============================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe portfolio items and other animated elements
document.querySelectorAll('.portfolio-item, .stat, .about-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ===============================
// Scroll to Top Button
// ===============================
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1.5rem;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 999;
        box-shadow: var(--shadow-lg);
        transition: all 0.3s ease-out;
    `;

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.display = 'flex';
        } else {
            button.style.display = 'none';
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
}

createScrollToTopButton();

// ===============================
// Lazy Loading Images
// ===============================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===============================
// Performance: Debounce for scroll events
// ===============================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(highlightActiveLink, 100));

// ===============================
// Mobile-Specific Optimizations
// ===============================
const isMobileDevice = () => {
    return (typeof window.orientation !== 'undefined') || 
           (navigator.userAgent.indexOf('IEMobile') !== -1) ||
           (navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|Windows Phone/i));
};

// Disable animations on low-end mobile devices
if (isMobileDevice()) {
    // Reduce animation duration on mobile
    document.documentElement.style.setProperty('--transition', 'all 0.15s ease-out');
    
    // Optimize portfolio hover effects for touch devices
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach(card => {
        card.addEventListener('touchstart', function(e) {
            portfolioCards.forEach(c => c.classList.remove('touch-active'));
            this.classList.add('touch-active');
        });
    });
}

// Handle viewport resize for responsive behavior
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recalculate on resize if needed
        highlightActiveLink();
    }, 250);
});

// ===============================
// Accessibility: Focus styles
// ===============================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ===============================
// Initialize on Page Load
// ===============================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    highlightActiveLink();
    
    // Add subtle page load animation
    document.body.style.opacity = '1';
    
    // Improve form input handling on mobile
    if (isMobileDevice()) {
        const inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
        inputs.forEach(input => {
            // Prevent zoom on input focus on iOS
            input.addEventListener('focus', function() {
                this.style.fontSize = '16px';
            });
        });
    }
});

// Prevent layout shift by setting initial opacity
document.body.style.opacity = '0';
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.transition = 'opacity 0.3s ease-out';
    document.body.style.opacity = '1';
});
