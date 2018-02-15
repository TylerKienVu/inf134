$(document).ready(function() {

	if (isScrolledIntoView("#landing-page-heading")){
    	$("#landing-page-heading").removeClass("no-opacity");
    	$("#landing-page-heading").addClass('animated fadeInDown');

    	$("#demo-button").removeClass("no-opacity");
    	$("#demo-button").addClass('animated bounceInUp');
    } 

	/*Smooth Scrolling*/

	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 800, function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	      });
	    } // End if
	});

	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 500) {
	        $("nav").addClass("bg-custom");
	    } else {
	        $("nav").removeClass("bg-custom");
	    }	 

	   	if (isScrolledIntoView("#landing-page-heading")){
	    	$("#landing-page-heading").removeClass("no-opacity");
	    	$("#landing-page-heading").addClass('animated fadeInDown');

	    	$("#demo-button").removeClass("no-opacity");
	    	$("#demo-button").addClass('animated bounceInUp');
	    }   

	    if (isScrolledIntoView("#mission-statement")){
	    	$("#mission-statement").removeClass("no-opacity");
	    	$("#mission-statement").addClass('animated slideInLeft');
	    } 

	   	if (isScrolledIntoView("#share-button")){
	    	$("#share-button").removeClass("no-opacity");
	    	$("#share-button").addClass('animated bounceInLeft');

	    	$("#donate-button").removeClass("no-opacity");
	    	$("#donate-button").addClass('animated bounceInRight');	    	
	    } 

	   	if (isScrolledIntoView("#facebook")){
	    	$("#facebook").removeClass("no-opacity");
	    	$("#facebook").addClass('animated tada');

	    	$("#twitter").removeClass("no-opacity");
	    	$("#twitter").addClass('animated tada');

	    	$("#instagram").removeClass("no-opacity");
	    	$("#instagram").addClass('animated tada');
	    } 

	   	if (isScrolledIntoView("#diana")){
	    	$("#diana h4").addClass('animated tada');
	    } 
	  	if (isScrolledIntoView("#tyler")){
	    	$("#tyler h4").addClass('animated tada');
	    } 
	    if (isScrolledIntoView("#phuc")){
	    	$("#phuc h4").addClass('animated tada');
	    } 
	    if (isScrolledIntoView("#rhian")){
	    	$("#rhian h4").addClass('animated tada');
	    } 
	    if (isScrolledIntoView("#jason")){
	    	$("#jason h4").addClass('animated tada');
	    } 
	    if (isScrolledIntoView("#jenny")){
	    	$("#jenny h4").addClass('animated tada');
	    } 

	});

	/*-------------------------------*/


	/*Youtube Video Lazy Loading*/

	( function() {

	var youtube = document.querySelectorAll( ".youtube" );
	
	for (var i = 0; i < youtube.length; i++) {
		
		var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
		
		var image = new Image();
				image.src = source;
				image.addEventListener( "load", function() {
					youtube[ i ].appendChild( image );
				}( i ) );
		
				youtube[i].addEventListener( "click", function() {

					var iframe = document.createElement( "iframe" );

							iframe.setAttribute( "frameborder", "0" );
							iframe.setAttribute( "allowfullscreen", "" );
							iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

							this.innerHTML = "";
							this.appendChild( iframe );
				} );	
	};
	
	} )();

	/*--------------------------------*/

});

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

