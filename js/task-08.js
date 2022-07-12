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
    console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
    
}


