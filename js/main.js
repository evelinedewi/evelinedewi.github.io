// Make it rain!

/* --- header ---
the bar is sticky as user is scrolling down the page; 
  when #about is at top 0, 
    hide the bar;
  then show the bar everytime user scrolls up,
*/

/* --- #statistics ---
when #statistics is on screen, the number starts counting up from zero until specified number 
*/
var distanceToTop;
var distanceScrolled;
var alreadyRan = false;

$(window).on('scroll', function () {  
     distanceToTop = $('#statistics').offset().top;
     distanceScrolled = $(window).scrollTop();

    if (distanceScrolled >= distanceToTop && alreadyRan === false) {
      alreadyRan = true;
      console.log('test');
        $('.counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
          duration: 3000,
          easing: 'linear',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
        })
      })
    }
})

/* --- smooth scrolling links ---*/
jQuery(document).ready(function($) {
    $(".scroll").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000, 'swing');
    });
});