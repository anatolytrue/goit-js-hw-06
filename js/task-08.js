const formToLogin = document.querySelector('.login-form');

formToLogin.addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!')
    }
    const objectForm = {
        email: email.value,
        password: password.value,
    }
    console.log(objectForm);
    event.currentTarget.reset();
}


