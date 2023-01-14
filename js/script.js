$(document).ready(function () {
  $("#banner-section").css("height", window.innerHeight + "px");
});

$(window).on("scroll", function (e) {
  if (document.documentElement.scrollTop < 200) {
    $("#header").removeClass("grayBG");
  } else {
    if (!$("#header").hasClass("grayBG")) {
      $("#header").addClass("grayBG");
    }
  }
});

$(document).on("click", ".burger", function () {
  $(".burger").toggleClass("clicked");
  $(".csr-nav , .csr-nav .csr-nav-menu").toggleClass("show");
});

$(document).mouseup(function (e) {
  var nav = $(".csr-nav  .csr-nav-menu");

  if ($(".csr-nav").is(e.target) && !nav.is(e.target)) {
    $(".csr-nav , .csr-nav .csr-nav-menu").removeClass("show");
    $(".burger").removeClass("clicked");
  }
});

$(document).on(
  "click",
  "header nav.csr-nav .csr-nav-menu ul li a",
  function () {
    $(".csr-nav , .csr-nav .csr-nav-menu").removeClass("show");
    $(".burger").removeClass("clicked");
  }
);

$(document).on("click", ".hdrChild", function (event) {
  $(this).parent(".accHeader").children(".hdrChild").removeClass("show");
  $(this)
    .parent(".accHeader")
    .siblings(".accBody")
    .children(".accChild")
    .removeClass("show");
  $(this).addClass("show");
  $(this)
    .parent(".accHeader")
    .siblings(".accBody")
    .children(`.accChild.${$(this).attr("data-info")}`)
    .addClass("show");
});
