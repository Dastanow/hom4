let h2 = document.createElement('h2')
let block = document.querySelector('.block')

h2.textContent = 'hello'
block.prepend(h2)

console.log(h2);
// const block = document.getElementsByClassName('block')
console.log(block, h2);
const h3 = document.createElement('h3')
h3.textContent = 'hello h3'


console.log(h3);
const row = document.querySelector(".row")
console.log(row.children);



let buttonElement = document.querySelector("button");


if (buttonElement) {
  
  buttonElement.parentNode.removeChild(buttonElement);
}
const title = document.querySelector('.title');
console.log(title.previousElementSibling);
console.log(title.nextElementSibling);