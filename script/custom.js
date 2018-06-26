$window=$(window).height();
// $section=$('section').height();
$footer=$('footer').height();
$header=$('header').height();


$('content img').height($window-$header-$footer);

$('a').hover.css("visibility","visible");
$('.carousel').carousel({
    interval: 5
  })