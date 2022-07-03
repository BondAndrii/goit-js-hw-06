// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
const inputRef = document.querySelector("#name-input");
// console.log(inputRef);
const spanRef = document.querySelector("#name-output");
// console.log(spanRef);
// console.log(spanRef.textContent);
inputRef.addEventListener('input', onInput);
function onInput(event) {
    if (event.currentTarget.value.trim() === "") {
        return spanRef.textContent='Anonymous'
    }
    // console.log(event.currentTarget.value);
    
    spanRef.textContent = event.currentTarget.value;
    
}