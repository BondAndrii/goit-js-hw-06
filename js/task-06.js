// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
// які ми вже додали у вихідні файли завдання.

const inputRef = document.querySelector("#validation-input");
console.log(inputRef);
inputRef.addEventListener('blur', onBlur);

function onBlur(event) {
    event.preventDefault();
    const inputDataLength = Number(inputRef.dataset.length);
    console.log(inputDataLength);
    const inputLengthValue = event.currentTarget.value.length;
    console.log(inputLengthValue);
    if (inputDataLength === inputLengthValue) {
        console.log(inputRef);
        inputRef.classList.add('valid');
        console.log(inputRef);
        inputRef.classList.remove('invalid');
    } else {
        console.log(inputRef);
        inputRef.classList.add('invalid');
        console.log(inputRef);
        inputRef.classList.remove('valid');
    }
    
}
