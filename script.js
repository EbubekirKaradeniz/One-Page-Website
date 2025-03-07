// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll event listener for navbar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        nav.style.backgroundColor = '#fff';
        nav.style.boxShadow = 'none';
    }
});

// Add animation to class cards on scroll
const classCards = document.querySelectorAll('.class-card');
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

classCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

// Add animation to trainer cards on scroll
const trainerCards = document.querySelectorAll('.trainer-card');
trainerCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.9)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

// Add animation to membership cards on scroll
const membershipCards = document.querySelectorAll('.membership-card');
membershipCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

// Handle class booking buttons
const classButtons = document.querySelectorAll('.class-button');
classButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Please log in or create an account to book classes.');
    });
});

// Handle membership buttons
const membershipButtons = document.querySelectorAll('.membership-button');
membershipButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Please contact our staff to set up your membership.');
    });
}); 