$windowHeight=$(window).height();
$windowWidth=$(window).width();
// $section=$('section').height();
$footer=$('footer').height();
$header=$('header').height();


$test=$('#content').height();

$('.carousel').carousel({
    interval: 3000
  })

if($windowWidth >1000 ){
  $('.block').css("margin-top",$header);
  $('#content').height($windowHeight-$header-$footer-$header);
}
