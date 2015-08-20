
$( ".Hamburger" ).click(function() {
  $(".Content" ).animate({"left":"+300px"},"slow");
  $(".Content" ).animate({"left":"+600px"},"slow");
});

$(".Navigation a").click(function() {
$(".Content").stop().animate({"left":"0"});});







	

