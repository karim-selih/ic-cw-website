$(document).ready(function () {
  $('.sidenav').sidenav();

  if ($(window).width() < 1100) {
    $("#timer").addClass("hide");
  }
});

$(window).resize(function () {
  if ($(window).width() < 1100) {
    $("#timer").addClass("hide");
  }
  else {
    $("#timer").removeClass("hide");
  }
});