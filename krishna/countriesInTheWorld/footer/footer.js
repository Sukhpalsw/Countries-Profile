document.addEventListener('DOMContentLoaded', function() {
    // Footer functionality
    console.log('Footer loaded successfully');
    
    // Add any footer-specific interactions here
    // For example, you could add hover effects or click tracking for social media links
    const socialLinks = document.querySelectorAll('.social-media-list a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Social media link clicked:', this.title);
        });
    });
});
