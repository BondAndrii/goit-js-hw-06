// Напиши скрипт управління формою логіна.
// Обробка відправлення форми form.login - form повинна відбуватися відповідно 
// до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
// що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму,
// збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, 
// а значення поля - значенням властивості.Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль 
// і очисти значення полів форми методом reset.

const formRef = document.querySelector(".login-form");
// console.log(formRef);

formRef.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()
//  console.log("submit");
    const formElements = event.currentTarget.elements
    
    const email = formElements.email.value;
    // console.log(email);
    const password = formElements.password.value;
    // console.log(password);
    if (email === "" || password === "") {
    return alert("Всі поля повинні бути заповнені");
  }
    const formData = {
        email,
        password,        
    }     
    console.log('Дані авторицації: ', formData);   
    event.currentTarget.reset();   
}
// function resetFoo(a, b) {
//     a = '';
//     b = '';
//     return a, b
// } 

// function alertfoo(a, b) {
//     if (!a || !b) {
//         console.log("Всі поля повинні бути заповнені")
//     };
// }
