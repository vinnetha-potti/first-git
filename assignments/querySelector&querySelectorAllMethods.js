// Write the code as shown in the video below:

// Write answer to the questions asked below:
const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'right';
const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color = 'brown';
const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const fruitItems = document.querySelectorAll('.fruit');
for (let i = 0; i < fruitItems.length; i++){
    fruitItems[i].style.backgroundColor = 'white';
    fruitItems[i].style.padding = '10px';
    fruitItems[i].style.margin = '10px';
    fruitItems[i].style.borderMargin = '5px';

}
const EvenFruitItems = document.querySelectorAll('.fruit:nth-child(even)');
for (let i = 0; i < EvenFruitItems.length; i++){
    EvenFruitItems[i].style.backgroundColor = 'brown';
    EvenFruitItems[i].style.color = 'white';
}
