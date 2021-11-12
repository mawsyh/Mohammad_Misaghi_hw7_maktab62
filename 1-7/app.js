$(document).ready(function () {
  let bar = 1;
  let maxStateWidth = $("#state").width();
  $("#state-button").click(function () {
    if (bar <= 10) {
      $("#state div").css("width", bar * (maxStateWidth / 10));
    }
    bar++;
  });
});
