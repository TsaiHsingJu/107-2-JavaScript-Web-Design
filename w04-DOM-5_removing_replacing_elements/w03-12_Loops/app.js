// FOR LOOP
for(let i=1;i<=3;i++)
{
    console.log("Number "+i);
}

// WHILE LOOP
let i = 1;
while(i<=3)
{
    console.log("Number "+i);
    i++;
}

// DO WHILE
let j = 1;
do
{
    console.log("Number "+j);
    j++;
}while(j<=3);

// LOOP THROUGH ARRAY
const fruits = ['apple','steawberry','watermelon','banana'];
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}

// FOREACH
fruits.forEach(function(fruit, index,ARRAY)
{
    console.log(`${index}: ${fruit}`);
    console.log(ARRAY);
});

// MAP
const users = 
[
    {
        id:1,
        name: 'Amy'
    },
    {
        id:2,
        name: 'Tom'
    },
    {
        id:3,
        name: 'Tim'
    },

];
const ids = users.map(function(user)
{
    return user.id;

});
console.log(ids);

// FOR IN LOOP
const user = 
{
    firstName: 'HsingJu',
    lastName: 'Tsai',
    age: 19
}
for(let x in user)
{
    console.log(`${x}: ${user[x]}`);
}