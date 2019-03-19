$(document).ready(function()
{

    const o='o';
    const x='x';

    let turn = 0;

    const p1 = $('#p1');
    const p2 = $('#p2');
    const p3 = $('#p3');
    const p4 = $('#p4');
    const p5 = $('#p5');
    const p6 = $('#p6');
    const p7 = $('#p7');
    const p8 = $('#p8');
    const p9 = $('#p9');

    $.fn.checkWin = function(player)
    {
        if(p1.hasClass(player) && p2.hasClass(player) && p3.hasClass(player)||
           p4.hasClass(player) && p5.hasClass(player) && p6.hasClass(player)||
           p7.hasClass(player) && p8.hasClass(player) && p9.hasClass(player)||
           p1.hasClass(player) && p4.hasClass(player) && p7.hasClass(player)||
           p2.hasClass(player) && p5.hasClass(player) && p8.hasClass(player)||
           p3.hasClass(player) && p6.hasClass(player) && p9.hasClass(player)||
           p1.hasClass(player) && p5.hasClass(player) && p9.hasClass(player)||
           p3.hasClass(player) && p5.hasClass(player) && p7.hasClass(player)
        )
            return true;
        else
        {
            return false;
        }
    }

    $('#board li').on('click',function()
    {
        if($.fn.checkWin('o'))
        {
            alert('Winner: o ');
            $.fn.reset();
        }
        else if($.fn.checkWin('x'))
        {
            alert('Winner: x  ');
            $.fn.reset();
        }
        else if($(this).hasClass('disable'))
        {
            alert('Already filled');
        }
        else if(turn%2==0)
        {
            $(this).text(o);
            $(this).addClass('disable o');
            turn++;
            if($.fn.checkWin(o))
            {
                alert('Winner: o');
                turn =0;
            }
            
        }
        else if(turn%2==1)
        {
            $(this).text(x);
            $(this).addClass('disable x');
            turn++;
            if($.fn.checkWin(x))
            {
                alert('Winner: x');
                turn =0;
            }
            
        }

        if(turn==9)
        {
            alert('Tie Game');
            $.fn.reset();
        }

    })

    $.fn.reset = function()
    {
        $('#board li').text('+');
        $('#board li').removeClass('o');
        $('#board li').removeClass('x');
        $('#board li').removeClass('disable');
        turn = 0;
    }

    $('#reset').on('click',function()
    {
        $.fn.reset();
    })
})