(function() {

  $('.nav a').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
    if ($('.btn-navbar').is(":visible")) {
      return $('.btn-navbar').click();
    }
  });

}).call(this);
