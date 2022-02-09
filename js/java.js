$(function(){

    $(".play").click(function(){
        $(".audio__anime")[0].play();
        $(".play").css({"animation":"mover 3s linear infinite "})
        $(".pause").css({"animation":"none"})
    })
    
    $(".pause").click(function(){
        $(".audio__anime")[0].pause();
        $(".pause").css({"animation":"mover 3s linear infinite "})
        $(".play").css({"animation":"none"})
    })
})



















/*

*Formato de audio  1 *

const cuadro_1 = document.querySelector('.cuadro1')

window.addEventListener('scroll',()=>{
    cuadro_1.classList.toggle('active', window.scrollY > 0)
})*/

/*$(function(){

    $(".play").click(function(){
        $(".pause").css({"display":"block"})
        $(".play").css({"display":"none"})
        $(".audio__repro").css({"width":"400px"})

        $(".botones").css({"animation": "mover 2s  infinite  linear"})

        $(".musica")[0].play()

    })
    $(".pause").click(function(){
        $(".pause").css({"display":"none"})
        $(".play").css({"display":"block"})
        $(".audio__repro").css({"width":"0px"})

        $(".botones").css({"animation": "none "})

        $(".musica")[0].pause();
    })
})
*/