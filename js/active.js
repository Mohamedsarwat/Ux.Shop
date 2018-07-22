$(document).ready(function(){
    
	$(window).load(function() {
	  $('.flexslider').flexslider({
		animation: "slide",
		controlNav: "thumbnails"
	  });
	});
    
    		$(".tab1 .single-bottom").hide();
								$(".tab2 .single-bottom").hide();
								$(".tab3 .single-bottom").hide();
								$(".tab4 .single-bottom").hide();
								$(".tab5 .single-bottom").hide();
								
								$(".tab1 ul").click(function(){
									$(".tab1 .single-bottom").slideToggle(300);
									$(".tab2 .single-bottom").hide();
									$(".tab3 .single-bottom").hide();
									$(".tab4 .single-bottom").hide();
									$(".tab5 .single-bottom").hide();
								})
								$(".tab2 ul").click(function(){
									$(".tab2 .single-bottom").slideToggle(300);
									$(".tab1 .single-bottom").hide();
									$(".tab3 .single-bottom").hide();
									$(".tab4 .single-bottom").hide();
									$(".tab5 .single-bottom").hide();
								})
								$(".tab3 ul").click(function(){
									$(".tab3 .single-bottom").slideToggle(300);
									$(".tab4 .single-bottom").hide();
									$(".tab5 .single-bottom").hide();
									$(".tab2 .single-bottom").hide();
									$(".tab1 .single-bottom").hide();
								})
								$(".tab4 ul").click(function(){
									$(".tab4 .single-bottom").slideToggle(300);
									$(".tab5 .single-bottom").hide();
									$(".tab3 .single-bottom").hide();
									$(".tab2 .single-bottom").hide();
									$(".tab1 .single-bottom").hide();
								})	
								$(".tab5 ul").click(function(){
									$(".tab5 .single-bottom").slideToggle(300);
									$(".tab4 .single-bottom").hide();
									$(".tab3 .single-bottom").hide();
									$(".tab2 .single-bottom").hide();
									$(".tab1 .single-bottom").hide();
								})	
				
    
    
    
    
    
    
    
    
/*Start Carusal */
    
    var slider = $('#slider');
    var slidesWrapper = $('.slides');
    var slides = $('.slides li');
    var activeSlide = $('.slides.active');

    var timer = function() {
        setInterval(changeSlide, 7500);
    }

    function changeSlide() {
        var a = slidesWrapper.find('.active');
        
        var b = a.next('li');
        
        if( b.length === 0 ) {
            console.log();
            a.removeClass('active');
            slides.first().addClass('active');
        } else {
            a.removeClass('active');
            b.addClass('active');
        }
        //
    }

    timer();

    $('.slide-nav-down').click(function(e) {
        clearInterval(changeSlide);
        changeSlide();
    
    });

    $('.slide-nav-down').on('mousedown', function() {
        $(this).css({'opacity': 1});
    });

    $('.slide-nav-down').on('mouseup', function() {
        $(this).css({'opacity': 0.5});
    });
    
/*End Carousal */    
/*Nice Scroll */
$("body").niceScroll({
       cursorcolor: "#353745", 
       cursorwidth: "12px",
       cursorborderradius: "0" ,
       cursorborder: "0",
       cursorminheight:"20"
});

/*Loading */
 $(window).load(function(){
    $('.loading').fadeOut(5000) ;
});


    
    
    
$('.bxslider').bxSlider({
   slideWidth: 200,
    minSlides: 1,
    maxSlides: 4,
    moveSlides: 2,
    slideMargin: 3 ,
    auto:true  ,
    responsive:true
});
    
    
    

    
    
$(".progects .buttons .filter ").click(function(){
    
    $(this).addClass("active").siblings().removeClass("active");
		
});
	
	


$('.toggle-info').click(function(){
    
    $(this).toggleClass('selected').parent().next('.panel-body').slideToggle(50) ; 
    if($(this).hasClass('selected')){
    
    $(this).html('<i class="fa fa-minus"></i>') ;

    }
    else{
        
     $(this).html('<i class="fa fa-plus" aria-hidden="true"></i>') ;
    
    }
});
    });


