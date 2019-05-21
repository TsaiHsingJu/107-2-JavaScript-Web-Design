//Set local storage item
//localStorage.setItem('name','John');
// localStorage.setItem('age','30');

// set session storage item
sessionStorage.setItem('name','Beth');

// remove from storage
//localstorage.removeItem('name');

//get form storage
//const name = localStorage.getItem('name');
//const age = localStorage.getItem('age');

// //clear local storage
//localStorage.clear();

//console.log(name,age);
console.log(localStorage)
document.querySelector('form').addEventListener('submit',function(e){
    const task = document.getElementById('task').nodeValue;

    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks =[];
    }else{
        tasks = JSoN.parse(localStorage.getItem('tasks'));
    }

    taslks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));

    alert('Task saved');

    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

if(task !== null)
tasks.forEach(function(task) {
    console.log(task);    
});