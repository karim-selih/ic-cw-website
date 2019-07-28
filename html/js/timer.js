function getTime() {
   var countDownDate = new Date("Oct 21, 2019 00:00:00").getTime();
   var now = new Date().getTime();
   var distance = countDownDate - now;

   // Time calculations for days, hours, minutes and seconds
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   localStorage.setItem("days", days.toString(10));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   localStorage.setItem("hours", hours.toString(10));

   // Display the result in the element with id="timer"
   document.getElementById("timer").innerHTML = "CW 2019 starts in " + localStorage.getItem("days") + "d " + localStorage.getItem("hours") + "h ";

   // If the count down is finished
   if (distance < 0) {
      if (localStorage.getItem("days") && localStorage.getItem("days")) {
         localStorage.removeItem("days");
         localStorage.removeItem("hours");
      }
      document.getElementById("timer").innerHTML = "CW is now!";
   }
}

document.addEventListener("DOMContentLoaded", function (e) {
   if (localStorage.getItem("days") && localStorage.getItem("days")) {
      document.getElementById("timer").innerHTML = "CW 2019 starts in " + localStorage.getItem("days") + "d " + localStorage.getItem("hours") + "h ";
   } else {
      getTime();
   }
});