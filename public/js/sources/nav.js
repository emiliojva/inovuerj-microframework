$(document).ready(function() {
	$("nav > ul > li.toplevel").hover(function() {
		$(this).next().show();
	}, function() {
		$(this).next().hide();
	});
});