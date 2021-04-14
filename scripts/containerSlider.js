$(document).ready(function(){
    $('.containerSlider').slick({
        autoplay: true,
        autoplaySpeed:2000,
        arrows:true,
        responsive: [
            {
            breakpoint: 480,
            settings: {
                arrows:false
            }
            }
        ]
    });
});