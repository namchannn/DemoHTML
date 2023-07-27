// nextpage js
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get input valúe
    const studentName = document.getElementById('studentName').value;
    const studentClass = document.getElementById('studentClass').value;
    const studentDOB = document.getElementById('studentDOB').value;
    const studentGender = document.querySelector('input[name="studentGender"]:checked');
    const studentLanguages = document.querySelectorAll('input[name="studentLanguage"]:checked');

    if (studentName.trim() === '') {
        alert('Please enter ther Student Name.');
        return;
    }
    // Show confirmation dialog
    const confirmation = confirm('Are you sure you want to add this student?');
    if (confirmation) {
        // Create a new row for the student in the table
        const studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
        const newRow = studentTable.insertRow();
        const nameCell = newRow.insertCell();
        const classCell = newRow.insertCell();
        const dobCell = newRow.insertCell();
        const genderCell = newRow.insertCell();
        const languageCell = newRow.insertCell();
        const actionCell = newRow.insertCell();
        // Populate the cells with the input values
        nameCell.innerText = studentName;
        classCell.innerText = studentClass;
        dobCell.innerText = studentDOB;
        genderCell.innerText = studentGender ? studentGender.value : '-';
        // Create an array to store selected languages
        languageCell.innerText = '';
        for (const language of studentLanguages) {
            languageCell.innerText += language.value + ', ';
        }
        languageCell.innerText = languageCell.innerText.slice(0, -2);
        // Creat a link to delete the student
        const deleteLink = document.createElement('a');
        deleteLink.href = '#';
        deleteLink.innerText = 'Delete';
        actionCell.appendChild(deleteLink);
        // Clear the form after adding
        document.getElementById('studentForm').reset();
    }
});

document.getElementById('addClassLink').addEventListener('click', function(event) {
    event.preventDefault();
    
    const newClassName = prompt('Enter the new class name:');
    if (newClassName && newClassName.trim() !== '') {
        const selectClass = document.getElementById('studentClass');
        const newOption = document.createElement('option');
        newOption.value = newClassName.toLowerCase().replace(/\s+/g, '');
        newOption.innerText = newClassName;
        selectClass.appendChild(newOption);

        selectClass.value = newOption.value;
    }
});

// Delete the student when clicked to link delete
document.getElementById('studentTable').addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        const row = event.target.parentNode.parentNode;
        if (confirm('Are you sure you want to delete this student?')) {
            row.remove();
        }
    }
});