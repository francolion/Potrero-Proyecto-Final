$(document).ready(function () {
  $(window).scroll(function () {
    let bar = $(window).scrollTop();
    let position = bar * 0.1;
    $("body").css({
      "background-position": "0 -" + position + "px",
    });
  });
});
