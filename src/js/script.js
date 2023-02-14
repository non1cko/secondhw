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

        
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

   $('.catalog-item_link').each(function(i) {
    $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })

   })
   $('.catalog-item_back').each(function(i) {
    $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })

   })
   //modal

   $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn(); 
   });
   $('.modal__close').on('click', function(){
     $('.overlay, #consultation, #thx, #order').fadeOut('slow');
   });
    $('.catalog-item__btn').each(function(i) {
        $(this).on('click', function() {
          $('#order .modal_descr').text($('.catalog-item_subtitle').eq(i).text());
          $('.overlay, #order').fadeIn();
        })

    });
    $("#consultation-form").validate();
    $("#consultation form").validate( {
       rules:{
        name: "required",
        phone: "required"
        email: {
            required: true,
            email: true
        }
       }
          
          
    })
    $("#order form").validate();
});

