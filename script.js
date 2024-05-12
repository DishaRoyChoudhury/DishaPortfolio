function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  document.addEventListener('mousemove', function(e) {
    const container = document.getElementById('star-container');
    const star = document.createElement('div');
    star.className = 'star';
    container.appendChild(star);

    // Set the initial position of the star
    star.style.left = `${e.pageX}px`;
    star.style.top = `${e.pageY}px`;
    star.style.display="block";

    // Set the animation for the star
    setTimeout(() => {
        star.style.transform = 'translate(-50%, -50%) scale(2)'; // Moves and grows
        star.style.opacity = '0'; // Fades out
    }, 50);

    // Remove the star after the animation
    setTimeout(() => {
        container.removeChild(star);
    }, 600); // Should match the longest transition time
});