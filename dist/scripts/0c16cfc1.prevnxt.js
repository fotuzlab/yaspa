'use strict';

/* Directives */

yaspaApp.directive('prevNxt', function(){
  return function(){
    $('.nav li a').bind('click', function() {
    if($('.btn-navbar').is(":visible")) {
      $('.btn-navbar').click();
    }
    });
    console.log("1");
    $("#main-content").hover(function(event) {
    	console.log("test success!");
	// event.preventDefault();
	console.log("bah!");
	if(event.which == 37) {
		alert("yes");
  		$('.page-controls .left').click();
	}
	if(event.which == 39) {
  		$('.page-controls .right').click();
	}
});  
  }	
});

yaspaApp.directive('navArrows', function(){
  return function(){
    console.log("test");
    $().keypress(function(event) {
    console.log("test success!");
	// event.preventDefault();
	if(event.which == 37) {
		alert("yes");
  		$('.page-controls .left').click();
	}
	if(event.which == 39) {
  		$('.page-controls .right').click();
	}
});  
  }	
});
