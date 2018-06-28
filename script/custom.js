$windowHeight=$(window).height();
$windowWidth=$(window).width();
// $section=$('section').height();
$footer=$('footer').height();
$header=$('header').height();

console.log($footer);

console.log($windowHeight);
console.log($header);


$test=$('#content').height();
console.log($test);

$('.carousel').carousel({
    interval: 3000
  })

if($windowWidth >1000 ){
  $sam=$('.block').css("margin-top",$header);
  $('#content').height($windowHeight-$header-$footer-$header);
}
