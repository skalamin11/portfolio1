$(document).ready(function(){
	//STICKY NAVBAR
	$(window).scroll(function(){
		if($(window).scrollTop() > 0){
			$('nav').addClass('sticky')
		}
		else{
			$('nav').removeClass('sticky')
		}
	});

	
	//	ACTIVE MENU
	$('nav ul li a').click(function(){
		$('nav ul li a').removeClass("menu-active");
		$(this).addClass("menu-active");
	});
	$('nav .logo a').click(function(){
		$('nav ul li a').removeClass("menu-active");
		$('nav ul li:first-child a').addClass("menu-active");
	});
	
//	 PROGRESSBAR ACTIVE
	
    $('.html').rProgressbar({
        percentage: 95
    });
    $('.java').rProgressbar({
        percentage: 80
    });
    $('.php').rProgressbar({
        percentage: 40
    });
    $('.responsive').rProgressbar({
        percentage: 95
    });
    $('.test').rProgressbar({
        percentage: 90
    });
	$('.cms').rProgressbar({
        percentage: 45
    });

//	isotope ACTIVE
	$('.button').on( 'click', 'li', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
			return false;
		});
		
		var $grid =	$('.projects').isotope({
		  itemSelector: '.mix',
		  percentPosition: true,
		  masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth:1
		  }
		});
	$('.work-section ul li').click(function(){
		$('.work-section ul li').removeClass("menu-active");
		$(this).addClass("menu-active");
	});
	//  BLOG SLIDER ACTIVE

			$('.slider-active').owlCarousel({
			loop:true,
			nav:false,
			autoplay:true,
			margin:22,
			autoplayTimeout:3000,
			smartSpeed:1500,
			autoplayHoverPause:false,
			responsive:{
			0:{
				items:1
			},
			481:{
				
				items:1
			},
			577:{
				items:2
			},
			768:{
				items:2
			},
			993:{
				items:3
			}
			}	
		})
	
	
	
	
});
//MOBILE MENU DESINE
	function openNav(){
			document.getElementById("myNav").style.width="60%"
		}
		function closeNav(){
			document.getElementById("myNav").style.width="0%"
	};
	