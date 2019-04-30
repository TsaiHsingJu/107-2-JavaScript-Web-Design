const o = 'o';
const x = 'x';
let turn = 0; //even for player 'o', odd for player 'x'

function play(index){
   let li = document.querySelectorAll('#board li')[index];
   if(li.classList.contains('disable')){
       alert('Already filled.');
   }else if(turn%2==0){
       li.textContent = 'o';
       li.classList.add('o','disable')
       turn++;
       if(checkWin('o')){
          alert('Winner: O');
          turn = 0;
       }
   }else if(turn%2==1){
       li.textContent = 'x';
       li.classList.add('x','disable');
       turn++;
       if(checkWin('x')){
         alert('Winner: X');
         turn = 0;
       }
   }
   if(turn==9) alert("Tie game.");
}

function checkWin2(player){
    let p = document.querySelectorAll('#board li');
    
    if(p[0].classList.contains(player) && p[1].classList.contains(player) && p[2].classList.contains(player) ||
       p[3].classList.contains(player) && p[4].classList.contains(player) && p[5].classList.contains(player) ||
       p[6].classList.contains(player) && p[7].classList.contains(player) && p[8].classList.contains(player) ||
       p[0].classList.contains(player) && p[3].classList.contains(player) && p[6].classList.contains(player) ||
       p[1].classList.contains(player) && p[4].classList.contains(player) && p[7].classList.contains(player) ||
       p[2].classList.contains(player) && p[5].classList.contains(player) && p[8].classList.contains(player) ||
       p[0].classList.contains(player) && p[4].classList.contains(player) && p[8].classList.contains(player) ||
       p[2].classList.contains(player) && p[4].classList.contains(player) && p[6].classList.contains(player)
    ) 
      return true;
    else 
      return false;
}

function checkWin(player){
    let p = document.querySelectorAll('#board li');
    let s = [];
    p.forEach(function(li){
       if(li.classList.contains(player))
         s.push(1);
       else
         s.push(0);
    })

    if(s[0] + s[1] + s[2] == 3 || s[3] + s[4] + s[5] == 3 || s[6] + s[7] + s[8] == 3 ||
       s[0] + s[3] + s[6] == 3 || s[1] + s[4] + s[7] == 3 || s[2] + s[5] + s[8] == 3 ||
       s[0] + s[4] + s[8] == 3 || s[2] + s[4] + s[6] == 3
    ) 
      return true;
    else 
      return false;
}

function reset(){
    let p = document.querySelectorAll('#board li');
    p.forEach(function(li){
       li.textContent = '+';
       li.classList.remove('o');
       li.classList.remove('x');
       li.classList.remove('disable');
       turn = 0;
    });
}
