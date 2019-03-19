const firstName = 'HsingJu';
const lastName = 'Tsai';
const age = 19;
const str = 'Hello there my name is Amy';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;
console.log(val);

// Append
val = 'HsingJu ';
val += 'Tsai';
console.log(val);

val = 'Hello, my name is ' + firstName + ' and I am ' + age;
console.log(val);

// Escaping
val =  'That\'s awesome, I can\'t wait';
console.log(val);

// Length
val = firstName.length;
console.log(val);

//concat()
val = firstName.concat(' ',lastName);
console.log(val);

// change case
val = firstName.toUpperCase();
console.log(val);

val = firstName.toLowerCase();
console.log(val);

val = firstName[0];
console.log(val);

// indexOf()
val = firstName.indexOf('g');
console.log(val);

val = firstName.lastIndexOf('i');
console.log(val);

// charAt()
val = firstName.charAt('5');
console.log(val);

// get last char
val = firstName.charAt(firstName.length-1);
console.log(val);

// substring()
val = firstName.substring(0,5);
console.log(val);

val = firstName.substring(5,8);
console.log(val);

// slice()
val = firstName.slice(0,5);
console.log(val);

val = firstName.slice(-2);
console.log(val);

// split()
val = str.split(' ');
console.log(val);

val = tags.split(',');
console.log(val);

// replace()
val = str.replace('Hello','Hi');
console.log(val);

// includes()
val = str.includes('Hello');
console.log(val);
