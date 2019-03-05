let val;

const today = new Date();
console.log (today);
let birthday = new Date('26-02-2019 00:00:00');
console.log (birthday);
birthday = new Date('September 10 1981');
console.log (birthday);
birthday = new Date('9/10/1981');
console.log (birthday);

val = today.getMonth();
console.log(val)
val = today.getDate();
console.log(val)
val = today.getDay();
console.log(val)
val = today.getFullYear();
console.log(val)
val = today.getHours();
console.log(val)
val = today.getMinutes();
console.log(val)
val = today.getSeconds();
console.log(val)
val = today,getMilliseconds();
console.log(val)
val = today.getTime();
console.log(val)

birthday.setMonth(2);
birthday.setDate(12);
birthday.setUTCFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);