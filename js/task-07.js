// Напиши скрипт, який реагує на зміну значення
// input#font - size - control(подія input) і змінює інлайн - стиль span#text,
// оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.


const inputFontSizeRef = document.querySelector('#font-size-control');
console.log(inputFontSizeRef);
const changedText = document.querySelector('#text');
console.log(changedText);
console.log(changedText.style.fontSize);
changedText.classList.add('text__size');

const onChange = (event) => {
    const { dataset, name, value } = event.target;
    console.log(value);
    changedText.style.fontSize = value + 'px';
    // name = "--textSize";
    // console.log(name);
    // console.log(dataset);
    // document.documentElement.style.setProperty(`--textSize`, value)
}
inputFontSizeRef.addEventListener('input', onChange)

