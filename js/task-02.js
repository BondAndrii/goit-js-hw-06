// HTML містить порожній список ul#ingredients.
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// План дій. Створити за допомогою JS  лішку разом з класом, далі за одну операцію потрібно додати всі лішки в UL. 
// Скоріше за допомогою якогось циклу


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// console.log(ingredients);
// const createFoo = function (array) {
//   for (const arr of array) {
//     console.log(arr);  
//   }
// }
// createFoo(ingredients);

// const ingToUpperCase = ingredients.map(ingredient => ingredient.toUpperCase());
// console.log(ingToUpperCase);
const ingredListRef = document.querySelector('#ingredients');
// console.log(ingredListRef);

const createUl = ingredients.map(ingredient => {
  const createLi = document.createElement('li');  
  createLi.classList.add('item');
  createLi.textContent =ingredient;
  console.log(createLi); 
  return createLi;
})
console.log(createUl);
ingredListRef.append(...createUl);

// const cretLi = document.createElement('li');
// cretLi.classList.add('item');
// cretLi.textContent = "Пробний заголовок";
// ingredListRef.appendChild(cretLi);
// console.log(ingredListRef);

