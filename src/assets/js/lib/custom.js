import $ from 'jquery';
window.jQuery = $;

$(document).ready(function() {
    // $('.card.main').hover(
    //     ()=>{
    //       $('.card.image').addClass( "hover" );
    //     }, 
    //     ()=>{
    //       $('.card.image').removeClass( "hover" );
    //     }
    // );
    $('.card.main').on( "click",
        ()=>{
            $('.card.main').addClass( "fall" );
            $('.card.main').removeClass( "bounce" );
            $('svg#circuit .path').addClass("animation");
          },
    );
    
    var friction=5;
    var cardW=$('.card.main').width();
    var cardH=$('.card.main').height();

    $('.container').mousemove(function(event){
        var offsetY=($(window).height() / 2);
        var moveY = offsetY - event.pageY;
        var percentY = moveY / offsetY;
        var translate = 'translateY(' + (friction * percentY) +'px)';
        $('.card.main.bounce').css({
            '-webit-transform': translate,
            '-moz-transform': translate,
            'transform': translate
        });
        // var offsetX=(($(window).width()-cardW) / 2);
        // var offsetY=(($(window).height()-cardH) / 2);
        // var moveX = event.pageX - offsetX;
        // if (moveX > 0){
        //     moveX-=cardW;
        //     if (moveX<0) 
        //         moveX=0;               
        // }        
        // var moveY = event.pageY - offsetY;
        // if (moveY > 0){
        //     moveY-=cardH;
        //     if (moveY<0) 
        //         moveY=0;               
        // }
        // var percentX = moveX / offsetX;
        // var percentY = moveY / offsetY;
        
        // var debug = $('#debug');
        // debug.text($('.card.main').attr('class'));

        // var translate = 'translateX(' + (friction * percentX) + 'px) translateY(' + (friction * percentY) +'px)';

        // $('.container').css({
        //     '-webit-transform': translate,
        //     '-moz-transform': translate,
        //     'transform': translate
        // });
    });

    $('.card.image').click(function(){
        $(this).toggleClass('fullscreen');
      });
})