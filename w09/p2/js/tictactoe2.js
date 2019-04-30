$(document).ready(function(){

    const o = 'o';
    const x = 'x';
    let turn = 0; //even for player 'o', odd for player 'x'

    const p1 = $('#p1');
    const p2 = $('#p2');
    const p3 = $('#p3');
    const p4 = $('#p4');
    const p5 = $('#p5');
    const p6 = $('#p6');
    const p7 = $('#p7');
    const p8 = $('#p8');
    const p9 = $('#p9');

     $.fn.checkWin = function(player){
        if(p1.hasClass(player) && p2.hasClass(player) && p3.hasClass(player) ||
           p4.hasClass(player) && p5.hasClass(player) && p6.hasClass(player) ||
           p7.hasClass(player) && p8.hasClass(player) && p9.hasClass(player) ||
           p1.hasClass(player) && p4.hasClass(player) && p7.hasClass(player) ||
           p2.hasClass(player) && p5.hasClass(player) && p8.hasClass(player) ||
           p3.hasClass(player) && p6.hasClass(player) && p9.hasClass(player) ||
           p1.hasClass(player) && p5.hasClass(player) && p9.hasClass(player) ||
           p3.hasClass(player) && p5.hasClass(player) && p7.hasClass(player)
        ){
          return true;
        }else{
          return false;
        }
          


     }

    $('#board li').on('click', function(){
         
         if($(this).hasClass('disable')){
             alert('Already filled');
         }else if(turn%2==0){
             $(this).text(o);
             $(this).addClass('disable o');
             turn++;
             if($.fn.checkWin(o)){
                 alert('Winner: O');
                 turn = 0;
             }
         }else if(turn%2==1){
            $(this).text(x);
            $(this).addClass('disable x');
            turn++;
            if($.fn.checkWin(x)){
                alert('Winner: X');
                turn = 0;
            }
         }

        //  if($.fn.checkWin('o')){
        //     alert('Winner: O');
        //     $.fn.reset();
        // }else if($.fn.checkWin('x')){
        //     alert('Winner; X');
        //     $.fn.reset();
        // } 

         if(turn==9){
             alert('Tie Game');
             $.fn.reset();
         }

    });


function reset()
{
    let p = document.querySelectorAll("#board li");
    p.forEach(function(li){
        li.textContent = '+';
        li.classList.remove('o');
        li.classList.remove('x');
        li.classList.remove('disable');
    })
    $("#reset").on("click", function(){
        $.fn.reset();
    })
}
