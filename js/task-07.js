const textInput = document.querySelector('#text');
const fontController = document.querySelector('#font-size-control');

const fontChange = (event) => {
    textInput.style.fontSize = `${event.currentTarget.value}px`;
}

fontController.addEventListener('input', fontChange);
console.log(fontController)