function play(index)
{
    let p = document.getElementById('player');
    switch(index)
    {
        case 1:

            p.innerHTML = '<iframe width="630" height="100%" src="https://www.youtube.com/embed/RechrtUxfQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        case 2:
             p.innerHTML = '<iframe width="630" height="100%" src="https://www.youtube.com/embed/MRWX49Furew" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
             break;
        case 3:
             p.innerHTML = '<iframe width="630" height="100%" src="https://www.youtube.com/embed/METhdbL_iMw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
             break;
        case 4:
             p.innerHTML = '<iframe width="630" height="100%" src="https://www.youtube.com/embed/ZyDbq-lEKTo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
             break;
        case 5:
             p.innerHTML = '<iframe width="630" height="100%" src="https://www.youtube.com/embed/NlsrJbVvjaA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
             break;
    }
}