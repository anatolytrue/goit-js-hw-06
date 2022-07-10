const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngredients = document.querySelector('#ingredients');
const list = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  const listIngredients = document.querySelector('#ingredients');
  listIngredients.append(li)
})
console.log(ingredients)


