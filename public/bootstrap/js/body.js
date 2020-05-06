//"HERO" image div 
//h2 could get the underline but it's ugly fat
$(".fullDiv a").focus(function(){
    $('img', this).css({"outline":"3px #1f74bf solid", "outline-offset":"-.2em"});
    $('p', this).css("text-decoration","underline");
    $('h3', this).css("text-decoration","underline")
  });
  $(".fullDiv a").blur(function(){
    $('img', this).css("outline", "none");
    $('p', this).css("text-decoration","none");
    $('h3', this).css("text-decoration","none")
  });
  
  //lazyloaded image divs 
  //h2 could get the underline but it's ugly fat
  $(".new-marginDiv a, .marginDiv a").focus(function(){
    $('img', this).removeClass("lazyload");
    $('img', this).css({"outline":"3px #1f74bf solid", "outline-offset":"-.2em"});
    $('p', this).css("text-decoration","underline");
    $('h3', this).css("text-decoration","underline")
  });
  $(".new-marginDiv a, .marginDiv a").blur(function(){
    $('img', this).css("outline", "none");
    $('img', this).addClass("lazyload");
    $('p', this).css("text-decoration","none");
    $('h3', this).css("text-decoration","none")
  });
  //more-less underline
  $(".reveal-category-content a").focus(function(){
     $('span', this).css("text-decoration","underline")
  });
  $(".reveal-category-content a").blur(function(){
     $('span', this).css("text-decoration","none")
  });
  