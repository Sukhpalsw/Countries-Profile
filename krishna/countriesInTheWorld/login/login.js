function resultForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const resultInformation = document.getElementById("resultInformation");

    resultInformation.style.display = "block";
    resultInformation.innerHTML = `
        <h2>Account Information</h2>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;
}

function loadHTML(id, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            // Fix image paths in the HTML content before inserting it
            if (id === 'footer-placeholder') {
                data = data.replace(/src="\.\/images\//g, 'src="../footer/images/');
            }
            
            document.getElementById(id).innerHTML = data;
            
            // Load footer JS after footer HTML is inserted
            if (id === 'footer-placeholder') {
                const script = document.createElement('script');
                script.src = '../footer/footer.js';
                document.body.appendChild(script);
            }
        })
        .catch(error => {
            document.getElementById(id).innerHTML = "<p style='color:red;'>Could not load " + url + "</p>";
            console.error('Error loading', url, error);
        });
}

window.addEventListener('DOMContentLoaded', () => {
    loadHTML('footer-placeholder', '../footer/footer.html');
});
