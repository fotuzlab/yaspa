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