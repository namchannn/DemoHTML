document.addEventListener('DOMContentLoaded', function() {
    const clientForm = document.getElementById('clientForm');
    const resultDiv = document.getElementById('resultDiv');

    clientForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const clientName = document.getElementById('clientName').value;
        const clientEmail = document.getElementById('clientEmail').value;
        const clientPhone = document.getElementById('clientPhone').value;

        // Build the content to display
        const content = '<p>Client Name: ' + clientName +
                        '<br>Client Email: ' + clientEmail +
                        '<br>Client Phone: ' + clientPhone + '</p>';

        // Update the resultDiv with the content
        resultDiv.innerHTML = content;
    });
});