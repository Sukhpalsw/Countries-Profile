function loadHTML(id, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            // Fix image paths in the HTML content before inserting it
            if (id === 'footer-placeholder') {
                data = data.replace(/src="\.\/images\//g, 'src="../images/');
            }
            
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => {
            document.getElementById(id).innerHTML = "<p style='color:red;'>Could not load " + url + "</p>";
            console.error('Error loading', url, error);
        });
}

window.addEventListener('DOMContentLoaded', () => {
    loadHTML('nav-placeholder', '../nav/nav.html');
    loadHTML('footer-placeholder', '../footer/footer.html');
});