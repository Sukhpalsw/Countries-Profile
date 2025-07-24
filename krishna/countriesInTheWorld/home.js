// Universal function to load HTML into a placeholder
function loadHTML(id, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => {
            document.getElementById(id).innerHTML =
                "<p style='color:red;'>Could not load " + url + "</p>";
            console.error("Error loading", url, error);
        });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Load navigation
    loadHTML("nav-placeholder", "./nav/nav.html");
    
    // Load heading
    loadHTML("heading-placeholder", "./heading/heading.html");
    
    // Load main content
    loadHTML("main-placeholder", "./main/main.html");
    
    // Load footer
    loadHTML("footer-placeholder", "./footer/footer.html");
});