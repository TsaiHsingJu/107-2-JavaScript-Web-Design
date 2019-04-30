let tkuBtn = document.querySelectorAll('.tku a')
let display = document.querySelector('.display')
let images = document.querySelectorAll('.images img')


tkuBtn.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        tkuBtn.forEach(item => {
            item.className = ''
        })
        images.forEach(item => {
            item.className = ''
        })
        switch (e.target.innerText) {
            case 'Part1':
                display.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/RechrtUxfQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                images[0].className = 'active'
                item.className = 'active'
                break
            case 'Part2':
                display.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/MRWX49Furew" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                images[1].className = 'active'
                item.className = 'active'
                break
            case 'Part3':
                display.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/METhdbL_iMw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                images[2].className = 'active'
                item.className = 'active'
                break;
            case 'Part4':
                display.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/METhdbL_iMw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                images[3].className = 'active'
                item.className = 'active'
                break
            case 'Part5':
                display.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/METhdbL_iMw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                images[4].className = 'active'
                item.className = 'active'
                break
        }
    })
})


images.forEach(item => {
    item.addEventListener('click' , function(e){
        tkuBtn.forEach(item => {
            item.className = ''
        })
        images.forEach(item => {
            item.className = ''
        })
        console.log(e)
        switch(e.target.id){
            case 'one':
                display.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/RechrtUxfQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                tkuBtn[0].className = 'active'
                item.className = 'active'
            break
            case 'two':
                display.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/MRWX49Furew" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                tkuBtn[1].className = 'active'
                item.className = 'active'
            break
            case 'three':
                display.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/METhdbL_iMw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                tkuBtn[2].className = 'active'
                item.className = 'active'
            break
            case 'four':
                display.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/METhdbL_iMw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                tkuBtn[3].className = 'active'
                item.className = 'active'
            break
            case 'five':
                display.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/METhdbL_iMw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                tkuBtn[4].className = 'active'
                item.className = 'active'
            break
        }
    })
})




console.log(tkuBtn)