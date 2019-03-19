//REPLACE ELEMENT
// Create Element
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';

// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
console.log("oldHeading",oldHeading);

//Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
console.log(lis);
const list = document.querySelector('ul');
console.log(list);

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES & ATTR
const firsti = document.querySelector('li:first-child');
console.log("first",firsti);
const link = firsti.children[0];
let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
console.log("link",link);
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
console.log(val);
val = link.setAttribute('href','http://google.com');
link.setAttribute('title','google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);

