// 联系方式
$("#contact .col-1").mousemove(function() {
	$("#contact .col-1").addClass("current");

	$("#contact .col-3").removeClass("current");
	$("#contact .col-4").removeClass("current");
	$("#contact .col-5").removeClass("current");

	$("#contact .col-1").removeClass("other");

	$("#contact .col-3").addClass("other");
	$("#contact .col-4").addClass("other");
	$("#contact .col-5").addClass("other");
});

$("#contact .col-3").mousemove(function() {
	$("#contact .col-1").removeClass("current");

	$("#contact .col-3").addClass("current");
	$("#contact .col-4").removeClass("current");
	$("#contact .col-5").removeClass("current");

	$("#contact .col-1").addClass("other");

	$("#contact .col-3").removeClass("other");
	$("#contact .col-4").addClass("other");
	$("#contact .col-5").addClass("other");
});
$("#contact .col-4").mousemove(function() {
	$("#contact .col-1").removeClass("current");

	$("#contact .col-3").removeClass("current");
	$("#contact .col-4").addClass("current");
	$("#contact .col-5").removeClass("current");

	$("#contact .col-1").addClass("other");

	$("#contact .col-3").addClass("other");
	$("#contact .col-4").removeClass("other");
	$("#contact .col-5").addClass("other");
});
$("#contact .col-5").mousemove(function() {
	$("#contact .col-1").removeClass("current");

	$("#contact .col-3").removeClass("current");
	$("#contact .col-4").removeClass("current");
	$("#contact .col-5").addClass("current");

	$("#contact .col-1").addClass("other");

	$("#contact .col-3").addClass("other");
	$("#contact .col-4").addClass("other");
	$("#contact .col-5").removeClass("other");
});
$("footer").mousemove(function() {
	$("#contact .col-1").removeClass("current");

	$("#contact .col-3").removeClass("current");
	$("#contact .col-4").removeClass("current");
	$("#contact .col-5").removeClass("current");

	$("#contact .col-1").removeClass("other");

	$("#contact .col-3").removeClass("other");
	$("#contact .col-4").removeClass("other");
	$("#contact .col-5").removeClass("other");
});
