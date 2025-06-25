function loadHTML(id, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => {
            document.getElementById(id).innerHTML = "<p style='color:red;'>Could not load " + url + "</p>";
            console.error('Error loading', url, error);
        });
}

window.addEventListener('DOMContentLoaded', () => {
    loadHTML('nav-placeholder', 'nav/nav.html');
    loadHTML('heading-placeholder', 'heading/heading.html');
    loadHTML('main-placeholder', 'main/main.html');
    loadHTML('footer-placeholder', 'footer/footer.html');
});