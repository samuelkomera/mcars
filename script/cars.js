$windowHeight=$(window).height();
$windowWidth=$(window).width();
// $section=$('section').height();
$footer=$('footer').height();
$header=$('header').height();

if($windowWidth > 1200){
$('#content').height($windowHeight-$header-$footer);
$('#content').height();
$('#content').css("overflow","scroll");
}