$(function(){
	// jquery knob plugin
	$(".dial").knob();
	
	// scrollspy
	$("body").scrollspy({ 
		target: "#main-nav" 
	});
	
	// init accordion status style
	$('.click').addClass('collapsed').on('click', function () {
		if( $(this).hasClass('collapsed') !== true){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
		}
	});
	
	// jquery scrollto plugin
	$("nav").localScroll();
	$("#about").localScroll();
	
	// jquery mixitup plugin
	$("#grid").mixitup();
	
	// jquery magnific popup lightbox plugin
	$('.image-link').magnificPopup({
		type: 'image',
		mainClass: 'mfp-with-zoom',
		
		zoom: {
			enabled: true,
			duration: 300, 
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		}
	});
	
	
	
});