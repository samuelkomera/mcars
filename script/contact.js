$windowHeight = $(window).height();
$windowWidth = $(window).width();


$sec2 =$('.sec-2').height();
console.log($windowWidth);
if($windowWidth > 1200){
    $sam=$('.sec-1').height($sec2);
    console.log($sam);
}

