const categoryElem = document.querySelectorAll('.item');
const numberOfCategories = categoryElem.length;
console.log('Number of categories:', numberOfCategories);

[...categoryElem].forEach(elem => {
    const numberOfElements = elem.querySelectorAll('li');
    const nameOfElements = elem.querySelector('h2');
    console.log(`Category: ${nameOfElements.textContent}`);
    console.log(`Elements: ${numberOfElements.length}`);
});