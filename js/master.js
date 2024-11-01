const btnmenu = document.querySelector('.menuclick')
const menu = document.querySelector('.menu')
const close= document.querySelectorAll('#close')
const pic = document.querySelectorAll('.pic figure')
const img = document.querySelectorAll('.pic figure img')
const txt = document.querySelector('.para')
const fig = document.querySelector('.fig')
const foot = document.querySelector('#footer')
console.log(menu);











btnmenu.addEventListener('click' , ()=>{
    menu.style.top='0'
    menu.style.opacity='1'

})
close[0].addEventListener('click', ()=>{
    menu.style.top='-100%'
    menu.style.opacity='0'
})



window.addEventListener('scroll', (e)=>{
    let st = window.scrollY
    console.log(st);
    img[0].style.transform='translateY('+(st/10)+'%)'
    if(st<200){
          img[0].style.transform='translateY('+(st)+'px)'
          img[0].style.opacity='1'
          img[0].classList.remove('tran')
    }else if(st<900){
        img[0].classList.add('tran')
        img[0].style.opacity='0'
        img[1].style.transform='translateY('+(st-300)+'px)'
        img[1].style.opacity='1'
        img[1].classList.remove('tran')
    }else if(st<1600){
        img[1].classList.add('tran')
        img[1].style.opacity='0'
        img[2].style.transform='translateY('+(st-890)+'px)'
        img[2].style.opacity='1'
        img[2].classList.remove('tran')
    }else if(st<2000){
        img[2].classList.add('tran')
        img[2].style.opacity='0'
        img[3].style.transform='translateY('+(st-1500)+'px)'
        img[3].style.opacity='1'
        img[3].classList.remove('tran')
    }else if (st<3000){
         img[4].style.transform='translateY('+(st-1800)+'px)'
         txt.style.transform='translateY('+(-st+2000)+'px)'
    }
    if(st>3050){
        fig.classList.add('pos')
    }
    if(st>4206){
        foot.classList.add('posi')
    }
    
    

})