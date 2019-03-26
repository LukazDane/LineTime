/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// $(document).on("scroll", function(e) {
//   $(".nav").css("background-color", $(document).scrollTop() / 500);
// });
$(document).on("scroll", function(e) {
  var rgba = $(document).scrollTop() / 500;
  $(".nav").css("background-color", "rgba(153, 226, 233," + rgba + ")");
});
