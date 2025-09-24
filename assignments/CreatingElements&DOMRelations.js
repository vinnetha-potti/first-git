const headerDiv = document.getElementById("header");
const mainHeading = document.getElementById("main-heading");
const subHeading = document.createElement('h3');
subHeading.style.fontStyle = 'italic';

subHeading.innerHTML = '<i>Buy high quality organic furits online</i>';
headerDiv.insertBefore(subHeading, mainHeading.nextSibling);

const secondDiv = document.querySelectorAll('div')[1];
const fruitList = document.querySelector('.fruits');
const para = document.createElement('p');
para.id = 'fruits-total';
para.textContent = 'Total fruits: 4';
secondDiv.insertBefore(para, fruitList);