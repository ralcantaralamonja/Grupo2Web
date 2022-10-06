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

    //Carousel//

    $(".innerpage-thumb").mouseenter(function(){
      $(this).stop().animate({ 'top': '-22px' }, 50 );
    });

    $(".innerpage-thumb").mouseleave(function(){
      $(this).stop().animate({ 'top': '0' }, 50 );
    });

/* Desaparecer Demos */

let quitarFondo = true;


$(".sec-v-title h2 span").click(function () {
  if (quitarFondo === true) {
    $(".songs").hide(0);
    quitarFondo = false;
  }
  else {
    $(".songs").show(0);
    quitarFondo = true;
  }
});

/* Desaparecer Demos */


    $('.innerpages').slick({
      dots: true,
      infinite: true,
      arrows: false,
  
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    });

})

/* fetch */

$(".enlaces a").click(function () {
  seleccionarPagina(this)
})

function seleccionarPagina(paginaSeleccionada) {

  let nombrePagina = $(paginaSeleccionada).attr("urlpage");

  console.log(nombrePagina);

  fetch("../pages/"+nombrePagina)
    .then((response) => response.text())
    .then((data) => {
      $("#main-content").html(data);
    });
}

/* fetch */