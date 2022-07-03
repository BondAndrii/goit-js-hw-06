const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('.gallery');
console.log(galleryRef);
// const arrImg = images.map(image => {
//   const { url, alt } = image;
//   const itemEl = document.createElement('li');
//   // console.log(itemEl);
//   const imgEl = document.createElement('img');
//   // console.log(imgEl);
//   imgEl.src = url;
//   // console.log(imgEl.src);
//   imgEl.alt = alt;
//   console.log(imgEl.alt);
//   itemEl.appendChild(imgEl); 
//   return itemEl;
// })
// console.log(arrImg);
const listImage = images.map(({ url, alt }) => `<li> <img class="item__lessonthree" src=${url} alt=${alt}> </li>`).join("");
console.log(listImage);
galleryRef.insertAdjacentHTML("beforeend", listImage);
galleryRef.classList.add('list__lessonthree');
// const imgRef = document.querySelector('img');
// console.log(imgRef);
// console.log(imgRef.hasAttribute('src'));  
// console.log(imgRef.getAttribute('src'));
// console.log(imgRef.attributes);