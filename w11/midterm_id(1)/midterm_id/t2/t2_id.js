/*
Before Sorting
Lotto: 24,40,14,30,45,34

After Sorting
Lotto: 14,24,30,34,40,45
*/

let lotto = [];
let num;

function duplicate(num,pos){
    for(let i=0;i<pos;i++)
        if(lotto[i]==num) return true;
    return false;
}

for(let i=0 ; i<6 ; i++){
    do{
        num = Math.floor(Math.random()*49)+1;
    }
    while(duplicate(num,i));

    lotto.push(num);
}


console.log('Before Sorting \n Lotto:'+lotto);

lotto.sort(function(a,b){
    return (a-b);
});
console.log('After Sorting \n Lotto:'+lotto);


