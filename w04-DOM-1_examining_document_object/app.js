let val;

val = document;
console.log(val);

val = document.all;
console.log(val);

val = document.all.length;
console.log(val);

val = document.all[1];
console.log(val);

val = document.head;
console.log(val);

val = document.body;
console.log(val);

val = document.URL;
console.log(val);

val = document.forms;
console.log(val);

val = document.forms[0];
console.log(val);

val = document.forms[0].id;
console.log(val);

val = document.forms[0].method;
console.log(val);

val = document.forms[0].action;
console.log(val);

val = document.links;
console.log(val);

val = document.links[1];
console.log(val);

val = document.links[1].className;
console.log(val);

val = document.links[1].id;
console.log(val);

val = document.links[1].classList;
console.log(val);

val = document.links[1].classList[1];
console.log(val);

val = document.images;
console.log(val);

val = document.scripts;
console.log(val);

val = document.scripts[1].src;
console.log(val);

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);
console.log(scriptsArr);

scriptsArr.forEach(function(script) {
    console.log(script.getAttribute('src'));
    
});