$(document).ready(function () {
  $(".box").mouseover(function () {
    $(".box").css("background-color", "#fd0000");
  });
  $(".box").mouseout(function () {
    $(".box").css("background-color", "#0001fc");
  });
});
