// login js
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Declare
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Check Account
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'nextpage.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
