document.getElementById('trigger').addEventListener('click', function() {
    const explosionSound = document.getElementById('explosion-sound');
    explosionSound.currentTime = 0; 
    explosionSound.play(); 
    
    const debrisImages = [
        'LOGO.png', 
        'itech.png'
    ];

    for (let i = 0; i < 150; i++) { 
        const debris = document.createElement('img');
        debris.classList.add('debris');
        
        
        const randomImage = debrisImages[Math.floor(Math.random() * debrisImages.length)];
        debris.src = randomImage;
        
        
        const size = Math.random() * 50 + 10; 
        debris.style.width = `${size}px`;
        debris.style.height = `${size}px`;
        debris.style.top = '50%';
        debris.style.left = '50%';

        
        const angle = Math.random() * 2 * Math.PI; 
        const distance = Math.random() * 500 + 200; 
        const translateX = Math.cos(angle) * distance;
        const translateY = Math.sin(angle) * distance;

        debris.style.transform = `translate(-50%, -50%) translate(${translateX}px, ${translateY}px)`;

        document.body.appendChild(debris);

        
        setTimeout(() => {
            debris.style.opacity = 0; // Fade out
        }, 50); 
    }

    
    setTimeout(() => {
        window.location.href = 'Website.html'; 
    }, 800); 
});