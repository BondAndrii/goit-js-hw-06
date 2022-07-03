// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const plusBtnRef = document.querySelector('button[data-action="increment"]');
console.log(plusBtnRef);
const minusBtnRef = document.querySelector('button[data-action="decrement"]');
console.log(minusBtnRef);
const spanRef = document.querySelector('#value');
console.log(spanRef.textContent+2);
let counterValue = 0;
console.log(plusBtnRef.textContent);


// plusBtnRef.addEventListener('click', () => {
//     counterValue += 1;
//     console.log(counterValue);
//     return spanRef.textContent = counterValue;
// });
// minusBtnRef.addEventListener('click', () => {
//     counterValue -= 1;
//     console.log(counterValue);
//     return spanRef.textContent = counterValue;
// } );
plusBtnRef.addEventListener('click', () => spanRef.textContent = counterValue+=1);
minusBtnRef.addEventListener('click', () => spanRef.textContent = counterValue-=1); 
   