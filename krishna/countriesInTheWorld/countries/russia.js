document.addEventListener('DOMContentLoaded', function() {
    // Fix image paths in footer when loaded from countries subfolder
    const footerImages = document.querySelectorAll('#footer img');
    footerImages.forEach(img => {
        if (img.src.includes('./images/')) {
            img.src = img.src.replace('./images/', '../images/');
        }
    });
});