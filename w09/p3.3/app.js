
const users = 
[
    {
        id:1, midterm: 80, 
        final: 90, grade: 0, 
        letterGrade: null 
    },
    {
        id:2, midterm: 40, 
        final: 60, grade: 0, 
        letterGrade: null
    },
    {
        id:3, midterm: 70, 
        final: 80, grade: 0, 
        letterGrade: null
    },
    {
        id:4, midterm: 50, 
        final: 60, grade: 0, 
        letterGrade: null
    },
    {
        id:5, midterm: 90, 
        final: 95, grade: 0, 
        letterGrade: null
    },

];
const ids = users.map(function(user)
{
    return user.id;

});
console.log(ids);



//console output

// const users = 
// [
//     {
//         id:1, midterm: 80, final: 90, grade: 85.0, letterGrade: B
//     },
//     {
//         id:2, midterm: 40, final: 60, grade: 50.0, letterGrade: F
//     },
//     {
//         id:3, midterm: 70, final: 80, grade: 75.0, letterGrade: C
//     },
//     {
//         id:4, midterm: 65, final: 60, grade: 62.5, letterGrade: D
//     },
//     {
//         id:5, midterm: 90, final: 95, grade: 92.5, letterGrade: A
//     },

// ];
// const ids = users.map(function(user)
// {
//     return user.id;

// });
// console.log(ids);

