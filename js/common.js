$(function () {
  // header

  $(".btn_ham").click(function () {
    $(".btn_ham").hide();
    $(".mgnb_close, .mgnb_wrap, .mgnb_dim").fadeIn();
    $("#header").css({ "background": "#fff" });
  });

  $(".mgnb_close, .mgnb li a").click(function () {
    $(".btn_ham").show();
    $(".mgnb_close").hide();
    $(".mgnb_wrap, .mgnb_dim").fadeOut();
    $("#header").css({ "background": "transparent" });
  });

  // use
  const mb = new Swiper('.slide_use', {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false, },
    speed: 600,
    pagination: { el: ".swiper-pagination", type: "bullets", clickable: true, },
  });

  //gotop-btn
  $(".gotop").hide();
  $(".gotop").click(function () {
    $(window).scrollTop(0);
  });
  $(window).scroll(function () {
    let mbtnScroll = $(this).scrollTop();
    if (mbtnScroll > 400) {

      $(".gotop").addClass("active").fadeIn();
    } else {
      $(".gotop").removeClass("active");
    }
  });

});
