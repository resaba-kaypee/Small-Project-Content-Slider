$(function(){
  //set options
  let speed = 500;
  let autoswitch = false;
  let autoswitch_speed = 4000;

  //add initial active
  $('.slide').first().addClass('active');
  
  // hide all slides
  $('.slide').hide();
  
  //show first slide
  $('.slide').first().show();

  // next button
  $('#next').click(nextSlide)

  // prev button
  $('#prev').click(prevSlide)

  function nextSlide(){
    $('.active').removeClass('active').addClass('prev');
    if($('.prev').is(':last-child')){
      $('.slide').first().addClass('active')
    } else{
      $('.prev').next().addClass('active');
    }
    $('.prev').removeClass('prev');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }
  
  function prevSlide(){
    $('.active').removeClass('active').addClass('prev');
    if($('.prev').is(':first-child')){
      $('.slide').last().addClass('active')
    } else{
      $('.prev').prev().addClass('active');
    }
    $('.prev').removeClass('prev');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }
})