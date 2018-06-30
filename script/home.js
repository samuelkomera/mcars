$windowHeight=$(window).height();
$windowWidth=$(window).width();
// $section=$('section').height();
$footer=$('footer').height();
$header=$('header').height();

if($windowWidth > 900){
$('#content').height($windowHeight-$header-$footer);    
// $('#home-content').height($windowHeight-$header-$footer);
}