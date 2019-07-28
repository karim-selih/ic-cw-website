$("a[href='#top']").click(function () {
   $("html, body").animate({ scrollTop: 0 }, "fast");
   return false;
});

$(window).scroll(function () {
   if ($(this).scrollTop() > 300) {
      $(".scroll-to-top").removeClass("scale-out");
   } else {
      $(".scroll-to-top").addClass("scale-out");
   }
});