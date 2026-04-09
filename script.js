// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const nav = document.querySelector('.nav');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        // Simple toggle for mobile (can be expanded with a real mobile menu)
        alert('Menu mobile clicado! (Funcionalidade de navegação pode ser expandida)');
    });
}

// Fade-in Animation on Scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.padding = '20px 0';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});
