// FUNCTION DECLARATIONS
function greet(firstName='John',lastName='Doe')
{
    return 'Hello' + ' ' + firstName + ' ' + lastName;
}

console.log(greet(''));
console.log(greet('HsingJu','Tsai'));

// FUNCTION EXPRESIONS
const square = function(x=6)
{
    return x*x;   
}
console.log(square(7));

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
(function greeting()
{
    console.log('IIFE Ran');
})();


(function greet(firstName='John',lastName='Doe')
{
    console.log('Hello' + ' ' + firstName + ' ' + lastName);
})('HsingJu','Tsai');

// PROPERTY METHODS
const todo = 
{
    add: function()
    {
        console.log('Add todo ...');
    },
    edit: function(id)
    {
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(id)
{
    console.log(`Delete todo id ${id}`);
}

todo.add();
todo.edit(666);
todo.delete(66);