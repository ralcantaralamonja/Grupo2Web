$(function(){

    $(".repo-song-file").mouseenter(function(){
        $(this).stop().animate({ 'top': '-22px' }, 250 );
    });

    $(".repo-song-file").mouseleave(function(){
        $(this).stop().animate({ 'top': '0' }, 250 );
    });

    $("#boton").mouseenter(function () {
        $("#boton").css("background-color", "#FFFFFF").css("color", "#000000");
      });
      $("#boton").mouseleave(function () {
        $("#boton").css("background-color", "#b60472").css("color", "#FFFFFF");
      });

})