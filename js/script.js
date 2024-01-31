
//   Picture Slider //

$(function(){
     $('.Slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        prevArrow:".left",
        nextArrow:".right",

})

      });


// Darkmode plugin //

function addDarkmodeWidget() {
    new Darkmode().showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);


































     
              