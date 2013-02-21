'use strict';

/* Directives */

yaspaApp.directive('prevNxt', function(){
  return function(){
    $('.nav li a').bind('click', function() {
    if($('.btn-navbar').is(":visible")) {
      $('.btn-navbar').click();
    }
    });     
  }	
});

yaspaApp.directive('prevNxtKeys', function($location, $http){
  return function(scope, element){
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
  }	
});

yaspaApp.directive('prevNxtGesture', function($location, $http){
  return function(scope, element){
  	var loc = $location.path();
    element.bind('swipeleft', function(e){
    	yaspaswipe('prev', loc, scope, $http, $location);
    });
    element.bind('swiperight', function(e){
    	yaspaswipe('nxt', loc, scope, $http, $location);
    });
  }	
});

var yaspaswipe = function(dir, loc, scope, $http, $location) {console.log(dir);
	$http.get("data/nav.json").success(function(data){
      	  for(var i=0; i < data.length; i++){
            if(data[i].id == loc){
              if(dir=='nxt' && data[i+1]){ //next
                $location.path(data[i+1].id);
              }
              else if(dir=='prev' && data[i-1]){ //prev
                $location.path(data[i-1].id);
              }
            }
      }
    });
}