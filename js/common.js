jQuery(document).ready(function ($) {
	$("#show-menu").click(function () {
		$('body').toggleClass('mnopen');
	})
	$("#close-menu").click(function () {
		$('body').removeClass('mnopen');
	})
	// jQuery('.navbar-item').click(function(){jQuery('.sub-menu').toggleClass('show');})
});