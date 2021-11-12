$(document).ready(function () {
  $(".copy-parent").click(function () {
    $(
      ".main"
    ).html(`Parent node's text. The target node The main node's child node The target node
  <div class="child">The main node's child node</div>`);
  });
  $(".copy-child").click(function () {
    $(".main").html(`The main node's child node The target node
    <div class="child">The main node's child node</div>`);
  });
});
