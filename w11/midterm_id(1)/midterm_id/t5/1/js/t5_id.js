function goPage(index){
    let row1 = document.querySelector('.row .player');
    let col1 = document.querySelector('.col .player');

    switch(index){
        case 1:
            row1.innerHTML = '<iframe width="630px" height="480px" src="https://www.youtube.com/embed/RechrtUxfQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            col1.innerHTML = '<iframe width="630px" height="480px" src="https://www.youtube.com/embed/RechrtUxfQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        break;
        case 2:
            row1.innerHTML = '<iframe width="630px" height="480px" src="https://www.youtube.com/embed/MRWX49Furew" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            col1.innerHTML = '<iframe width="630px" height="480px" src="https://www.youtube.com/embed/MRWX49Furew" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        break;
        case 3:
            row1.innerHTML = '<iframe width="630px" height="480px" src="https://www.youtube.com/embed/METhdbL_iMw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            col1.innerHTML = '<iframe width="630px" height="480px" src="https://www.youtube.com/embed/METhdbL_iMw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        break;
        case 4:
            row1.innerHTML = '<iframe width="630px" height="480px" src="https://www.youtube.com/embed/ZyDbq-lEKTo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            col1.innerHTML = '<iframe width="630px" height="480px" src="https://www.youtube.com/embed/ZyDbq-lEKTo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        break;
        case 5:
            row1.innerHTML = '<iframe width="630px" height="480px" src="https://www.youtube.com/embed/NlsrJbVvjaA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            col1.innerHTML = '<iframe width="630px" height="480px" src="https://www.youtube.com/embed/NlsrJbVvjaA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        break;
    }
}

function display(index){
    let row2 =document.querySelector('.row');
    let col2 =document.querySelector('.col');

    switch(index){
        case 1:
            row2.style.display = "block";
            col2.style.display = "none";
        break;
        case 2:
            col2.style.display = "block";
            row2.style.display = "none";
        break;
    }
}