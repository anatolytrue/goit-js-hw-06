const textInput = document.querySelector('#validation-input');
let validLength = parseInt(textInput.getAttribute('data-length'));


const focusInput = (event) => {
    if (event.currentTarget.value.trim().length === validLength) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    } else {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid');
    }
    console.log(focusInput)
}

textInput.addEventListener('blur', focusInput)

console.log(textInput)
