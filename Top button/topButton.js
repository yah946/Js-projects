

let btn = document.getElementById('btn');

window.onscroll = function () {
    if (scrollY >= 400){
        btn.style.display='block';
    }
    else{
        btn.style.display='none';
    }
}

btn.addEventListener('click', function (){
    // window.scrollTo(0,0);
    scroll({left:0,top:0,behavior:"smooth"})

})
