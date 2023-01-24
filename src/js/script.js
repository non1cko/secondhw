$(document).ready(function(){
    $('.carousel__item').slick({
        speed: 500,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img id="arrows_car" src="../icons/l-arr.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img id="arrows_car" src="../icons/r-arr.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
      });
});

