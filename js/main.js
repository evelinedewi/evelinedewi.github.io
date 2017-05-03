// Make it rain!

/* --- h1 ---
animate "Company Name" to "CN" 2s after user landed on the page
*/

/* --- .header-nav-wrap ---
the bar is sticky as user is scrolling down the page 
  when #about is at top 0, 
    then hide the bar,
  then show the bar everytime user scrolls up,
*/

/* --- #statistics ---
when #statistics is on screen, the number starts counting up from zero until the end number 
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


/* --- #values ---

*/