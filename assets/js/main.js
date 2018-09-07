$(function() {
	$(window).scroll(function(e) {
		if ($(this).scrollTop() > 0) {
			$("#social-sidebar").fadeIn("slow");
		} else {
			$("#social-sidebar").hide();
		}
	});
});
console.log("Hello, World!");
