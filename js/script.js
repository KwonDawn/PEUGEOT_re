$(document).ready(function () {
  AOS.init();

  var swiper = new Swiper(".mySwiper", {
    slidePerView: "auto",
    spaceBetween: 30,
    slidePerGroup: 1,
    speed: 1500,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });

  const btn = $(".top-btn");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.fadeIn();
    } else {
      btn.fadeOut();
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      300
    );
  });

  var ww = $(window).width();
  media();
  function media() {
    const ww = $(window).width();
    if (ww >= 1400) {
      $(".main-menu li").mouseenter(function () {
        const result = $(this).attr("data-alt");
        $(".sub-menu").removeClass("active");
        $(`#${result}`).addClass("active");
        $(".sub-menu-box").addClass("active");
        $(".header-area").addClass("active");
      });
      $(".sub-menu-box").mouseleave(function (e) {
        $(this).removeClass("active");
        $(".header-area").removeClass("active");
      });
    } else {
      $("#hamburger").click(function () {
        $(this).toggleClass("active");
        $(".main-menu").toggleClass("active");
      });
    }
  }
  $(window).resize(function () {
    ww = $(window).width();
    media();
  });

  $(".sub-menu li").mouseenter(function () {
    const result = $(this).attr("data-tab");
    $(".sub-menu-content").removeClass("active");
    $(`#${result}`).addClass("active");
    $(".sub-menu-content-newcars").addClass("active");
  });
  $(".sub-menu-content-newcars").mouseleave(function (e) {
    $(this).removeClass("active");
  });

  $(window).scroll(function () {
    if ($("body, html").scrollTop() > 2320) {
      $(".sec-2 .container").addClass("active");
    } else {
      $(".sec-2 .container").removeClass("active");
    }
  });
});
