// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
// ----------------------------------------------------------------
// як це зробити?
//     Потрібно збернутись до Юела, створити масив його дітей, та порахувати довжину цього масиву.
// далі звернутись до кожного з дітей, та порахувати довжину тих масивів та вивести текстконтент для заголовків...
// і повиводить це все в консоль
// ----------------------------------------------------------------
// const mainList = document.querySelector('#categories')
// console.log('Number of categories: ', mainList.children.length);
// Варіант "в лоб"

const arrItem = document.querySelectorAll('.item');
console.log('Number of categories: ', arrItem.length);

// const firstItemTitle = arrItem[0].firstElementChild;
// console.log('Category: ', firstItemTitle.textContent);
// const childList = firstItemTitle.nextElementSibling;
// const childArrItem = childList.querySelectorAll("li");
// console.log('Elements: ', childArrItem.length);

// const secondItemTitle = arrItem[1].firstElementChild;
// console.log('Category: ', secondItemTitle.textContent);
// const childList1 = secondItemTitle.nextElementSibling;
// const childArrItem1 = childList1.querySelectorAll("li");
// console.log('Elements: ', childArrItem1.length);

// const tridItemTitle = arrItem[2].firstElementChild;
// console.log('Category: ', tridItemTitle.textContent);
// const childList2 = tridItemTitle.nextElementSibling;
// const childArrItem2 = childList2.querySelectorAll("li");
// console.log('Elements: ', childArrItem2.length);

// console.log(arrItem);

const mapArrItem = arrItem.forEach(item => {
    const itemTitle = item.firstElementChild;
    console.log('Category: ', itemTitle.textContent);
    
    const childListArr = itemTitle.nextElementSibling;
    // console.log(childListArr);
    const arrLi = childListArr.querySelectorAll('li');
    console.log('Elements: ', arrLi.length);
});
// console.log(mapArrItem);
  
// const consLog = function (items) {
//     for (const i=0, i < items.length, i+=1) {
//         const ItemTitle = items.firstElementChild;
//         console.log ( " Category: ", ItemTitle.textContent);
//         const childList = ItemTitle.nextElementSibling;
//         const childArrItem = childList.querySelectorAll("li");
//         console.log('Elements: ', childArrItem.length);
//     }
// }
// consLog(arrItem);