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

});