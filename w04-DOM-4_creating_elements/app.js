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
const cardAction = document.querySelector('card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
console.log(lis);
const list = document.querySelector('ui');
console.log(lis);

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
val = link.classList

// Attributes

console.log(val);

