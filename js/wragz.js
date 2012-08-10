$(document).ready(function(){  
    slideshows.init();
}); 

var slideshows = {
    
    init:function(){
        var $slideshows = $('.slideshow-container'); 

        $slideshows.each(function(i){
            var animation_duration = 750;
            var $nextButton = $(this).find('.next-slide');
            var $prevButton = $(this).find('.prev-slide');

            $nextButton.addClass('half-transparent');
            $prevButton.addClass('half-transparent');

            var $slides = $(this).find('li.slide');

            var numSlides = $slides.length;
            var currentSlide = numSlides - 1;
                    
            $nextButton.on('click', function(event){
                event.preventDefault();
                if(currentSlide == 0){
                    $bottomSlide = $slides.eq(0);
                    $topSlide = $slides.eq(currentSlide-1);
                    $slides.fadeTo(0,0);
                    $bottomSlide.fadeTo(0,1);
                    $topSlide.fadeTo(animation_duration, 1, function(){
                        $slides.fadeTo(0,1);
                    });
                    currentSlide = numSlides;
                }
                else{
                    $slides.eq(currentSlide).fadeTo(animation_duration, 0);
                    //$slides.eq(currentSlide).addClass('transparent');

                }
                currentSlide--;    
            });

            $prevButton.on('click', function(event){
                event.preventDefault();
                if(currentSlide == (numSlides-1)){ // top slide
                    $topSlide = $slides.eq(currentSlide);
                    $bottomSlide = $slides.eq(0);
                    $slides.fadeTo(0,0);
                    $topSlide.fadeTo(0,1);
                    $bottomSlide.fadeTo(0,1);
                    $topSlide.fadeTo(animation_duration, 0);
                    currentSlide = 0;
                }
                else{
                    currentSlide++;   
                    $slides.eq(currentSlide).fadeTo(animation_duration, 1);
                }
            });

            $nextButton.mouseenter(function() {
                $nextButton.fadeTo(0.3, 1);
            });
            $nextButton.mouseleave(function() {
                $nextButton.fadeTo(0.3, 0.5);
            });

            $prevButton.mouseenter(function() {
                $prevButton.fadeTo(0.3, 1);
            });
            $prevButton.mouseleave(function() {
                $prevButton.fadeTo(0.3, 0.5);
            });
        })        
    }

}