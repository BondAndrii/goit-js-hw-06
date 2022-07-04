// Напиши скрипт, який змінює кольори фону елемента < body >
// через інлайн - стиль по кліку на button.change - color і виводить значення кольору в
// span.color.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// console.log(getRandomHexColor());
const changeButton = document.querySelector('.change-color');
const spanColor = document.querySelector(".color")
// console.log(spanColor.textContent);
const bgColor = document.body.style;
// console.log(changeButton);
const onChangeBackGroundColor = function() {
  // console.log("Функція фуричить");
  const permanentColor = getRandomHexColor();
  // console.log(permanentColor);
  bgColor.backgroundColor = permanentColor;
  spanColor.textContent = permanentColor; 
}

// console.log("color", bgColor.backgroundColor);
changeButton.addEventListener('click', onChangeBackGroundColor)