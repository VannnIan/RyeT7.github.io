document.addEventListener('DOMContentLoaded', () => {
    const uploadInputs = document.querySelectorAll('.upload');
    const registrationForm = document.getElementById('registrationForm');

    uploadInputs.forEach(input => {
        input.addEventListener('change', handleUpload);
    });

    registrationForm.addEventListener('submit', (event) => {
        if (!validateForm()) {
            event.preventDefault();
        }
    });
});

function handleUpload(event) {
    const file = event.target.files[0];
    const allowedExtensions = /(\.pdf|\.doc|\.docx|\.jpg|\.jpeg|\.png)$/i;
    const statusCell = event.target.parentElement.previousElementSibling;
    const previewCell = event.target.parentElement;

    if (file && allowedExtensions.exec(file.name)) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            setTimeout(() => {
                statusCell.textContent = 'Verified';
                statusCell.style.color = 'green';
                
                let previewElement;

                if (file.type.match('image.*')) {
                    previewElement = document.createElement('img');
                    previewElement.src = e.target.result;
                    previewElement.classList.add('image-preview');
                } else {
                    previewElement = document.createElement('div');
                    previewElement.textContent = file.name;
                    previewElement.classList.add('file-preview');
                }

                if (previewCell.querySelector('img') || previewCell.querySelector('div')) {
                    previewCell.removeChild(previewCell.lastChild);
                }

                previewCell.appendChild(previewElement);
            }, 1000);
        };

        reader.readAsDataURL(file);
    } else {
        alert('Invalid file type. Please upload a PDF, Word document, or image.');
        event.target.value = ''; 
    }
}

function validateForm() {
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const expertise = document.getElementById('expertise').value;
    const uploadInputs = document.querySelectorAll('.upload');
    let allUploadsVerified = true;

    document.getElementById('fullNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('expertiseError').textContent = '';

    if (fullName === '') {
        document.getElementById('fullNameError').textContent = 'Please enter your full name.';
        allUploadsVerified = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Please enter your email address.';
        allUploadsVerified = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        allUploadsVerified = false;
    }

    if (expertise === '') {
        document.getElementById('expertiseError').textContent = 'Please select your expertise.';
        allUploadsVerified = false;
    }

    uploadInputs.forEach(input => {
        const statusCell = input.parentElement.previousElementSibling;
        if (statusCell.textContent !== 'Verified') {
            allUploadsVerified = false;
        }
    });

    if (!allUploadsVerified) {
        return false;
    }

    return true;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
