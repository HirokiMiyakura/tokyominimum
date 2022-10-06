(function (d) {
  var config = {
      kitId: "yiu3fbg",
      scriptTimeout: 3000,
      async: true,
    },
    h = d.documentElement,
    t = setTimeout(function () {
      h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
    }, config.scriptTimeout),
    tk = d.createElement("script"),
    f = false,
    s = d.getElementsByTagName("script")[0],
    a;
  h.className += " wf-loading";
  tk.src = "https://use.typekit.net/" + config.kitId + ".js";
  tk.async = true;
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || (a && a != "complete" && a != "loaded")) return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config);
    } catch (e) {}
  };
  s.parentNode.insertBefore(tk, s);
})(document);

window.addEventListener("DOMContentLoaded", () => {
  const infiniteSlider = new Swiper(".infinite-slider", {
    loop: true,
    loopedSlides: 3,
    slidesPerView: "auto",
    spaceBetween: 20,
    speed: 8000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });

  // const otokuSwiper = new Swiper(".otokuSwiper", {
  //   slidesPerView: "auto",
  //   centeredSlides: true,
  //   spaceBetween: 20,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // });

  const voiceSwiper = new Swiper(".swiper-container", {
    // loop: true,
    spaceBetween: 20,
    speed: 1000,
    slidesPerView: 1,
    // autoplay: {
    //   delay: 3000,
    // },
  });
});
