// Toggle navigation menu on hamburger click
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Modal functionality
const joinBtn = document.getElementById('joinBtn');
const subscriptionModal = document.getElementById('subscriptionModal');
const closeBtn = document.getElementById('closeBtn');

joinBtn.addEventListener('click', (e) => {
    e.preventDefault();
    subscriptionModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    subscriptionModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === subscriptionModal) {
        subscriptionModal.style.display = 'none';
    }
});