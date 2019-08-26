document.addEventListener('DOMContentLoaded', (event) => { 
    //MENU APARECE LENTAMENTE

    //http://www.java2s.com/Tutorials/Javascript/Buildin_Object/Style/Style_animation.html
    
    //object.style.animation='name duration timingFunction delay iterationCount direction fillMode playState';

    const header = document.querySelectorAll('#menu a');

    header.forEach((element,index) => {
        element.style.top = '-200px';
        element.style.WebkitAnimation = `moveDown ${2+index*0.5}s`;
        element.style.top = '0px';
    });

    //SCROLL SUAVE AL APRETAR EN UN BOTON DEL MENU

    let acercaDe = document.querySelector("#acerca-de").offsetTop,
        menu = document.querySelector("#platillos").offsetTop,
        galeria = document.querySelector("#galeria").offsetTop,
        ubicacion = document.querySelector("#ubicacion").offsetTop

        if(window.screenX > 1000){
        
            let headerTextos = document.querySelector('header .textos');
            headerTextos.style.WebkitAnimation = 'titleAppear 5s';
        
            $('#btn-acerca-de').on('click',function(e){
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: acercaDe -100
                }, 500);
            });

            $('#btn-menu').on('click',function(e){
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: menu
                }, 500);
            });

            $('#btn-galeria').on('click',function(e){
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: galeria
                }, 500);
            });

            $('#btn-ubicacion').on('click',function(e){
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: ubicacion +100
                }, 500);
            });
    } else{
        $('#btn-acerca-de').on('click',function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: acercaDe 
            }, 500);
        });

        $('#btn-menu').on('click',function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: menu
            }, 500);
        });

        $('#btn-galeria').on('click',function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: galeria
            }, 500);
        });

        $('#btn-ubicacion').on('click',function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: ubicacion 
            }, 500);
        });

    }
});