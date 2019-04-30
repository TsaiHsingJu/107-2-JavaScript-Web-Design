;(function(){
        
    const resetBtn = document.querySelector('#reset')
    const liHandler = document.querySelectorAll('#board li')
    let step = 0
    
    resetBtn.addEventListener('click' , resetHandler)
    liHandler.forEach(item => {
        item.addEventListener('click' , function playHandler(e){
            flag = e.target.className === 'circle' || e.target.className === 'cross'
            if(step % 2 === 0 && !flag){
                item.textContent = 'O'
                item.className = 'circle'
                step ++
                if(step > 4){
                    winnerHandler('circle')
                }
            }else if(step % 2 === 1 && !flag){
                item.textContent = 'X'
                item.classList = 'cross'
                step ++
                if(step > 4){
                    winnerHandler('cross')
                }
            }else{
                alert('此位置已點選過,請選擇另一個位置')
            }
        })
    })


    init()

    function winnerHandler(player){
        if(
            liHandler[0].className === player && liHandler[1].className === player && liHandler[2].className === player ||
            liHandler[3].className === player && liHandler[4].className === player && liHandler[5].className === player ||
            liHandler[6].className === player && liHandler[7].className === player && liHandler[8].className === player ||
            liHandler[0].className === player && liHandler[3].className === player && liHandler[6].className === player ||
            liHandler[1].className === player && liHandler[4].className === player && liHandler[7].className === player ||
            liHandler[2].className === player && liHandler[5].className === player && liHandler[8].className === player ||
            liHandler[0].className === player && liHandler[4].className === player && liHandler[8].className === player ||
            liHandler[2].className === player && liHandler[4].className === player && liHandler[6].className === player 
        ){
            alert('Winner is :' + player)
            resetHandler()
        }else if(step > 8){
            alert('平手')
            resetHandler()
        }
    }


    function resetHandler(){
        liHandler.forEach(item => {
            item.textContent = '+'
            item.classList = ''
        })
        step = 0
    }

    function init(){
        resetHandler()
    }
})()