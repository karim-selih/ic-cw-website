$(document).ready(function () {
   if ($(window).width() < 1250) {
      $(".event").addClass("l6")
      $(".about").addClass("l6");
      $("#third-about").addClass("push-l3");
      $(".penultimate-event").removeClass("offset-l2");
      $(".last-event").removeClass("pull-l2");
   }
   else {
      $(".about").addClass("l4");
   }
});

$(window).resize(function () {
   if ($(window).width() < 1250) {
      $(".event").addClass("l6");
      $(".about").addClass("l6");
      $("#third-about").addClass("pull-l3");
      $(".penultimate-event").removeClass("offset-l2");
      $(".last-event").removeClass("pull-l2");
      
   }
   else {
      $(".event").removeClass("l6");
      $(".about").removeClass("l6");
      $("#third-about").removeClass("pull-l3");
      $(".about").addClass("l4");
      $(".penultimate-event").addClass("offset-l2");
      $(".last-event").addClass("pull-l2");
   }
});