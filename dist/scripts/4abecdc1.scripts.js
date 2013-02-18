"use strict";var yaspaApp=angular.module("yaspaApp",["ui"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"YaspaAbout"}).when("/page/:page",{templateUrl:"views/footer.html",controller:"YaspaFooter"}).otherwise({redirectTo:"/"})}]);"use strict",yaspaApp.directive("prevNxt",function(){return function(){$(".nav li a").bind("click",function(){$(".btn-navbar").is(":visible")&&$(".btn-navbar").click()})}}),"use strict",yaspaApp.controller("MainCtrl",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Testacular"]}),yaspaApp.controller("YaspaNavigation",function(a,b,c){c.get("data/nav.json").success(function(c){a.navigation=c,a.actives="",a.id=b.path(),a.$on("$routeChangeStart",function(){for(var d=0;d<c.length;d++)b.path()==c[d].id?a.id=c[d].id:b.path()=="/page/"&&(a.id="")})}),a.order="weight"}),yaspaApp.controller("YaspaFooter",function(a,b,c){c.get("data/footer.json").success(function(c){a.footer=c;var d=b.hash();a.id=d,a.$on("$routeChangeStart",function(){a.id=b.hash()});for(var e=0;e<c.length;e++)d==c[e].id&&(a.content=c[e].content,a.name=c[e].name);a.order="weight"})}),yaspaApp.controller("YaspaAbout",function(a,b){b.get("data/about.json").success(function(b){a.thumbnails=b,a.mainImageUrl=b[0].image,a.content=b[0].content,a.title=b[0].title}),a.mainImage=function(b){a.mainImageUrl=b.image,a.content=b.content,a.title=b.title,$("#about-content").fitVids()}}),yaspaApp.controller("YaspaPrevNxt",function(a,b,c){a.$on("$routeChangeStart",function(){c.get("data/nav.json").success(function(c){var d=b.path();a.text="",a.nxtShow=0,a.prevShow=0;for(var e=0;e<c.length;e++)c[e].id==d&&(e+1<c.length&&(a.nxt=c[e+1].link,a.nxtShow=1,a.rtext="&rsaquo;",d=="/"&&(a.rtext="<span id='know-more'>Know more </span>&rsaquo;")),e-1>=0&&(a.ltext="&lsaquo;",a.prev=c[e-1].link,a.prevShow=1));b.path()=="/page/"&&(a.nxtShow=0,a.prevShow=0),a.keypressCallback=function(a){alert("Voila!")}})})}),keyControls=function(a){a.which==37&&$(".page-controls .left").click(),a.which==39&&$(".page-controls .right").click()},$(document).ready(function(){$("iframe").each(function(){var a=$(this).attr("src"),b="wmode=transparent";if(a.indexOf("?")!=-1){var c=a.split("?"),d=c[1],e=c[0];$(this).attr("src",e+"?"+b+"&"+d)}else $(this).attr("src",a+"?"+b)})});