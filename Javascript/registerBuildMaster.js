document.addEventListener('DOMContentLoaded', () => {
    const uploadInputs = document.querySelectorAll('.upload');
    
    uploadInputs.forEach(input => {
        input.addEventListener('change', handleUpload);
    });
});

function handleUpload(event) {
    const file = event.target.files[0];
    const allowedExtensions = /(\.pdf|\.doc|\.docx|\.jpg|\.jpeg|\.png)$/i;
    const statusCell = event.target.parentElement.previousElementSibling;

    if (file && allowedExtensions.exec(file.name)) {
        setTimeout(() => {
            statusCell.textContent = 'Verified';
            statusCell.style.color = 'green';
        }, 1000);
    } else {
        alert('Invalid file type. Please upload a PDF, Word document, or image.');
        event.target.value = ''; 
    }
}
