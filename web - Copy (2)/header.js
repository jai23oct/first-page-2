$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 300){
			$("nav").css({"background-color" : "rgba(0,0,0,0.9)"})
		}
		else {
			$("nav").css({"background-color" : "rgba(0,0,0,0)"})
		}
	})
	var s = skrollr.init();
});



