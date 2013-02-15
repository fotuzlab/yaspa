(function() {

  $('.nav a').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
    if ($('.btn-navbar').is(":visible")) {
      return $('.btn-navbar').click();
    }
  });

}).call(this);

$("html").keydown(function(event) {
  if(event.keyCode==37){
  	$(".page-controls .left").click();
  }
  if(event.keyCode==39){
  	$(".page-controls .right").click();
  }
});