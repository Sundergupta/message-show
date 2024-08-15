

function validateEmail(email) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function handleInputChange(e) {
    const name = e.name;
    const value = e.value;
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    if (name === 'name', value === '') {
        nameError.style.display = 'block';
    }
    else {
        nameError.style.display = 'none';
    }

    if (name === 'email', value === '') {
        emailError.style.display = 'block';
    }
    else {
        emailError.style.display = 'none';
    }

    if (name === 'message', value === '') {
        messageError.style.display = 'block';
    }
    else {
        messageError.style.display = 'none';
    }
}

function submitForm() {
    const name = document.getElementById('name-input').value.trim();
    const email = document.getElementById('email-input').value.trim();
    const message = document.getElementById('message-input').value.trim();

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    let isValid = true;



    if (name === '') {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }


    if (email === '' || !validateEmail(email)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }


    if (message === '') {
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }


    if (isValid) {
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    }
}