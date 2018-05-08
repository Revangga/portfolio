$('.page-scroll').on('click', function(e) {

 var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html , body').animate({
  scrollTop: elemenTujuan.offset().top - 50
 }, 'easeInOutElastic' );

 e.preventDefault();
});﻿

// paralax

$(window).on('load', function() {
  $('.pKiri').addClass('pMuncul');
  $('.pKanan').addClass('pMuncul');
})


$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  $('.jumbotron img').css({
    'transform' : 'translate(0px, '+ wScroll/3 + '%)'
  })

  $('.jumbotron h1').css({
    'transform' : 'translate(0px, '+ wScroll/1.2 + '%)'
  })

  $('.jumbotron p').css({
    'transform' : 'translate(0px, '+ wScroll/.6 + '%)'
  })

  //portofolio
if(wScroll > $('.portofolio').offset().top - 250) {
    $('.portofolio .thumbnail').each(function(i){
      setTimeout(function() {
        $('.portofolio .thumbnail').eq(i).addClass('muncul');
      }, 200 * i);
    });
}


})
