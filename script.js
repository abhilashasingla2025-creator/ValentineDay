// Generate floating hearts
function createFloatingHearts() {
    const floatingHearts = document.getElementById('floatingHearts');
    const hearts = ['💕', '❤️', '💗', '💖', '💝'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
            heart.style.animationDelay = Math.random() * 2 + 's';
            floatingHearts.appendChild(heart);
            
            setTimeout(() => heart.remove(), 10000);
        }, i * 300);
    }
}

// Yes button clicked
function yesClicked() {
    const container = document.querySelector('.container');
    const successMessage = document.getElementById('successMessage');
    const buttonContainer = document.querySelector('.button-container');
    const celebration = document.getElementById('celebration');
    
    // Hide buttons
    buttonContainer.style.display = 'none';
    
    // Show success message
    successMessage.style.display = 'block';
    celebration.style.display = 'block';
    
    // Create confetti effect
    createConfetti();
    
    // Play some celebration hearts
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createFloatingHearts();
        }, i * 100);
    }
    
    // Little animation for the container
    container.style.animation = 'slideIn 0.6s ease-out';
}

// No button hover - makes it hard to click
function noHover() {
    const noBtn = document.getElementById('noBtn');
    const randomX = (Math.random() - 0.5) * 300;
    const randomY = (Math.random() - 0.5) * 300;
    
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    // If still managed to click it
    setTimeout(() => {
        if (Math.random() > 0.7) {
            showPopup();
        }
    }, 200);
}

// Show custom popup
function showPopup() {
    const modal = document.getElementById('popupModal');
    modal.classList.add('active');
}

// Close popup
function closePopup() {
    const modal = document.getElementById('popupModal');
    modal.classList.remove('active');
}

// Create confetti effect
function createConfetti() {
    const confettiPieces = ['🎉', '💕', '🎊', '💖', '✨', '🌹', '💘', '🎈'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.textContent = confettiPieces[Math.floor(Math.random() * confettiPieces.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.fontSize = Math.random() * 20 + 10 + 'px';
        confetti.style.animation = `fall ${Math.random() * 2 + 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Add confetti animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    
    // Create more floating hearts periodically
    setInterval(() => {
        createFloatingHearts();
    }, 8000);
});
