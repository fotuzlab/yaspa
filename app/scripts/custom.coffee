$('.nav a').click (e) ->
	e.preventDefault()
	$(this).tab('show')
	if ($('.btn-navbar').is(":visible"))
		$('.btn-navbar').click()

# $('#myTab a').click(function (e) {
# 				e.preventDefault();
# 				$(this).tab('show');
# 				if ($('.btn').is(":visible"))
# 					$('.btn').click();
# 			});