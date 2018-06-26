$window=$(window).height();
// $section=$('section').height();
$footer=$('footer').height();
$header=$('header').height();

$('content').css("margin-top","$header");


$('content').height($window-$header);
$('content img').height($window-$header);

$('.carousel').carousel({
    interval: 3000
  })