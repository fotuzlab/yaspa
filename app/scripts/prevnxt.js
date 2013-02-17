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
