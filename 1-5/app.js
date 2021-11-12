$(document).ready(function () {
  $("#slide-up-button").click(function () {
    $("#faded").slideUp();
  });
  $("#slide-down-button").click(function () {
    $("#faded").slideDown();
  });
  $("#slide-toggle-button").click(function () {
    $("#faded").slideToggle();
  });
});
