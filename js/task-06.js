const textInput = document.querySelector('#validation-input');
let validLength = parseInt(textInput.getAttribute('data-length'));

textInput.addEventListener('blur', (event) => {
    if (event.currentTarget.value.trim().length === validLength) {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid');
    } else {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid');
    }
})

console.log(textInput)
