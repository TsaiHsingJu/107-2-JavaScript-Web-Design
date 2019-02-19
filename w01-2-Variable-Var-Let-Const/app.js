// var,let,const

var name = 'HsingJuTsai';
console.log (name);
name = '蔡幸儒';
console.log (name);
name = '2019';
console.log (name);

var greeting;
console.log (greeting);
greeting = 'Hello';
console.log (greeting);

//letter,numbers,_,$,
//annot,start with number

//Multi word vars
var firstName = 'Hsingju'; //Camel case,preferred
var fitst_name = 'Hsingju'; //Underscore
var firstName = 'Hsingju'; //Pascal case 
var firstname = 'Hsingju';

//let
let name2 = 'HsingJuTsai';
console.log (name2);
name2 = '蔡幸儒';
console.log (name2);
name2 = '2019';
console.log (name2);

//const
// const name3 = 'HsingJuTsai';
// console.log (name3);
// name3 = '蔡幸儒';
// console.log (name3);
// name3 = '2019';
// console.log (name3);

const person ={
    name:'HsingJuTsai',
    age:18
};

person.name = 'THJ';
person.age = '19';
console.log (person);

const numbers = [1,2,3,4,5];
numbers.push (6);
console.log (numbers);