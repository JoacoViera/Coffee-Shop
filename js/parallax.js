document.addEventListener('DOMContentLoaded', (event) => {
    
    $(window).scroll(function(){
        var windowWidth = $(window).width();

        if(windowWidth > 1000){
            var scroll = $(window).scrollTop();

            $('header .textos').css({
                'transform': 'translate(0px,' + scroll / 3 + '%)'
            });

            $('.acerca-de article').css({
                'transform': 'translate(0px,-' + scroll / 4 + '%)'
            });
        }
    });

    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth < 1000){
            $('.acerca-de article').css({
                'transform': 'translate(0px,0px)'
            });
        }

        $('header .textos').css({
            'transform': 'translate(0px,0px)'
        });
    });

});