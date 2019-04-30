//let n = parseInt("Enter an integer N");
let n = 10;
let score = [];

for(let i=0;i<n;i++){
  score.push(Math.floor(Math.random()*101));
}

console.log(score);

let max = -1;
let min = 101;
let sum = 0;
let average = 0;

score.forEach(function(s){
  if(s>max) max = s;
  if(s<min) min = s;
  sum += s;
});

console.log("max = %d\n", max);
console.log("min = %d\n", min);
console.log("sum = %d\n", sum);
console.log("average = %.1f\n", sum/n);

