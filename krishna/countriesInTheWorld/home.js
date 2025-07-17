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

// Function to load page content dynamically
function loadPage(pageName) {
    const contentArea = document.getElementById("main-placeholder");
    
    // Update page title
    let pageTitle = "Countries Profile";
    let contentUrl = "";
    
    switch(pageName) {
        case 'home':
            pageTitle = "Home - Countries Profile";
            contentUrl = "./main/main.html";
            break;
        case 'about':
            pageTitle = "About Us - Countries Profile";
            contentUrl = "./About-Us/about-content.html";
            break;
        case 'contact':
            pageTitle = "Contact Us - Countries Profile";
            contentUrl = "./contact-Us/contact-content.html";
            break;
        case 'work':
            pageTitle = "Work With Us - Countries Profile";
            contentUrl = "./workWIth-Us/work-content.html";
            break;
        case 'india':
            pageTitle = "India - Countries Profile";
            contentUrl = "./countries/india-content.html";
            break;
        case 'usa':
            pageTitle = "USA - Countries Profile";
            contentUrl = "./countries/usa-content.html";
            break;
        case 'sweden':
            pageTitle = "Sweden - Countries Profile";
            contentUrl = "./countries/sweden-content.html";
            break;
        default:
            pageTitle = "Home - Countries Profile";
            contentUrl = "./main/main.html";
    }
    
    // Update browser title
    document.title = pageTitle;
    
    // Load the content
    if (contentArea) {
        loadHTML("main-placeholder", contentUrl);
    }
}

// Load common components on DOM load
window.addEventListener("DOMContentLoaded", () => {
    loadHTML("nav-placeholder", "./nav/nav.html");
    loadHTML("footer-placeholder", "./footer/footer.html");

    // Load default content
    const heading = document.getElementById("heading-placeholder");
    if (heading) loadHTML("heading-placeholder", "./heading/heading.html");

    const main = document.getElementById("main-placeholder");
    if (main) loadHTML("main-placeholder", "./main/main.html");
    
    // Set up navigation event listeners after nav loads
    setTimeout(() => {
        setupNavigation();
    }, 500);
});

// Setup navigation click handlers
function setupNavigation() {
    // Add click handlers to navigation links
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[data-page]')) {
            e.preventDefault();
            const pageName = e.target.getAttribute('data-page');
            loadPage(pageName);
        }
    });
}
