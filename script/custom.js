$window=$(window).height();
// $section=$('section').height();
$footer=$('footer').height();
$header=$('header').height();

$('content').height($window-$header-$footer);
$('content img').height($window-$header-$footer);

$('.carousel').carousel({
    interval: 3000
  })