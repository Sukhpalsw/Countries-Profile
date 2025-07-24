document.addEventListener('DOMContentLoaded', function() {
    // Heading functionality
    console.log('Heading loaded successfully');
    
    // Add any heading-specific interactions here
    // For example, you could add logo click functionality
    const logo = document.querySelector('#logo img');
    if (logo) {
        logo.addEventListener('click', function() {
            console.log('Logo clicked');
            // Could redirect to home page or show some effect
        });
    }
    
    // Add any header animations or effects here
    const header = document.querySelector('#top-bar');
    if (header) {
        header.style.transition = 'all 0.3s ease';
    }
});
