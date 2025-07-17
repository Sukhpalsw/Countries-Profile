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

// Load common components on DOM load
window.addEventListener("DOMContentLoaded", () => {
    loadHTML("nav-placeholder", "./nav/nav.html");
    loadHTML("footer-placeholder", "./footer/footer.html");

    // Optional: if you have heading or main sections
    const heading = document.getElementById("heading-placeholder");
    if (heading) loadHTML("heading-placeholder", "./heading/heading.html");

    const main = document.getElementById("main-placeholder");
    if (main) loadHTML("main-placeholder", "./main/main.html");
});
