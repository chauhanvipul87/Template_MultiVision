function killDrop() {
    $('.menu a').removeClass('active');
    $('#menu-drop').hide();
    $('#drop-kill').hide();
}
$(function () {
    $('.menu a').click(function (event) {
        if ($(this).hasClass('active')) {
            killDrop();
        } else {
            killDrop();
            $(this).addClass('active');
            var dropId = '#' + $(this).attr('id').replace('trigger', 'drop');
            if ($(dropId).length != 0) {
                $(dropId).show();
                event.preventDefault();
                $('#drop-kill:hidden').show();
                return false;
            }
        }
        return true;
    });
	
});
$(function () {
    $('#drop-kill').click(killDrop);
   
});
$(function () {
	
	if (window.devicePixelRatio == 2) {
          
          var images = $("img.csimg");
          
          for(var i = 0; i < images.length; i++) {
            
            var imageType = images[i].src.substr(-4);
            var imageName = images[i].src.substr(0, images[i].src.length - 4);
            imageName += "@2x" + imageType;
          	
            images[i].src = imageName;
          }
     }
	 /* *********  Start - For Offering slide*********** */	 
	$("a#offering").click(function () {
		$("div.offering-slide").slideToggle(500);	
		
		var prev = $("a.open").attr('id');	
		$("#"+prev+"tabs").slideUp(500);
		var navlink = $("a.open").attr('id');			
		$("a#"+navlink).removeClass("open");
		
		//$(".offering-slide").mouseleave(function() {			
//				$(".offering-slide").slideUp(500);
//		});	
		return !1
	});
	/* *********  End - For Offering slide*********** */
	
	/* *********  Start - For Call*********** */	 
	$(".headercall a").click(function () {
		var prev = $("a.open").attr('id');	
		$("#"+prev+"tabs").slideUp(500);
		var navlink = $("a.open").attr('id');			
		$("a#"+navlink).removeClass("open");
		
		return !1
	});
	/* *********  End - For Call*********** */	
	
	/* *********  Start - For Menu Tabbing *********** */
	$("#nav a").click(function () {
		
		var navlink = $(this).attr('id');					
				
		$("#menuNav").mouseleave(function() {			
				$("#"+navlink+"tabs").slideUp(500);
				$("a#"+navlink).removeClass("open");
		});	
		
		if(navlink == 'menuLink'){	
			strLink = $(this).attr('href');
			$(this).attr('href',strLink);
			
		}			
		else{		
			var prev = $("a.open").attr('id');	 		
			
			if (!$("a#"+navlink).hasClass("open") ) {					
				$("a#"+navlink).addClass("open");
				var newHeight = $("#header").height();
				$("#"+navlink+"tabs").css("top", newHeight + "px");				
				
				$("a#"+prev).removeClass("open");
				$("#"+prev+"tabs").slideUp(500);			
				
				$("#"+navlink+"tabs").slideDown(500);			
							
			}
			else {
				$("a#"+navlink).removeClass("open");				
				$("#"+navlink+"tabs").slideUp(500);
			}				
										
			return !1						
		}	
	});		
	/* *********  End - For Menu Tabbing *********** */	 
});
$(function() {
	$( ".tabs" ).tabs({});
	$( "#tabs" ).tabs({});
	$( ".bdtads" ).tabs({});
	$( ".bdmenutab" ).tabs({});
	$( ".accordionin" ).accordion({
	heightStyle: "content"
	});
	$( ".accordionsidebar" ).accordion({
	heightStyle: "content"
	});
});
$(document).ready(function() {
$('.fancybox-media')
	.attr('rel', 'media-gallery')
		.fancybox({
			openEffect : 'none',
			closeEffect : 'none',
			prevEffect : 'none',
			nextEffect : 'none',

			arrows : false,
			helpers : {
				media : {},
				buttons : {}
	}
});
$('.fancybox').fancybox({
   		padding : 5
   });
$('.demo').fancybox();
});
$(document).ready(function() {
	$("#owl-demo").owlCarousel({
		navigation : true,
		pagination : false
	});
});
jQuery(window).load()
	$('.homeslider').royalSlider({
	  //autoHeight:true ,
	  arrowsNav:true ,
	  fadeinLoadedSlide: false,
	  controlNavigationSpacing: 0,
	  controlNavigation: 'bullets',
	  imageScaleMode: 'none',
	  imageAlignCenter:false,
	  loop: true,
	  numImagesToPreload: 6,
	  keyboardNavEnabled: true,
	  navigateByClick:true,
	  sliderDrag:true,
      usePreloader: true,
	  autoPlay: {
    		// autoplay options go gere
    		enabled: false,
			delay: 5000,
    		pauseOnHover: true
    	}
});
jQuery(document).ready(function($) {
  $('.csslider').royalSlider({
	
    arrowsNav: false,
    fadeinLoadedSlide: true,
    controlNavigationSpacing: 0,
    controlNavigation: 'thumbnails',

    thumbs: {
      autoCenter: false,
      fitInViewport: true,
      orientation: 'horizontal',
      spacing: 0,
      paddingBottom: 0
    },
    keyboardNavEnabled: false,
    imageScaleMode: 'fill',
    imageAlignCenter:true,
    slidesSpacing: 0,
    loop: false,
    loopRewind: true,
	navigateByClick:false,
	sliderDrag:	false,
    numImagesToPreload: 6,
	autoPlay: {
    		// autoplay options go gere
    		enabled: true,
			delay: 5000,
    		pauseOnHover: true
    	}
  });
});
jQuery(document).ready(function($) {
  $('.iphoneslider').royalSlider({
    arrowsNav: false,
    fadeinLoadedSlide: true,
    controlNavigationSpacing: 0,
    controlNavigation: 'thumbnails',
    thumbs: {
      autoCenter: true,
      fitInViewport: true,
      orientation: 'horizontal',
      spacing: 0,
      paddingBottom: 0
    },
    keyboardNavEnabled: false,
    imageScaleMode: 'fill',
    imageAlignCenter:true,
    slidesSpacing: 0,
    loop: false,
    loopRewind: true,
	navigateByClick:false,
	sliderDrag:	false,
    numImagesToPreload: 6,
  });
});
jQuery(document).ready(function($) {
	$('.blogslider').royalSlider({
	  autoHeight:true ,
	  arrowsNav:false ,
	  fadeinLoadedSlide: false,
	  controlNavigationSpacing: 0,
	  controlNavigation: 'bullets',
	  imageScaleMode: 'none',
	  imageAlignCenter:false,
	  loop: false,
	  numImagesToPreload: 6,
	  keyboardNavEnabled: true,
	 navigateByClick:false,
	 sliderDrag:false,
      usePreloader: true,
	  autoPlay: {
    		// autoplay options go gere
    		enabled: true,
			delay: 5000,
    		pauseOnHover: true
    	}
	});
});
jQuery(window).load()
	$('.arrowSlider').royalSlider({
	  autoHeight:true ,
	  arrowsNav:true ,
	  fadeinLoadedSlide: false,
	  controlNavigationSpacing: 0,
	  controlNavigation: 'none',
	  imageScaleMode: 'none',
	  imageAlignCenter:false,
	  loop: false,
	  numImagesToPreload: 6,
	  keyboardNavEnabled: true,
	 navigateByClick:false,
	 sliderDrag:false,
      usePreloader: true,
	  autoPlay: {
    		// autoplay options go gere
    		enabled: true,
			delay: 5000,
    		pauseOnHover: true
    	}
});
jQuery(window).load()
	$('.mobileslider').royalSlider({
	  autoHeight:true ,
	  arrowsNav:true ,
	  fadeinLoadedSlide: false,
	  controlNavigationSpacing: 0,
	  controlNavigation: 'none',
	  imageScaleMode: 'none',
	  imageAlignCenter:false,
	  loop: false,
	  numImagesToPreload: 6,
	  keyboardNavEnabled: true,
	 navigateByClick:false,
	 sliderDrag:false,
      usePreloader: true,
	  autoPlay: {
    		// autoplay options go gere
    		enabled: true,
			delay: 4000,
    		pauseOnHover: true
    	}
});
$(document).ready(function () {
  $("div.circleholder").jPages({
      containerID: "businessneedlist",
        first       : false,
        previous    : false,
        next        : false,
        last        : false,
        midRange    : 10,
		perPage		: 8,
        links       : "blank"
    });
	$("div.holder").jPages({
      containerID: "workthumb"
    });
});
$(document).ready(function () {
  $("div.circleholder").jPages({
      containerID: "protfoliolist",
        first       : false,
        previous    : false,
        next        : false,
        last        : false,
        midRange    : 10,
		perPage		: 3,
        links       : "blank"
    });
});
$(document).ready(function () {
  $("div.circleholder").jPages({
      containerID: "onelist",
        first       : false,
        previous    : false,
        next        : false,
        last        : false,
        midRange    : 10,
		perPage		: 1,
        links       : "blank"
    });
});
/* ----------------- Navigation ----------------- */
(function($){
	$(document).ready(function(){
	$(".leftsidenav li").hover(
			function () {
				$(this).find('ul:first').css({
					visibility: "visible",
					display: "none"
				}).stop(true, true).fadeIn(100);
			},
			function () {
				$(this).find('ul:first').css({
					visibility: "visible",
					display: "block"
				}).stop(true, true).fadeOut(100);
			}
	);

	selectnav('responsive', {
		label: 'Menu',
		nested: true,
		indent: '&nbsp;&nbsp;&nbsp;'
	});

});
})(this.jQuery);
// iphone company section
	$(".company_grid a").mouseover(function() {
		$(".company_grid a").removeClass("grid_on");
		$(this).addClass("grid_on");
		var activeTab = $(this).attr("rel");
		$(".right_grid_item").hide();
		$(activeTab).show();
		return false;
	});
	$(".company_grid a").click(function() {
		return false;
});
