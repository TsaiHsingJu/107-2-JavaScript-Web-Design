
function play(index){
    let p = document.querySelector('#display');
    
    let nav = document.querySelectorAll('#tku li');
    nav.forEach(function(li){
      li.classList = '';
    });

    let imgs = document.querySelectorAll('#images img');
    imgs.forEach(function(img){
      img.classList = '';
    });

    switch(index){
       case 1:
         p.innerHTML = '<iframe width="80%" height="100%" src="https://www.youtube.com/embed/RechrtUxfQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
         imgs[0].classList.add('active');
         nav[0].classList.add('active');
         break;
       case 2:
         p.innerHTML = '<iframe width="80%" height="100%" src="https://www.youtube.com/embed/MRWX49Furew" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
         imgs[1].classList.add('active');
         nav[1].classList.add('active');
         break;
       case 3:
         p.innerHTML = '<iframe width="80%" height="100%" src="https://www.youtube.com/embed/METhdbL_iMw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
         imgs[2].classList.add('active');
         nav[2].classList.add('active');
         break;
       case 4:
         p.innerHTML = '<iframe width="80%" height="100%" src="https://www.youtube.com/embed/ZyDbq-lEKTo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
         imgs[3].classList.add('active');
         nav[3].classList.add('active');
         break;
       case 5:
         p.innerHTML = '<iframe width="80%" height="100%" src="https://www.youtube.com/embed/NlsrJbVvjaA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
         imgs[4].classList.add('active');
         nav[4].classList.add('active');
         break;
    }
}