document.getElementById('signupLink').addEventListener('click', function () {
    document.getElementById('signupModal').style.display = 'block';
});

document.getElementsByClassName('close')[0].addEventListener('click', function () {
    document.getElementById('signupModal').style.display = 'none';
});

// Lukker modalen hvis man trykker uden for vinduet 
window.onclick = function (event) {
    if (event.target == document.getElementById('signupModal')) {
        document.getElementById('signupModal').style.display = 'none';
    }
};

document.getElementById('signupForm').addEventListener('submit', function (event) {
    // Forhindre den "default" form submission.
    event.preventDefault();

    // Validere hvert felt
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var valid = true;

    // Navn validation må ikke være tomt
    if (name.trim() === '') {
        alert('Navn er et krav');
        valid = false;
    }

    // Email validation skal have @
    if (email.indexOf('@') === -1) {
        alert('Venligst indtast en gyldig mail');
        valid = false;
    }

    // Password validation skal være minimum 6 tegn lang
    if (password.length < 6) {
        alert('Password skal være mindst 6 tegn');
        valid = false;
    }

    // If all validations pass, submit the form
    if (valid) {
        // Display success message
        var successMessage = document.getElementById('successMessage');
        successMessage.textContent = 'Du har fuldført registrationen';
        successMessage.style.display = 'block';
    }
});

