$( document ).ready(function(){

	// scroll-spy
	$('a.smooth-scroll[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	    if (target.length) {
	      $('html, body').animate({
	        scrollTop: target.offset().top
	      }, 1000);
	      return false;
	    }
	  }
	});

	//smooth scrolling
  $(function(){
  	$('a[href*="#"]').click(function() {
   		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
	      if ($target.length) {
	        var targetOffset = $target.offset().top;
	        $('html,body').animate({scrollTop: targetOffset}, 10);
	          return false;
        }
   		}
 		});
	});

  //smoove transition
  $('.block').smoove({offset:'40%'});


});