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


    let FondoDemos = true;


    $(".sec-v-title h2 span").click(function () {
      if (FondoDemos === true) {
        $(".songs").hide(0);
        FondoDemos = false;
      }
      else {
        $(".songs").show(0);
        FondoDemos = true;
      }
    });
    
    /* Desaparecer Demos */
    
/* Desaparecer Great*/  
let FondoGreat = true;

$("#carrete").click(function () {
  if (FondoGreat === true) {
    $("#carrusa").hide(0);
    FondoGreat = false;
  }
  else {
    $("#carrusa").show(0);
    FondoGreat = true;
  }
});

/* Desaparecer landing */

let FondoLanding = true;
$("#landing").click(function () {
  if (FondoLanding === true) {
    $(".lading1").hide(0);
    FondoLanding = false;
  }
  else {
    $(".lading1").show(0);
    FondoLanding = true;
  }
});

/* Desaparecer landing */

/* Desaparecer video */

let videoY2 = true;

$("#top-albums h2 span").click(function () {
  
  if (videoY2 === true) {
    $("#desp-video").hide(0);
    videoY2 = false;
  }
  else {
    $("#desp-video").show(0);
    videoY2 = true;
  }
  
});

/* Desaparecer video */

/* Desaparecer Great*/

/* fetch */

$(".enlaces a").click(function () {
  seleccionarPagina(this)
})

function seleccionarPagina(paginaSeleccionada) {

  let nombrePagina = $(paginaSeleccionada).attr("urlpage");

  console.log(nombrePagina);

  fetch("pages/"+nombrePagina)
    .then((response) => response.text())
    .then((data) => {
      $("#main-content").html(data);
    });
}

/* fetch */

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