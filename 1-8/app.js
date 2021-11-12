$(document).ready(function () {
  $(".steps").click(function () {
    $(this)
      .parent()
      .find(".content")
      .map((index, elm) => $(elm).slideUp());
    $(this).children().last().slideDown();
    $(".steps").children().children(".fas").addClass("fa-sort-down");
    $(this).children().children(".fas").removeClass("fa-sort-down");
    $(this).children().children(".fas").addClass("fa-caret-left");
  });
});
