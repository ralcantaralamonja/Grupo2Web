$(function(){

    $(".repo-song-file").mouseenter(function(){
        $(this).stop().animate({ 'top': '-22px' }, 250 );
    });

    $(".repo-song-file").mouseleave(function(){
        $(this).stop().animate({ 'top': '0' }, 250 );
    });

})