$(document).ready(function () {
	"use strict";
  new WOW().init();

	svg4everybody({});

	Modernizr.on('webp', function(result) {
		if (result) {
			// supported
		} else {
			// not-supported
    }
    
  });
  $('.const-toggle').on("click", function(){
    $('.constructor').toggleClass('animated')
  })

  
  $(".hamburger").on("click", function () {
    $(this).toggleClass('is-active')
    $('.content').toggleClass('is-active')
    $('.mobile-header').toggleClass('is-active')
    $('.header').toggleClass('is-active')
  });

	var bannerSlider= new Swiper('.swiper-container.banner-slider', {
      autoplay: true,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next.banner-button-next',
        prevEl: '.swiper-button-prev.banner-button-prev',
      },
      pagination: {
        el: '.swiper-pagination.banner-pagination',
        type: 'bullets',
        clickable: true,
      },
  });
  
	var bannerSliderTitle= new Swiper('.swiper-container.banner-slider-title', {
      speed: 400,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      freeMode: true,
      simulateTouch: false,
  });

  if ($('div').is('.banner-slider')) {
    var percent = (bannerSlider.activeIndex + 1) * 100 / bannerSlider.slides.length
      $('.bar-pagination').css('height', percent + '%')
      $('.fraction-current').html(bannerSlider.activeIndex + 1)
      $('.fraction-total').html(bannerSlider.slides.length)
    bannerSlider.on('slideChange', function () {
      var percent = (bannerSlider.activeIndex + 1)*100 / bannerSlider.slides.length
      bannerSliderTitle.slideTo(bannerSlider.activeIndex, 300)
      $('.fraction-current').html(bannerSlider.activeIndex + 1)
      $('.fraction-total').html(bannerSlider.slides.length)
      $('.bar-pagination').css('height', percent + '%')
    });
  }
	var reviewSliderText= new Swiper('.swiper-container.review-slider-text', {
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      freeMode: true,
      simulateTouch: false,
      // watchSlidesVisibility: true,
      // watchSlidesProgress: true,
      breakpoints: {
    // when window width is >= 320px
        768: {
         autoheight: true
        },
      }
    });

	var reviewSlider= new Swiper('.swiper-container.review-slider-photo', {
      thumbs: {
        swiper: reviewSliderText
      },
      
      effect: 'flip',
      pagination: {
        el: '.swiper-pagination',
      },
			speed: 400,
      navigation: {
        nextEl: '.swiper-button-next.review-next',
        prevEl: '.swiper-button-prev.review-prev',
      },
      pagination: {
        el: '.swiper-pagination.review-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return  '<span class="' + currentClass + '"></span>' +
                  ' | ' +
                  '<span class="' + totalClass + '"></span>';
        },
      },

  });
  
	var caseSlider= new Swiper('.swiper-container.case-slider', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 400,
    navigation: {
      nextEl: '.swiper-button-next.case-next',
      prevEl: '.swiper-button-prev.case-prev',
    },
    breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  }
  });
  
  $('.label-container').children('.input-text').on('input', function (e) {
    $(this).parent('.label-container').addClass('valid')
	});

  $('.label-container').children('.input-text').focus(function(){
    $(this).siblings('span').addClass('active')
  })

  $('.label-container').children('.input-text').blur(function(e){
    if (e.target.value == '') {
    $(this).siblings('span').removeClass('active')
    $(this).parent('.label-container').removeClass('valid')
  }
  })


  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 200,
    to: 500,
  });

  $('.icon-reload').on('click', function(){
    $(this).addClass('active')
    setTimeout( function() { 
    $('.icon-reload').removeClass('active')} , 500)
  })
  
  ;( function ( document, window, index )
	{
		var inputs = document.querySelectorAll( '.inputfile' );
		Array.prototype.forEach.call( inputs, function( input )
		{
			var label	 = input.nextElementSibling,
				labelVal = label.innerHTML;
	
			input.addEventListener( 'change', function( e )
			{
				var fileName = '';
				if( this.files && this.files.length > 1 )
					fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
				else
					fileName = e.target.value.split( '\\' ).pop();
	
				if( fileName )
					label.querySelector( 'span' ).innerHTML = fileName;
				else
					label.innerHTML = labelVal;
			});
	
			// Firefox bug fix
			input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
			input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
		});
  }( document, window, 0 ));

  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

})
