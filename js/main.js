(function ($) {

    'use strict';
    
    // variables
    var $isAnimatedSecond = $('.second .is-animated'),
    $isAnimatedSecondSingle = $('.second .is-animated__single'),
    $isAnimatedThird = $('.third .is-animated'),
    $isAnimatedThirdSingle = $('.third .is-animated__single'),
    $isAnimatedFourth = $('.fourth .is-animated'),
    $isAnimatedFourthSingle = $('.fourth .is-animated__single');
    
    // initialize fullPage
    $('#fullpage').fullpage({
    
      navigation: true,
      onLeave: function (index, nextIndex, direction) {
    
        /**
        * use the following condition: 
        *
        *   if( index == 1 && direction == 'down' ) {
        *
        * if you haven't enabled the dot navigation
        * or you aren't interested in the animations that occur 
        * when you jump (using the dot navigation) 
        * from the first section to another sections 
        */
    
        // first animation
        if (index == 1 && nextIndex == 2) {
        //   $isAnimatedSecond.addClass('animated fadeInUpBig');
          $isAnimatedSecond.addClass('animate__animated animate__bounceOutLeft');
          $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
          $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
          $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
          $isAnimatedSecondSingle.addClass('animate__animated animated__rollIn').css('animation-delay', '1.7s');
        }
    
        /**
          * use the following condition: 
          *
          *   else if( index == 2 && direction == 'down' ) {
          *
          * if you haven't enabled the dot navigation
          * or you aren't interested in the animations that occur 
          * when you jump (using the dot navigation) from the first section to the third one 
          */
    
        // second animation
        else if ((index == 1 || index == 2) && nextIndex == 3) {
            $isAnimatedThird.eq(0).addClass('animate__animated animate__fadeInRightBig').css('animation-delay', '.3s');
            $isAnimatedThird.eq(1).addClass('animate__animated animate__fadeInLeftBig').css('animation-delay', '.6s');
            $isAnimatedThirdSingle.addClass('animate__animated animate__bounceInDown').css('animation-delay', '1.2s');
          }
    
    
          /**
           * use the following condition:
           *
           *   else if( index == 3 && direction == 'down' ) {
           *
           * if you haven't enabled the dot navigation
           * or you aren't interested in the animations that occur 
           * when you jump (using the dot navigation) 
           * from the first or second section to the fourth one 
           */
    
          // third animation
          else if ((index == 1 || index == 2 || index == 3) && nextIndex == 4) {
              $isAnimatedFourth.addClass('animate__animated animate__zoomIn').css('animation-delay', '.6s');
              $isAnimatedFourthSingle.addClass('animate__animated animate__lightSpeedIn').css('animation-delay', '1.2s');
              $isAnimatedFourthSingle.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(this).removeClass('animate__lightSpeedIn').addClass('animate__zoomOutDown');
              });
            }
      } });
    
    
    
    })(jQuery);