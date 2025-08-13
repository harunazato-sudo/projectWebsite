// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Course card hover effect
const courseCards = document.querySelectorAll('.course-card');
courseCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Feature hover effect
const features = document.querySelectorAll('.feature');
features.forEach(feature => {
    feature.addEventListener('mouseenter', () => {
        feature.style.transform = 'translateY(-5px)';
    });
    feature.addEventListener('mouseleave', () => {
        feature.style.transform = 'translateY(0)';
    });
});

// Add animation classes on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.course-card, .feature');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Form handling for login/signup
const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');

loginBtn.addEventListener('click', () => {
    // Add login modal logic here
    console.log('Login button clicked');
});

signupBtn.addEventListener('click', () => {
    // Add signup modal logic here
    console.log('Signup button clicked');
});
