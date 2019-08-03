$(document).ready(function () {
   if ($(window).width() < 1250) {
      $("#timer").addClass("hide");
   }
});

$(window).resize(function () {
   if ($(window).width() < 1250) {
      $("#timer").addClass("hide");
   }
   else {
      $("#timer").removeClass("hide");
   }
});