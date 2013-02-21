'use strict';

/* Directives */

yaspaApp.directive('prevNxt', function(){
  return function(){
    $('.nav-collapse li a').bind('click', function() {
    if($('.btn-navbar').is(":visible")) {
      $('.btn-navbar').click();
    }
    });     
  }	
});

yaspaApp.directive('prevNxtKeys', function($location, $http){
  return function(scope, element){
  	scope.$on('$routeChangeStart', function(){
    element.bind('keydown', function(e){
      if(e.keyCode==37 || e.keyCode==39){
      	var currentUrl = $location.path();
      	$http.get("data/nav.json").success(function(data){
      	  for(var i=0; i < data.length; i++){
            if(data[i].id == currentUrl){
              if(e.keyCode == 39 && data[i+1]){ //next
                $location.path(data[i+1].id);
              }
              else if(e.keyCode == 37 && data[i-1]){ //prev
                $location.path(data[i-1].id);
              }
            }
      }
    });
      }
    });
     });
  }	
});

yaspaApp.directive('prevNxtGesture', function($location, $http){
  return function(scope, element){
  	scope.$on('$routeChangeSuccess', function(){
  	var loc = $location.path();
    element.bind('swipeone', function(event_, obj){console.log(obj.description);
    	$http.get("data/nav.json").success(function(data){
    	switch(obj.description){
    		case 'swipe:1:right:up' || 'swipe:1:right:down' || 'swipe:1:right:steady':
    		  for(var i=0; i < data.length; i++){
            if(data[i].id == loc && data[i-1]){
                $location.path(data[i-1].id);
              }
            }

    		break;
    		case 'swipe:1:left:up' || 'swipe:1:left:down' || 'swipe:1:left:steady':
    		  for(var i=0; i < data.length; i++){
            if(data[i].id == loc && data[i+1]){
                $location.path(data[i+1].id);
            }
}
    		break;
    	}
    	});
    	
});});
}


});

