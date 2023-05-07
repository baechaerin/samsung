

$(function(){ ///문서다읽고 실행

 $('.widget-lang').hover(function(){
    $(this).addClass('on');
 },function(){
    $(this).removeClass('on');
 })

  // AOS.init();

  var swiper1 = new Swiper(".group-story", {
    // touchRatio:0, 마우스컨트롤
    slidesPerView:'auto'
  });

  var swiper2 = new Swiper(".group-news", {
    // touchRatio:0, 마우스컨트롤
    slidesPerView:'auto'
  });
  

  $(window).resize(function(){
    w = window.innerWidth;
    swiper1.slideTo(0);
    swiper2.slideTo(0);

    if (w >= 768) {
      swiper1.disable()
      swiper2.disable()
    } else {
      swiper1.enable()
      swiper2.enable()
    }
  })

  $(window).trigger('resize');

  // $('.accordion-item').on('click',function(){
  //   $(this).find('.group-content').toggleClass('on');
  // });	
  
  // $('.accordion-item').click(function(){
  //   if($(this).find('.group-content').hasClass('on')){
  //     $(this).find('.group-title .arrow').addClass('active')
  //   }else{
  //     $(this).find('.group-title .arrow').removeClass('active')
  //   }
    
  // })
  
  $('.accordion-list .group-title').click(function(){
    if($(this).siblings('.group-content').hasClass('on')){
      $(this).removeClass('on').siblings('.group-content').removeClass('on')
    }else{
      $(this).addClass('on').siblings('.group-content').addClass('on')
    }
  })


$('.cont-list').each(function(i,el){

  $(window).scroll(function(){
    curr = $(window).scrollTop();
    storyOffset = $(el).offset().top;
    
    if (curr >= storyOffset-(window.innerHeight/2)){
      $(el).addClass('ontrans')
    }else if(curr < storyOffset-window.innerHeight){
      $(el).removeClass('ontrans')
    }
    
  })

})

$('.header .btn-nav').click(function(){
  $('body').toggleClass('hidden')
  $('header').toggleClass('on');
})

$('.header .btn-nav').click(function(){
  if($('.header').hasClass('on')){
    $('.header .btn-nav').addClass('active')
  }else{
    $('.header .btn-nav').removeClass('active')
  }
  
})


})//지우지마세요